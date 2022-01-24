import { TagIcon } from "@heroicons/react/solid"
import { format, formatDistanceToNowStrict } from "date-fns"
import { ja } from "date-fns/locale"
import { Link } from "gatsby"
import React from "react"
import Tag from "./tag"

const TagList = ({ post, toNow = false }) => {
  return (
    <div className="flex flex-wrap items-center">
      <Link to={`/tags`}>
        <TagIcon className="w-5 h-5 text-my-black hover:text-gray-700 duration-200 transition-colors" />
      </Link>
      {post.frontmatter.tags?.map((tag, index) => (
        <li key={index}>
          <Tag value={tag} />
        </li>
      ))}
      <small className="flex-grow text-right">
        {toNow
          ? formatDistanceToNowStrict(new Date(post.frontmatter.date), {
              locale: ja,
            })
          : format(new Date(post.frontmatter.date), "yyyy年M月d日")}
      </small>
    </div>
  )
}
export default TagList
