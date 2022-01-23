import { graphql, Link } from "gatsby"
import * as React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TagList from "../components/tag-list"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" isRoot />
      <div className="flex-col sm:flex-row flex items-center sm:justify-between mb-16 sm:mb-12">
        <h1 className="main-heading sm:w-48 text-black">
          <Link to="/">{siteTitle}.</Link>
        </h1>
        <Bio />
      </div>

      <ol>
        {posts.map(post => {
          const { slug } = post.fields
          const title = post.frontmatter.title || slug

          return (
            <li key={slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="mb-2">
                  <h2>
                    <Link to={slug} itemProp="url">
                      <span itemProp="headline" className="hover:underline">
                        {title}
                      </span>
                    </Link>
                  </h2>
                  <TagList post={post} />
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { hidden: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt(truncate: true, pruneLength: 80)
        fields {
          slug
        }
        frontmatter {
          date(fromNow: true, locale: "ja")
          title
          description
          tags
        }
      }
    }
  }
`
