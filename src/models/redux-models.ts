
export interface FetchMoviesProps {
  params: MovieParams,
  signal: any
}

export interface MovieParams {
  search: string,
  page: number
}

export interface MovieModel {
  "id": number
}

export interface MoviesModel {
  all_movies: MovieModel[],
  particular_movie: MovieModel
  loading: boolean,
  error: string
}
