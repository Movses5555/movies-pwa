import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import MovieService from '../service/movieService'
import { FetchMoviesProps } from '../models/redux-models'

type MovieListItem = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

type PayloadActionType = {
  Search: MovieListItem[],
  totalResults: string,
  Response: string
  Error: string
}

type InitialState = {
  loading: boolean
  movies: MovieListItem[]
  movie: {[key: string]: string}
  totalResults: string
  error: string
}

const initialState: InitialState = {
  loading: false,
  movies: [],
  movie: {},
  totalResults: "0",
  error: ''
}

export const fetchMovies = createAsyncThunk('movie/fetchMovies', (props:FetchMoviesProps) => {
  return MovieService.getAllMovies(props)
})

export const fetchMovie = createAsyncThunk('movie/fetchMovie', (id:string) => {
  return MovieService.getParticularMovie(id)
})

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // Get all Movies
    builder.addCase(fetchMovies.pending, state => {
      state.loading = true
      state.error = ''
    })
    builder.addCase(
      fetchMovies.fulfilled,
      (state, action: PayloadAction<PayloadActionType>) => {
        state.loading = false
        if(action.payload.Response === 'True') {
          state.movies = action.payload.Search
          state.totalResults = action.payload.totalResults
          state.error = ''
        } else {
          state.movies = []
          state.totalResults = '0'
          state.error = action.payload.Error
        }
      }
    )
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false
      state.movies = []
      state.error = action.error.message || 'Something went wrong'
    })
    // Get Movie by ID
    builder.addCase(fetchMovie.pending, state => {
      state.loading = true
      state.movies = []
    })
    builder.addCase(
      fetchMovie.fulfilled,
      (state, action: PayloadAction<{[key: string]: string}>) => {
        state.loading = false
        if(action.payload.Response === 'True') {
          const { Title, Poster, Awards, Genre, Country, Actors, Plot, Year, imdbRating, Rated, Language, Director, Writer } = action.payload
          state.movie = { Title, Poster, Awards, Genre, Country, Actors, Plot, Year, imdbRating, Rated, Language, Director, Writer }
          state.error = ''
        } else {
          state.movie = {}
          state.error = action.payload.Error
        }
      }
    )
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.loading = false
      state.movie = {}
      state.error = action.error.message || 'Something went wrong'
    })
  }
})

export default movieSlice.reducer;
