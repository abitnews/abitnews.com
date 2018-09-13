module.exports = {
  siteMetadata: {
    title: 'abitnews',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/news/`,
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './static/abitnews.png',

        // appName: null, // Inferred with your package.json
        // appDescription: null,
        // developerName: null,
        // developerURL: null,
        // dir: 'auto',
        // lang: 'en-US',
        // background: '#fff',
        // theme_color: '#fff',
        // display: 'standalone',
        // orientation: 'any',
        // start_url: '/?homescreen=1',
        // version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: true,
          twitter: true,
          yandex: false,
          windows: false,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'abitnews',
    //     short_name: 'abitnews',
    //     start_url: '/',
    //     background_color: '#05c3b6',
    //     theme_color: '#05c3b6',
    //     display: 'minimal-ui',
    //     icon: './static/abitnews.png', // This path is relative to the root of the site.
    //   },
    // },
  ],
};
