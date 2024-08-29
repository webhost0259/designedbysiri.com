import Head from 'next/head';
import { ApplicationCanonicalURL, ApplicationDateModified, ApplicationDatePublished, 
        ApplicationDescription, ApplicationImage, ApplicationKeywords, 
        ApplicationTitle, ApplicationURL } from './util';

interface PRODUCTSEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  canonical?: string;
  datePublished?: string;
  dateModified?: string;
  keywords?: string;
  type?: string;
  price?: number;
  currency?: string;
  availability?: string;
  condition?: string;
  brand?: string;
  manufacturer?: string;
  model?: string;
  sku?: string;
  gtin8?: string;
  gtin13?: string;
}

const PRODUCTSEO: React.FC<PRODUCTSEOProps> = 
        (
          { 
            title, description, image, url, 
            datePublished, dateModified, keywords,
            type, price, currency, availability, condition,
            brand, manufacturer, model, sku, gtin8, gtin13, canonical
          }) => {
    
  return (
    <Head>
        <title>{title ? title  : ApplicationTitle + ApplicationDescription + ApplicationKeywords}</title>
        <meta name="description" content={description ? description : ApplicationDescription} />
        <meta name="keywords" content={keywords ? keywords : ApplicationKeywords}></meta>
        <meta name="robots" content='index, follow' />
        <meta property="og:url" content={url ? url : ApplicationURL} />
        <meta property="og:title" content={title ? title : ApplicationTitle} />
        <meta property="og:description" content={description ? description : ApplicationDescription} />
        <meta property="og:image" content={image ? image : ApplicationImage} />
        <meta property="og:type" content={type ? type : "website"} />
        <meta name="product:price" content={price?.toString()} /> 
        <meta name="product:currency" content={currency} /> 
        <meta name="product:availability" content={availability ? availability : "in stock"} /> 
        <meta name="product:condition" content={condition ? condition : "New"} /> 
        <meta name="product:brand" content={brand ? brand : "Sireesha Reddy Designer Studio"} /> 
        <meta name="product:manufacturer" content={manufacturer ? manufacturer : "Sireesha Reddy Designer Studio"} /> 
        <meta name="product:model" content={model ? model : "2024"} /> 
        <meta name="product:sku" content={sku ? sku : "SRS2024"} /> 
        <meta name="product:gtin8" content={gtin8 ? gtin8 : "12345678"} /> 
        <meta name="product:gtin13" content={gtin13 ? gtin13 : "1234567890123"} /> 
        <meta property="og:price:amount" content={price?.toString()} />
        <meta property="og:price:currency" content={currency} />
        <meta property="og:availability" content={availability ? availability : "in stock"} />
        <meta property="og:condition" content={condition ? condition : "New"} />
        <meta property="og:brand" content={brand ? brand : "Sireesha Reddy Designer Studio"} />
        <meta property="og:manufacturer" content={manufacturer ? manufacturer : "Sireesha Reddy Designer Studio"} />
        <meta property="og:model" content={model ? model : "2024"} />
        <meta property="og:sku" content={sku ? sku : "SRS2024"} />
        <meta property="og:gtin8" content={gtin8 ? gtin8 : "12345678"} />
        <meta property="og:gtin13" content={gtin13 ? gtin13 : "1234567890123"} />
        <meta property="og:site_name" content="Sireesha Reddy Designer Studio" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="te_IN" />
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
            "url": ${url ? url : ApplicationURL},
            "offers": {
              "@type": "Offer",
              "price": ${price?.toString()},
              "priceCurrency": ${currency},
              "availability": ${availability ? availability : "in stock"},
              "condition": ${condition ? condition : "New"},
              "url": ${url ? url : ApplicationURL}
            },
            "brand": {
              "@type": "Brand",
              "name": ${brand ? brand : "Sireesha Reddy Designer Studio"}
            },
            "manufacturer": {
              "@type": "Organization",
              "name": ${manufacturer ? manufacturer : "Sireesha Reddy Designer Studio"}
            },
            "model": ${model ? model : "2024"},
            "sku": ${sku ? sku : "SRS2024"},
            "gtin8": ${gtin8 ? gtin8 : "12345678"},
            "gtin13": ${gtin13 ? gtin13 : "123456789012"},
            // "aggregateRating": {
            //   "@type": "AggregateRating",
            //   "ratingValue": "4.4",
            //   "reviewCount": "89"
            // },
            // "review": {
            //   "@type": "Review",
            //   "reviewRating": {
            //     "@type": "Rating",
            //     "ratingValue": "4.4",
            //     "bestRating": "5"
            //   },
            //   "author": {
            //     "@type": "Person",
            //     "name": "Sireesha Reddy"
            //   },
            //   "datePublished": ${datePublished ? datePublished : ApplicationDatePublished},
            //   "description": ${description ? description : ApplicationDescription}
            // }
          }`}
        </script>
      </Head>
  );
};

export default PRODUCTSEO;
