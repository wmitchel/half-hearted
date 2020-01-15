module.exports = {
  siteMetadata: {
    title: `Half Hearted`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    banner: {
      links: [
        {
          label: 'Apple Music',
          url: 'https://geo.music.apple.com/us/album/eighteen-single/1455532419?mt=1&app=music'
        },
        {
          label: 'Spotify',
          url: 'https://open.spotify.com/album/4cceofRtIk65FnVqCe7oSq?highlight=spotify:track:1txAgsB81RZdCSXQ6CArlu'
        }
      ],
      headingText: 'Half Hearted',
      subheadingText: 'New Single Eighteen Out Now!'
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
