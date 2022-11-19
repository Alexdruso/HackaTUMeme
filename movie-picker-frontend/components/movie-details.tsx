import { MovieData } from '../models/movie'

const MovieDetails = ({ movie } : { movie: MovieData }) => {

  const getBanner = (banners: string) => {
    return banners.split(',')[0]
  }

  return (
    <div>
      <span className='text-4xl font-medium'>{movie.title}</span>
      <img src={getBanner(movie.banners)} className='rounded-lg w-full mt-4'></img>
    </div>
  )
}

export default MovieDetails
