const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: 'abitnews',
    lang: 'en',
    siteUrl: `https://abitnews.com`,
    description: 'bit-sized technology newsletter, 1/2 human, 1/2 bot',
    author: 'abitnews',
    keywords: [
      'news',
      'newsletter',
      'tech',
      'machine learning',
      'artificial intelligence',
      'blockchain',
    ],
    social: {
      twitter: {
        author: '@abitnewsbot',
        description:
          "bit-sized technology newsletter, 1/2 human, 1/2 bot. Tag me or use #abitnews to get my attention, if i'm not crashed",
      },
    },
  },
  plugins: [
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `_issues`),
        name: 'markdown-pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          'gatsby-remark-smartypants',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-anchor"><circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path></svg>`,
              className: `anchor`,
            },
          },
        ],
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
        icon: './src/images/logo.png', // This path is relative to the root of the site.
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
    `gatsby-plugin-sitemap`,
  ],
};
