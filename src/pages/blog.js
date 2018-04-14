import React from 'react'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => (
  <div>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <small>
          Posted by James Garcia on {post.node.frontmatter.date}
        </small>
        <br />
        <p>{post.node.excerpt}</p>
        <br />
        <Link to={post.node.fields.slug}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            date
            type
          }
        }
      }
    }
  }
`

export default BlogPage
