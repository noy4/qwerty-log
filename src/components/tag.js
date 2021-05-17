import { Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"

const Tag = ({ value, totalCount }) => {
  return (
    <Link to={`/tags/${kebabCase(value)}/`}>
      <div className="bg-my-black hover:bg-gray-700 duration-200 transition-colors rounded-sm mx-0.5 my-0.5 px-2 text-white text-sm">
        {value}
        {totalCount && ` (${totalCount})`}
      </div>
    </Link>
  )
}

export default Tag
