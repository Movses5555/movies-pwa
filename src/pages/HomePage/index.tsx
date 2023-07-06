import React, { useState, useEffect, useCallback } from "react";
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { MovieParams } from '../../models/redux-models'
import { fetchMovies } from '../../store/movieSlice'
import SearchBar from '../../components/SearchBar'
import Pagination from '../../components/Pagination'
import {Spinner} from '../../components/Spinner'
import {MovieCard} from '../../components/MovieCard'
import { Container, PageTitle, ErrorMessage, Content, CardWrapper } from './styles'

export function HomePage () {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [debouncedValue, setDebouncedValue] = useState('');
  const dispatch = useAppDispatch()
  const allMovies = useAppSelector(state => state.movie.movies)
  const loading = useAppSelector(state => state.movie.loading)
  const error = useAppSelector(state => state.movie.error)
  const totalResults = useAppSelector(state => state.movie.totalResults)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(searchValue), 1000)
    return () => clearTimeout(timer)
  }, [searchValue]);

  useEffect(() => {
    if(error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [error]);

  const clickHandler = useCallback(
    (value: string, signal: any) => {
      const params:MovieParams = {
        search: value,
        page: currentPage
      }
      dispatch(fetchMovies({params, signal}))
    }, [currentPage, dispatch]
  )

  useEffect(() => {
    const controller = new AbortController();
    if (debouncedValue) {
      clickHandler(debouncedValue, controller.signal);
    }
    return () => controller.abort();
  }, [debouncedValue, currentPage, clickHandler])


  const handleSearch = (value: string) => {
    setCurrentPage(1)
    setSearchValue(value)
  }

  
  return (
    <Container>
      <PageTitle>
        <p>Find the best movies</p>
      </PageTitle>
      <SearchBar
        searchValue={ searchValue }
        onSearch={handleSearch}
      />
      {
        error && (
          <ErrorMessage>
            <p>{error}</p>
          </ErrorMessage>
        )
      }
      <Content>
        {
          loading ? (
            <Spinner />
          ) : (
            <CardWrapper>
              {
                allMovies && allMovies.map(movie => {
                  return (
                    <MovieCard 
                      key={movie.imdbID}
                      movie={movie}
                    />
                  )
                })
              }
            </CardWrapper>
          )
        }
      </Content>
      {
        !error && !!totalResults && +totalResults > 10 && (
          <div className="flex justify-end p-5">
            <Pagination
              currentPage={currentPage}
              lastPage={ Math.ceil(+totalResults/10) }
              maxLength={7}
              setCurrentPage={setCurrentPage}
              loading={loading}
            />
          </div>
        )
      }
    </Container>
  )
}
