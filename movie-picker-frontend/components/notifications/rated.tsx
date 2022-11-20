import { User } from "../../models/user"
import UserImage from "../user-image"

function RatedNotification({ rating, movie, user }: { rating: number, movie: string, user: User | undefined}) {
  return (
    <div className="shadow rounded p-4 flex gap-4">
      <UserImage size="l" hover={false}></UserImage>
      <div>
        <div>
          <span className="text-purple font-bold">{user?.first_name}</span>
          <span className="text-grey"> has rated the movie
            <span className="text-purple font-bold"> {movie} </span>
            with {rating} stars!
          </span>
        </div>
      </div>
    </div>
  )
}

export default RatedNotification
