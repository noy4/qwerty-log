/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import * as React from "react"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="text-center md:text-left text-lg mt-5 md:pl-8">
      <div>
        A tech blog written by{" "}
        <a
          href="https://twitter.com/noy_qwerty/"
          className="underline hover:text-red-500 duration-200 transition-colors"
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
