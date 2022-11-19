import { MovieData } from '../models/movie'
import moviesData from '../data/movies_data.json' assert {type: 'json'}

export const loadMovies = () : MovieData[] => {
  return moviesData
}

export const loadMovie = (id: string) : MovieData | undefined => {
  return moviesData.find((movie: MovieData) => movie.id === id)
}
