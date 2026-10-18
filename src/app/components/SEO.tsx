import React from "react";
import { Helmet } from "react-helmet-async";
import { BrandAssets } from "@/app/assets";

const SITE_URL = "https://conveyindia.in";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  schemaData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title = "CONVEY | License-Free Two-Way Radios & Wireless Solutions India",
  description = "CONVEY manufactures professional, license-free PMR 446 walkie-talkies. WPC ETA approved wireless solutions for security, hospitality, and industrial use in India.",
  keywords = "walkie talkie india, license free radio, PMR 446, convey radios, micromap Lucknow, wireless communication solutions, industrial two-way radio",
  ogImage = BrandAssets.logo,
  ogType = "website",
  canonicalUrl,
  schemaData,
}) => {
  const siteName = "CONVEY India";
  const fullTitle = title.includes("CONVEY") ? title : `${title} | ${siteName}`;
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const canonical = canonicalUrl || `${SITE_URL}${currentPath === "/" ? "/" : currentPath}`;
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  // Default Organization Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CONVEY India",
    "alternateName": "Micromap Electronic Systems Limited",
    "url": SITE_URL,
    "logo": `${SITE_URL}${BrandAssets.logo}`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-76197-20000",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/convey-india"
    ]
  };

  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />

      {/* Industry Specific / B2B SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Micromap Electronic Systems Limited" />
      <meta name="theme-color" content="#8CC63F" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};
