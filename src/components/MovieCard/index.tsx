import React from "react";
import { Link } from 'react-router-dom';
import DefaultPosterImg from '../../assets/images/default-movie-image.jpg';
import { Card, Info } from './styles';

type MovieListItem = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
type Props = {
  movie: MovieListItem
}


export const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Link
        to={`/${movie.imdbID}`} 
      >
        <img
          src={ movie.Poster === 'N/A' ? DefaultPosterImg : movie.Poster } 
          className="w-[350px] h-[450px]"
          alt=''
        />
        <Info>
          <p>{movie.Title} </p>
          <span>{movie.Year}</span>
        </Info>
      </Link>
    </Card>
  )
}
