import React, { useRef, useState, useEffect, ReactNode } from 'react'
import classNames from 'classnames'

interface props {
  items: {
    name: string,
    to: string | { func: Function, link: string }
  }[],
  children: ReactNode,
}
const DropDownMenu = ({ items, children } : props) => {
  const [open, setOpen] = useState(false)
  let containerRef = useRef<HTMLDivElement>(null)

  const toggle = () => {
    setOpen(!open)
  }

  useEffect(() => {
    let handler = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const handleOptionSelected = (to: string | { func: Function, link: string }) => {
    if (typeof(to) === 'string'){
      // go to link
    } else {
      const { func, link } = to
      func()
      // go to link
    }
  }

  return (
    <div className="relative" ref={containerRef} onClick={toggle} role="button">
      <div>
        {children}
      </div>
      <div className="absolute transform translate-y-3 -translate-x-10 shadow-md bg-white overflow-hidden m-0 z-10 w-100 py-1 text-sm text-gray-700">
        {open && items.map(item => (
          <div onClick={() => handleOptionSelected(item.to)} key={item.name}
            className="block py-2 px-4 hover:bg-gray-100" >
            { item.name }
          </div>
        ))}
      </div>
    </div>
  )
}

export default DropDownMenu
