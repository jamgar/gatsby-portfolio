const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  // console.log(createNodeField);
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({boundActionCreators, graphql}) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/blog-post.js')
  const projectTemplate = path.resolve('src/templates/project-post.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
    `).then (res => {
      if (res.errors) {
        return Promise.reject(res.errors)
      }

      res.data.allMarkdownRemark.edges.forEach(({node}) => {
        const isBlog = node.frontmatter.type === 'blog'

        createPage({
          path: node.fields.slug,
          component: isBlog ? postTemplate : projectTemplate,
          context: {
            slug: node.fields.slug
          }
        })
      })
  })
}
