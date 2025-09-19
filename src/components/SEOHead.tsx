import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOHeadProps {
  page: 'home' | 'product' | 'about' | 'contact';
  customTitle?: string;
  customDescription?: string;
}

const SEOHead = ({ page, customTitle, customDescription }: SEOHeadProps) => {
  const { t, i18n } = useTranslation();
  
  const title = customTitle || t(`seo.${page}.title`);
  const description = customDescription || t(`seo.${page}.description`);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Humblify AB",
    "description": "AI-driven platform that integrates sustainability and profitability through Environmental Return on Investment (EROI) methodology",
    "url": "https://humblify.com",
    "logo": "https://humblify.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+46-8-123-456-78",
      "contactType": "customer service",
      "email": "demo@humblify.com"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kungsgatan 12",
      "addressLocality": "Stockholm",
      "postalCode": "111 35",
      "addressCountry": "SE"
    },
    "sameAs": [
      "https://linkedin.com/company/humblify"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://humblify.com${page === 'home' ? '' : `/${page}`}`} />
      
      {/* Language alternates */}
      <link rel="alternate" hrefLang="en" href={`https://humblify.com${page === 'home' ? '' : `/${page}`}?lang=en`} />
      <link rel="alternate" hrefLang="sv" href={`https://humblify.com${page === 'home' ? '' : `/${page}`}?lang=sv`} />
      <link rel="alternate" hrefLang="x-default" href={`https://humblify.com${page === 'home' ? '' : `/${page}`}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://humblify.com${page === 'home' ? '' : `/${page}`}`} />
      <meta property="og:image" content="https://humblify.com/og-image.jpg" />
      <meta property="og:locale" content={i18n.language === 'sv' ? 'sv_SE' : 'en_US'} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://humblify.com/og-image.jpg" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Humblify AB" />
      <meta name="keywords" content="EROI, Environmental Return on Investment, ESG, sustainability, financial analysis, AI platform, enterprise software" />
    </Helmet>
  );
};

export default SEOHead;