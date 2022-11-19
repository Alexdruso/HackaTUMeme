import UserImage from "../user-image"

function RatedNotification() {
  return (
    <div className="shadow rounded p-4 flex gap-4">
      <UserImage size="l" hover={false}></UserImage>
      <div>
        <span className="text-purple font-bold">User name</span>
        <span className="text-grey"> has rated a movie!</span>
      </div>
    </div>
  )
}

export default RatedNotification
