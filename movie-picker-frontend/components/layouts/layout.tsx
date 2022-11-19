import Navbar from '../navbar'
import { ReactNode } from "react"

export default function Layout({ children } : {children: ReactNode}) {
  return (
    <>
      <Navbar />
      <main className="mt-12 px-10 py-10">{children}</main>
    </>
  )
}
