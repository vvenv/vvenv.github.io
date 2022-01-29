import * as React from "react"
import { Link } from "gatsby"

interface Props {
  location: Location
  title: string
}

const SiteTitle = ({ location, title }: Props) => {
  return location.pathname === `${__PATH_PREFIX__}/` ? (
    <h1 className="m-0 h-8 whitespace-nowrap text-4xl font-black leading-8">
      <Link to="/">{title}</Link>
    </h1>
  ) : (
    <h3 className="m-0 h-8 whitespace-nowrap text-xl font-black leading-10">
      <Link to="/">{title}</Link>
    </h3>
  )
}

export default SiteTitle
