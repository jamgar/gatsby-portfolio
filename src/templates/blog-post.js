import React from 'react'
import Link from 'gatsby-link'

export default function Template({data}) {
  const post = data.markdownRemark

  return (
    <div>
      <Link to="/blog">Go Back</Link>
      <hr />
      <h1>{post.frontmatter.title}</h1>
      <h4>Posted by James Garcia on {post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.html}} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }){
      id
      html
      fields {
        slug
      }
      frontmatter {
        path
        type
        title
        date
      }
    }
  }
`
