import { Product } from "../services/apis/models";

export const ApplicationTitle = 'Designed by Siri | Sireesha Reddy Designer Studio, Buy Indian Traditional Attire Online, Designed by Siri';
export const ApplicationDescription = `Designed by Siri | Sireesha Reddy Designer Studio, Buy Indian Traditional Attire Online, Designed by Siri. Free shipping across India.
                                      Wedding materials, stitched and unstitched materials, sarees, salwar kameez, kurtis, lehengas, anarkali suits, dupattas, shararas, and more.`

export const ApplicationKeywords = 'Designed by Siri, Stitching, Customization, Designing, Wedding, eCommerce, Product, Buy Online, Indian Traditional Attire, Wedding Materials, Sarees, Salwar Kameez, Kurtis, Lehengas, Anarkali Suits, Dupattas, Shararas';
export const ApplicationURL = 'https://designedbysiri.com';
export const ApplicationImage = '/logo.png';
export const ApplicationDatePublished = '2024-08-08';
export const ApplicationDateModified = '2024-08-08';
export const ApplicationTwitterCard = 'summary_large_image';
export const ApplicationCanonicalURL = 'https://designedbysiri.com';
export const ApplicationRobots = 'index, follow';
export const ApplicationOGType = 'website';
export const ApplicationOGLocale = 'en_US';
export const ApplicationOGSiteName = 'Sireesha Reddy Designer Studio';
export const ApplicationOGImageWidth = '1200';
export const ApplicationOGImageHeight = '630';
export const ApplicationOGImageType = 'image/png';
export const ApplicationOGImageAlt = 'Sireesha Reddy Designer Studio Logo';
export const ApplicationTwitterHandle = '@designedbysiri';
export const ApplicationTwitterSite = '@designedbysiri';
export const ApplicationTwitterCreator = '@designedbysiri';
export const ApplicationTwitterImageAlt = 'Sireesha Reddy Designer Studio Logo';
export const ApplicationTwitterImageWidth = '1200';
export const ApplicationTwitterImageHeight = '630';
export const ApplicationTwitterImageType = 'image/png';
export const ApplicationTwitterImage = '/logo.png';
export const ApplicationFavicon = '/favicon.ico';
export const ApplicationAppleTouchIcon = '/apple-touch-icon.png';
export const ApplicationManifest = '/manifest.json';
export const ApplicationThemeColor = '#ffffff';
export const ApplicationBackgroundColor = '#ffffff';
export const ApplicationMSApplicationTileColor = '#ffffff';
export const ApplicationMSApplicationTileImage = '/mstile-150x150.png';


export const generateProductSEOObject = async (product: Product) => {

  const keywords = [
    "women's lehanga",
    "bridal lehanga",
    "designer lehanga",
    "wedding lehanga",
    "heavy embroidery lehanga",
    "festive lehanga",
    "ethnic wear for women",
    "lehanga choli",
    "bridal wear",
    "Sireesha Reddy Designer Studio"
  ]
  
  return {
    title: product.productName,
    description: product.productDescription + keywords.join(', '),
    image: product.imagePaths[0],
    url: `https://designedbysiri.com/products/${product.productId}`,
    datePublished: "2024-08-08",
    dateModified: "2024-08-08",
    keywords: keywords.join(', '),
    type: product?.pattern,
    price: product?.price,
    currency: "INR",
    availability: product?.status ? 'In Stock' : 'Out of Stock',
    condition: "New",
    brand: product?.brandId,
    manufacturer: "Designed by siri | Sireesha Reddy Designer Studio",
    model: product?.pattern,
    sku: product?.productId,
    gtin8: product?.productId,
    gtin13: product?.productId
  }
}


