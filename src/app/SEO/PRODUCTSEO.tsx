import React from 'react';

interface ProductSEOProps {
  title: string;
  description: string;
  keywords: string;
  url: string;
  image: string;
  type: string;
  price: number;
  currency: string;
  availability: string;
  condition: string;
  brand: string;
  manufacturer: string;
  model: string;
  sku?: string;
  gtin8?: string;
  gtin13?: string;
  canonical: string;
  datePublished: string;
  dateModified: string;
}

const ProductSEO: React.FC<ProductSEOProps> = ({
  title,
  description,
  keywords,
  url,
  image,
  type,
  price,
  currency,
  availability,
  condition,
  brand,
  manufacturer,
  model,
  sku,
  gtin8,
  gtin13,
  canonical,
  datePublished,
  dateModified,
}) => {
  const ApplicationURL = "https://www.example.com";
  const ApplicationCanonicalURL = "https://www.example.com";
  const ApplicationImage = "https://www.example.com/default-image.jpg";
  const ApplicationKeywords = "default, keywords";
  const ApplicationDatePublished = "2023-01-01";
  const ApplicationDateModified = "2023-01-01";

  // JSON-LD data as an object
  const schemaData = {
    "@context": "https://schema.org",
    "image": image ? image : ApplicationImage,
    "keywords": keywords ? keywords : ApplicationKeywords,
    "author": "Sireesha Reddy Designer Studio",
    "datePublished": datePublished ? datePublished : ApplicationDatePublished,
    "dateModified": dateModified ? dateModified : ApplicationDateModified,
    "@type": "WebPage"
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}></meta>
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={url ? url : ApplicationURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
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
      <link rel="canonical" href={canonical ? canonical : ApplicationCanonicalURL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};

export default ProductSEO;