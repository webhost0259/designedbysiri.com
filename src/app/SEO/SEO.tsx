import Head from 'next/head';
import { ApplicationCanonicalURL, ApplicationDateModified, ApplicationDatePublished, ApplicationDescription, ApplicationImage, ApplicationKeywords, ApplicationTitle, ApplicationURL } from './util';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url, datePublished, dateModified, keywords, canonical }) => {
  
  image = 'https://develop.d23v49il7gq5ot.amplifyapp.com' + image;
  
  return (
    <Head>
        <title>{title ? title : ApplicationTitle + ApplicationKeywords}</title>
        <meta name="description" content={description ? description : ApplicationDescription} />
        <meta name="keywords" content={keywords ? keywords : ApplicationKeywords}></meta>
        <meta name="robots" content='index, follow' />
        <meta property="og:title" content={title ? title : ApplicationTitle} />
        <meta property="og:description" content={description ? description : ApplicationDescription} />
        <meta property="og:image" content={image ? image : ApplicationImage} />
        <meta property="og:url" content={url ? url : ApplicationURL} />
        <link rel="canonical" href={canonical ? canonical : ApplicationCanonicalURL} /> {/* Add canonical link tag */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "image": ${image ? image : ApplicationImage},
            "keywords": ${keywords ? keywords : ApplicationKeywords},
            "author": "Sireesha Reddy Designer Studio",
            "datePublished": ${datePublished ? datePublished : ApplicationDatePublished},
            "dateModified": ${dateModified ? dateModified : ApplicationDateModified},
            "@type": "WebPage",
            "name": "Sireesha Reddy Designer Studio",
            "description": ${description ? description : ApplicationDescription},
            "url": ${url ? url : ApplicationURL}
          }`}
        </script>
        {/* Additional SEO tags */}
        {/* Add any additional meta tags or structured data here */}
      </Head>
  );
};

export default SEO;
