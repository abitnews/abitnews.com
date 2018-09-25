let activeEnv = process.env.ACTIVE_ENV;

if (!activeEnv) {
  activeEnv = 'development';
}

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: 'abitnews',
    siteUrl: `https://abitnews.com`,
  },
  proxy: {
    prefix: '/api',
    url: process.env.URL_API,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Enables Google Optimize using your container Id
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'abitnews',
        short_name: 'abitnews',
        start_url: '/',
        background_color: '#05c3b6',
        theme_color: '#05c3b6',
        display: 'minimal-ui',
        icon: './static/abitnews.png', // This path is relative to the root of the site.
      },
    },
  ],
};
