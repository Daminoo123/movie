import React from 'react'
import MovieCards from '../MovieCard/MovieCards';
import '../MovieCard/MovieCard.css'


const MovieList = ({movies,inputsearch}) => {
  return (
    <div className='cards'>
        {movies.map(movie=> <MovieCards movie={movie} key={movie.id} />) }
    </div>
  )
}

export default MovieList ;

