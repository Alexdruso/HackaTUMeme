import {GetStaticPaths, GetStaticProps} from 'next'
import Layout from '../../components/layouts/layout'
import MovieLayout from '../../components/layouts/movie-layout'
import MovieDetails from '../../components/movie-details'
import MovieGraph from '../../components/movie-graph'
import { MovieData } from '../../models/movie'
import { loadMovie, loadMovies } from '../../services/movies-service'

const Movie = ({ movie } : { movie: MovieData }) => {

  return (
    <Layout>
      <MovieLayout
        graph={<MovieGraph movie={movie} />}
        details={<MovieDetails movie={movie} />}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movie = typeof params?.id === 'string' ? loadMovie(params.id) : {}
  return {
    props:{
      movie
    }
  }
}

export const getStaticPaths : GetStaticPaths = () => {
  const paths = loadMovies().map((movie) => ({
    params: { id: movie.id },
  }))

  return { paths, fallback: false }
}

export default Movie
