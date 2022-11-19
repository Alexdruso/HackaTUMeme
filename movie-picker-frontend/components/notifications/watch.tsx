import UserImage from "../user-image"

function WatchNotification() {
  return (
    <div className="shadow rounded p-4 flex gap-4">
      <UserImage size="l" hover={false}></UserImage>
      <div>
        <span className="text-purple font-bold">User name</span>
        <span className="text-grey"> has watched this movie!</span>
      </div>
    </div>
  )
}

export default WatchNotification
