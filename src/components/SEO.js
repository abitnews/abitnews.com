import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO({ description, meta = [], keywords = [], title }) {
  const { site } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          lang
          description
          keywords
          social {
            twitter {
              author
            }
          }
        }
      }
    }
  `);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.lang,
      }}
      title={title}
      defaultTitle={site.siteMetadata.title}
      titleTemplate={`${site.siteMetadata.title} - %s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: 'og:image',
          content: `https://abitnews.com/abitnews-logo-square.png`,
        },

        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter.author,
        },
        {
          name: `twitter:title`,
          content: site.siteMetadata.title,
        },
        {
          name: `twitter:description`,
          content: site.siteMetadata.social.twitter.description,
        },
        {
          name: 'twitter:image',
          content: 'https://abitnews.com/abitnews-logo-square.png',
        },
      ]
        .concat(
          site.siteMetadata.keywords.length > 0
            ? {
                name: `keywords`,
                content: site.siteMetadata.keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {`
          {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "abitnews",
            "url": "http://abitnews.com",
            "sameAs": [
              "https://twitter.com/abitnewsbot"
            ]
          }
      `}
      </script>
    </Helmet>
  );
}
