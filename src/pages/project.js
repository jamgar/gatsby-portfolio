import React from 'react'
import Link from 'gatsby-link'

const ProjectPage = ({ data }) => (
  <div>
    <h1>Projects</h1>
    {data.allMarkdownRemark.edges.map(project => (
      <div key={project.node.id}>
        <h3>{project.node.frontmatter.title}</h3>
        <br />
        <p>{project.node.excerpt}</p>
        <br />
        <Link to={project.node.fields.slug}>Read More</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </div>
)

export const projectQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default ProjectPage
