import {GetStaticPaths, GetStaticProps} from 'next'
import MovieLayout from '../../components/layouts/movie-layout'
import MovieDetails from '../../components/movie-details'
import MovieGraph from '../../components/movie-graph'
import {MovieData} from '../../models/movie'
import {Graph} from "../../models/graph"


const Movie = ({ movie, graphData }: { movie: MovieData, graphData: Graph }) => {

    return (
        <MovieLayout
            graph={<MovieGraph graphData={graphData}/>}
            details={<MovieDetails movie={movie}/>}
        />
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    let movieName = typeof params?.id == 'string' ? params.id : ''
    // Fetch data from external API
    let res = await fetch(`http://127.0.0.1:8000/graph/getMovie/?node_id=` + movieName + `&user_session=`)
    const graphData = await res.json() as Graph

    for (const node of graphData.nodes) {
        node.labelPosition = "bottom"
        let symbol = ""
        if (node.type === "year") {
            symbol = "diamond"
        } else if (node.type === "actor") {
            symbol = "star"
        } else if (node.type === "director") {
            symbol = "square"
        }
        node.symbolType = symbol
        node.color = '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    }
    graphData["focusedNodeId"] = movieName

    res = await fetch(`http://127.0.0.1:8000/graph/getInfo/?node_id=` + movieName)
    const movie = await res.json() as MovieData

    console.log(movie)

    // Pass data to the page via props
    return {
        props: {
            movie,
            graphData
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`http://127.0.0.1:8000/graph/getAll`)
    const allMovies = await res.json()
    const paths = allMovies.map((movie: string) => ({
        params: {id: movie},
    }))

    return { paths, fallback: false }
}

export default Movie
