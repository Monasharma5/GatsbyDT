module.exports = {
  siteMetadata: {
    title: `Deligence`,
    description: `Deligence site powered by WordPress and Gatsby`,
    author: `Deligence Team`, // 👈 add this line
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://www.deligence.com/graphql`,
        schema: {
      timeout: 150000,   
    },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
