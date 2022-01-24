// Components
import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TagList from "../components/tag-list"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { nodes: posts, totalCount } = data.allMarkdownRemark
  const tagHeader = `"${tag}" に関する投稿（${totalCount}）`

  return (
    <Layout location={location}>
      <Seo title={`"${tag}" に関する投稿`} />
      <h1 className="mt-0">{tagHeader}</h1>
      <ul>
        {posts.map(post => {
          const { slug } = post.fields
          const { title } = post.frontmatter

          return (
            <li key={slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
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
      </ul>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          tags
          date
        }
      }
    }
  }
`
