module.exports = {
  siteMetadata: {
    title: `Deligence`,
    description: `Deligence site powered by WordPress and Gatsby`,
    author: `Deligence Team`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://www.deligence.com/graphql`,
        schema: {
          timeout: 300000,
          perPage: 20,
        },
        type: {
          MediaItem: {
            excludeFieldNames: ["localFile"], // 🚀 disable downloading images/videos
          },
        },
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: true,
        },
      },
    },
  ],
}
