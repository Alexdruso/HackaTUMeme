import {GetStaticPaths, GetStaticProps} from 'next'
import Layout from '../../components/layouts/layout'
import MovieLayout from '../../components/layouts/movie-layout'
import MovieDetails from '../../components/movie-details'
import MovieGraph from '../../components/movie-graph'
import {MovieData} from '../../models/movie'
import {loadMovie, loadMovies} from '../../services/movies-service'
import {Graph} from "../../models/graph";
import {useRouter} from "next/router";


const Movie = ({movie, graphData}: { movie: MovieData, graphData: Graph }) => {
    const router = useRouter()
    console.log(router.query)

    return (
        <MovieLayout
            graph={<MovieGraph movie={movie} graphData={graphData}/>}
            details={<MovieDetails movie={movie}/>}
        />
    )
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const movie = typeof params?.id === 'string' ? loadMovie(params.id) : {}
    // Fetch data from external API
    const res = await fetch(`http://127.0.0.1:8000/graph/?node_id=` + movie + `&node_type=` + params?.type)
    const graphData = await res.json() as Graph
    for (const node of graphData.nodes) {
        node.labelPosition = "bottom"
        let symbol = ""
        if (node.type === "year") {
            symbol = "diamond"
        } else if (node.type === "author") {
            symbol = "star"
        } else if (node.type === "director") {
            symbol = "square"
        }
        node.symbolType = symbol
        node.color = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    }
    graphData["focusedNodeId"] = "Pretty Woman"
    console.log(graphData)
    // Pass data to the page via props
    return {
        props: {
            movie,
            graphData
        }
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = loadMovies().map((movie) => ({
        params: {id: movie.id},
    }))

    return {paths, fallback: false}
}

export default Movie
