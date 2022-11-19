import type { NextApiRequest, NextApiResponse } from 'next'
import { MovieData } from '../../../models/movie'
import moviesData from './movies_data.json' assert {type: 'json'}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieData>
) {
  if (req.method === 'GET') {
    const { id } = req.query
    res.status(200).json(moviesData.find((movie) => movie.id === id) as MovieData)
  } else {
    res.status(400)
  }
}
