module.exports = {
  siteMetadata: {
    title: `Half Hearted`,
    description: `The place for all things Half Hearted; A band out of Hartford, CT`,
    author: `Half Hearted`,
    banner: {
      links: [
        {
          label: 'Apple Music',
          url: 'https://geo.music.apple.com/us/album/half-hearted/1490397728?mt=1&app=music'
        },
        {
          label: 'Spotify',
          url: 'https://open.spotify.com/track/3mkVbOUBdWBpFfsboMridi?si=9gnXrystS8OgUgQz6z20vw'
        }
      ],
      headingText: 'Half Hearted',
      subheadingText: 'New Single Vicious Cycle Out Now!'
    },
    footer: {
      
    }
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
        icon: `src\\images\\Half-Hearted-Symbol.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
