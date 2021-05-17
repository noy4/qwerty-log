import { Link } from "gatsby"
import * as React from "react"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <div className="global-wrapper min-h-screen py-16">
        <main>{children}</main>
      </div>
      <footer className="bg-black text-white flex flex-col justify-center items-center pt-4 pb-4">
        <Link to="/">Home</Link>
        <small className="text-gray-500 mt-2">
          © {new Date().getFullYear()}
          {` `}
          <a
            href="https://twitter.com/noy_qwerty/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qwerty
          </a>
        </small>
      </footer>
    </>
  )
}

export default Layout
