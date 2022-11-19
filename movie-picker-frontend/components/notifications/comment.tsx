import UserImage from "../user-image"

function CommentNotification({ comment }: { comment: string}) {
  return (
    <div className="shadow rounded p-4 flex gap-4">
      <UserImage size="l" hover={false}></UserImage>
      <div className="flex flex-col">
        <div>
          <span className="text-purple font-bold">User name</span>
          <span className="text-grey"> has commented on movie blabla</span>
        </div>
        <span className="text-grey">{comment}</span>
      </div>
    </div>
  )
}

export default CommentNotification
