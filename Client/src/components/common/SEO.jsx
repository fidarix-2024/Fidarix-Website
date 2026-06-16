import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  canonical, 
  schema,
  type = 'website'
}) {
  const siteName = "Fidarix";
  const defaultTitle = "Fidarix | Premium Web Development & Digital Leverage";
  const defaultDescription = "Fidarix crafts premium digital experiences, high-performance websites, and growth engines that help businesses completely outshine their competition.";
  const baseUrl = "https://fidarix.com"; // Replace with actual production URL

  const fullTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const fullDescription = description || defaultDescription;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Standard SEO Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {canonical && <link rel="canonical" href={canonicalUrl} />}

      {/* OpenGraph / Social Media Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl} />
      {/* Default OG Image could be added here */}
      <meta property="og:image" content={`${baseUrl}/images/common/logo.png`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${baseUrl}/images/common/logo.png`} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
