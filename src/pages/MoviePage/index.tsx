import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchMovie,  } from '../../store/movieSlice'
import { Spinner } from '../../components/Spinner'
import DefaultPosterImg from '../../assets/images/default-movie-image.jpg'
import StarIcon from '../../assets/images/star.svg'
import { 
  Container,
  ImgWrapper,
  ContentWrapper,
  Content,
  StarAndYear,
  Line,
  CountryAndGenre,
  Language,
  SubscriptionAndTrailerButton,
  SubscriptionButton,
  TrailerButton,
  InfoContent,
  InfoLeftContent,
  InfoRightContent,
  InfoCard,
  PinkLine,
  BlueLine,
  SubTitle,
} from './styles'

export function MoviePage () {
  let { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useAppDispatch()
  const movie = useAppSelector(state => state.movie.movie)
  const loading = useAppSelector(state => state.movie.loading)
  const error = useAppSelector(state => state.movie.error)
  
  useEffect(() => {
    if(id) {
      dispatch(fetchMovie(id))
    } else {
      navigate('/')
    }
  }, [dispatch, navigate, id])

  useEffect(() => {
    if(error) {
      navigate('/')
    }
  }, [error, navigate])

  if(loading) {
    return (
      <Spinner />
    )
  }

  return (
    <Container>
      <ImgWrapper>
        <img
          src={ movie.Poster === 'N/A' ? DefaultPosterImg : movie.Poster }
          alt={movie.Title}
        />
        <ContentWrapper>
          <Content>
            <h2>{movie.Title}</h2>
            <StarAndYear>
              <img src={StarIcon} alt='star' />
              <span>{movie.imdbRating}</span>
              <Line />
              <span>{movie.Year}</span>
            </StarAndYear>
            <CountryAndGenre>
              <span>{movie.Country}</span>
              <Line />
              <span>{movie.Genre}</span>
              {
                movie.Rated !== 'N/A' && (
                  <>
                    <Line />
                    <span>{movie.Rated}</span>
                  </>
                )
              }
            </CountryAndGenre>
            <Language>
              <span>{movie.Language}</span>
            </Language>
            <SubscriptionAndTrailerButton>
              <SubscriptionButton>
                <span>Watch by subscription</span>
              </SubscriptionButton>
              <TrailerButton>
                <span>Trailer</span>
              </TrailerButton>
            </SubscriptionAndTrailerButton>
          </Content>
        </ContentWrapper>
      </ImgWrapper>
      <InfoContent>
        {
          movie.Awards !== 'N/A' && movie.Plot !== 'N/A' && (
            <InfoLeftContent>
              {
                movie.Awards !== 'N/A' && (
                  <InfoCard>
                    <h3>AWARDS</h3>
                    <PinkLine width='82px' />
                    <BlueLine width='124px'/>
                    <p>{movie.Awards}</p>
                  </InfoCard>
                )
              }
              {
                movie.Plot !== 'N/A' && (
                  <InfoCard>
                    <h3>PLOT</h3>
                    <PinkLine />
                    <BlueLine />
                    <span>{movie.Plot}</span>
                  </InfoCard>
                )
              }
            </InfoLeftContent>
          )
        }
        <InfoRightContent>
          <InfoCard>
            <h3>ACTORS & CREATORS</h3>
            <PinkLine width='196px'/>
            <BlueLine width='294px'/>
            <SubTitle margin='0 0 16px 0' >Director</SubTitle>
            <span>{movie.Director}</span>
            <SubTitle margin='32px 0 16px 0' >Writers</SubTitle>
            <span>{movie.Writer}</span>
            <SubTitle margin='32px 0 16px 0' >Actors</SubTitle>
            <span>{movie.Actors}</span>
          </InfoCard>
        </InfoRightContent>
      </InfoContent>
    </Container>
  )
}

