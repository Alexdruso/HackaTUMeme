function IMDBRating({ rating }: { rating: number}) {
  return (
    <div className="flex bg-imdb-yellow rounded w-fit px-2 text-white">
      <span className="font-medium">{rating.toFixed(1)} IMDB</span>
    </div>
  )
}

export default IMDBRating
