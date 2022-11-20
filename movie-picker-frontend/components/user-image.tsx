import classnames from "classnames"

function UserImage({ img , size = 's', hover = true } : { img?: string, size?: 's' | 'l', hover?: boolean}) {
  return (
    <div>
      <div className={classnames(
          "rounded-full ring-1 ring-grey-dark flex items-center justify-center overflow-hidden",
          (hover ? "hover:ring-2 hover:ring-purple" :  "ring-2 ring-purple" ),
          (size == 's' ? 'w-8 h-8' : 'w-16 h-16')
          )}>
        {img ? <img src={img}></img> :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="purple"
            className={classnames((size == 's' ? 'w-6 h-6' : 'w-14 h-14'))}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        }
      </div>
    </div>
  )
}

export default UserImage
