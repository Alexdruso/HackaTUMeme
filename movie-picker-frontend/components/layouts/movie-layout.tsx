import { ReactNode } from "react"

export default function MovieLayout({ graph, details } : {graph: ReactNode, details: ReactNode}) {
  return (
    <div className="grid grid-cols-5 gap-10">
      <div className="col-span-3">
        {graph}
      </div>
      <div className="col-span-2">
        {details}
      </div>
    </div>
  )
}
