import { User } from "../../models/user"
import UserImage from "../user-image"

function CommentNotification({ comment, movie, user }: { comment: string, movie: string, user: User | undefined}) {
  return (
    <div className="shadow rounded p-4 flex gap-4">
      <UserImage size="l" hover={false} img={user?.picture}></UserImage>
      <div className="flex flex-col">
        <div>
          <span className="text-purple font-bold" role="button">{user?.first_name}</span>
          <span className="text-grey"> has commented on movie
            <span className="text-purple font-bold" role="button"> {movie}</span>
          </span>
        </div>
        <span className="text-grey">{comment}</span>
      </div>
    </div>
  )
}

export default CommentNotification
