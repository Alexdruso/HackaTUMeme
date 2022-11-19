import DropdownMenu from "./dropdown-menu"
import SearchInput from "./search-input"
import UserImage from "./user-image"

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-white shadow-lg flex items-center px-10 gap-4">
      <div className="w-44">
        <img src="/streampicker_logo.svg" alt="StreamPicker - Streaming Guide"></img>
      </div>
      <div className="grow"></div>
      <SearchInput />
      <DropdownMenu items={[{ name: "Logout", to: { func: ()=> {}, link: ""}}]}>
        <UserImage />
      </DropdownMenu>
    </div>
  )
}
