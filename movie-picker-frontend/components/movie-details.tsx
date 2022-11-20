import { MovieData } from '../models/movie'
import Rating from './rating'

const MovieDetails = ({ movie } : { movie: MovieData }) => {

  return (
    movie ? <div className='flex flex-col gap-2'>
      <span className='text-4xl font-medium'>{movie.id}</span>
      <img src={movie.image} className='rounded-lg w-full mt-4'></img>
      {/* <span><span className='font-semibold text-purple'>Genre: </span>{movie.genres}</span>
      <span><span className='font-semibold text-purple'>Year: </span>{movie.year}</span> */}
      <Rating rating={2} imdbRating={2} />
    </div> : null
  )
}

export default MovieDetails
