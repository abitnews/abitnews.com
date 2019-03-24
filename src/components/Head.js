import React from 'react';
import Helmet from 'react-helmet';

const Head = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <html lang="en" />
    <title>abitnews</title>
    <meta
      name="description"
      content="bit sized technology newsletter, 1/2 human, 1/2 bot"
    />
    <meta
      name="keywords"
      content="news,newsletter,tech,machine learning,artificial intelligenge,blockchain"
    />
    <meta property="og:url" content="https://abitnews.com/" />
    <meta property="og:site_name" content="abitnews" />
    <meta property="og:title" content="abitnews" />
    <meta
      property="og:description"
      content="bit sized technology newsletter, 1/2 human, 1/2 bot"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://abitnews.com/abitnews-logo-square.png"
    />
    <meta property="og:image:width" content="300" />
    <meta property="og:image:height" content="300" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="abitnewsbot" />
    <meta name="twitter:title" content="abitnews" />
    <meta
      name="twitter:description"
      content="bit sized technology newsletter, 1/2 human, 1/2 bot"
    />
    <meta name="twitter:image" content="" />
    <script type="application/ld+json">{`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "abitnews",
            "url": "http://abitnews.com",
            "sameAs": [
              "https://twitter.com/abitnewsbot"
            ]
          }
      `}</script>
  </Helmet>
);

export default Head;
