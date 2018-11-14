// let activeEnv = process.env.ACTIVE_ENV;
const path = require(`path`);

// if (!activeEnv) {
//   activeEnv = 'development';
// }

// require('dotenv').config({
//   path: `.env.${activeEnv}`,
// });

module.exports = {
  siteMetadata: {
    title: 'abitnews',
    siteUrl: `https://abitnews.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'abitnews',
        short_name: 'abitnews',
        start_url: '/',
        background_color: '#4353ff',
        theme_color: '#4353ff',
        display: 'minimal-ui',
        icon: './static/abitnews-logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-117352627-5',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Enables Google Optimize using your container Id
      },
    },
    `gatsby-plugin-offline`,
  ],
};
