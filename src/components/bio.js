import * as React from "react"

const Bio = () => {
  return (
    <div className="text-center md:text-left text-lg mt-5 md:pl-8">
      <div>
        A tech blog written by{" "}
        <a
          href="https://twitter.com/noy_qwerty/"
          className="hover:text-red-500 duration-200 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Qwerty
        </a>
        .
      </div>
    </div>
  )
}

export default Bio
