import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"
import Todolist from "../components/todolist";


class todo extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.subtitle

    return <Layout location={this.props.location} title={siteTitle}>
     <Todolist></Todolist>
            
    
    
    
    </Layout>
  }
}
export default todo

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        subtitle
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
