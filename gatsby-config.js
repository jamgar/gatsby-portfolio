module.exports = {
  siteMetadata: {
    title: 'My Gatsby Example',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/blogs`,
        name: 'blogs'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/projects`,
        name: 'projects'
      }
    },
    'gatsby-transformer-remark'
  ],
}


// path: `${__dirname}/src/pages`,
