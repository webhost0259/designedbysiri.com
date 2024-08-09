import Head from 'next/head';

const SEO = () => (
  <Head>
    {/* Basic Meta Tags */}
    <title>Sireesha Reddy Designer Studio - Indian Traditional Clothing</title>
    <meta name="description" content="Sireesha Reddy Designer Studio offers a curated collection of exquisite Indian traditional clothing, including sarees, lehengas, and kurta pajama sets. Shop now for the finest designs and quality." />
    <meta name="keywords" content="Indian traditional clothing, sarees, lehengas, kurta pajama, Sireesha Reddy, designer studio" />
    <meta name="robots" content="index, follow" />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content="Sireesha Reddy Designer Studio" />
    <meta property="og:description" content="Explore our curated collection of exquisite Indian traditional clothing, including sarees, lehengas, and kurta pajama sets. Find your perfect outfit at Sireesha Reddy Designer Studio." />
    <meta property="og:image" content="/logo.jpg" />
    <meta property="og:url" content="https://www.designedbysiri.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Sireesha Reddy Designer Studio" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Sireesha Reddy Designer Studio" />
    <meta name="twitter:description" content="Shop for the finest Indian traditional clothing at Sireesha Reddy Designer Studio. Our collection includes sarees, lehengas, and kurta pajama sets." />
    <meta name="twitter:image" content="logo.jpg" />
    <meta name="twitter:site" content="@yourtwitterhandle" />

    {/* Canonical URL */}
    <link rel="canonical" href="https://www.designedbysiri.com" />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
