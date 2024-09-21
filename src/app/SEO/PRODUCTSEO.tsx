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
  const ApplicationURL = "https://designedbysiri.com"; // Update to your preferred URL
  const ApplicationCanonicalURL = "https://designedbysiri.com"; // Update accordingly
  const ApplicationImage = "https://designedbysiri.com/default-image.jpg"; // Update accordingly
  const ApplicationKeywords = "default, keywords";
  const ApplicationDatePublished = "2023-01-01";
  const ApplicationDateModified = "2023-01-01";

  const imageToUse = image ? image : ApplicationImage;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product", // Use Product type
    name: title,
    description: description,
    image: imageToUse,
    offers: {
      "@type": "Offer",
      price: price ? price.toString() : "0",
      priceCurrency: currency,
      itemCondition: condition ? condition : "http://schema.org/NewCondition",
      availability: availability ? availability : "http://schema.org/InStock",
    },
    brand: {
      "@type": "Brand",
      name: brand ? brand : "Sireesha Reddy Designer Studio",
    },
    sku: sku ? sku : "SRS2024",
    gtin8: gtin8 ? gtin8 : "12345678",
    gtin13: gtin13 ? gtin13 : "1234567890123",
    datePublished: datePublished ? datePublished : ApplicationDatePublished,
    dateModified: dateModified ? dateModified : ApplicationDateModified,
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta property="og:url" content={url ? url : ApplicationURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageToUse} />
      <meta property="og:type" content={type ? type : "website"} />
      <meta name="product:price" content={price ? price.toString() : "0"} />
      <meta name="product:currency" content={currency} />
      <meta name="product:availability" content={availability ? availability : "in stock"} />
      <meta name="product:condition" content={condition ? condition : "New"} />
      <meta name="product:brand" content={brand ? brand : "Sireesha Reddy Designer Studio"} />
      <meta name="product:manufacturer" content={manufacturer ? manufacturer : "Sireesha Reddy Designer Studio"} />
      <meta name="product:model" content={model ? model : "2024"} />
      <meta name="product:sku" content={sku ? sku : "SRS2024"} />
      <meta name="product:gtin8" content={gtin8 ? gtin8 : "12345678"} />
      <meta name="product:gtin13" content={gtin13 ? gtin13 : "1234567890123"} />
      <link rel="canonical" href={canonical ? canonical : ApplicationCanonicalURL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
    </>
  );
};

export default ProductSEO;