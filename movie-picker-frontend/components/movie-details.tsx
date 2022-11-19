import { MovieData } from '../models/movie'
import Rating from './rating'

const MovieDetails = ({ movie } : { movie: MovieData }) => {

  const getBanner = (banners: string) => {
    return banners.split(',')[0]
  }

  return (
    <div className='flex flex-col gap-2'>
      <span className='text-4xl font-medium'>{movie.title}</span>
      <img src={getBanner(movie.banners)} className='rounded-lg w-full mt-4'></img>
      <span><span className='font-semibold text-purple'>Genre: </span>{movie.genres}</span>
      <span><span className='font-semibold text-purple'>Year: </span>{movie.year}</span>
      <Rating rating={2} imdbRating={2} />
    </div>
  )
}

export default MovieDetails
