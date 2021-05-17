import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
// Components
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tag from "../components/tag"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location}>
    <Seo title="Tags" />
    <div>
      <h1 className="mt-0">Tags</h1>
      <ul className="flex flex-wrap">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Tag value={tag.fieldValue} totalCount={tag.totalCount} />
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
