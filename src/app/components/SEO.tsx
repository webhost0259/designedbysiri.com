import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="eCommerce, Product, Buy Online" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || '/logo.png'} />
      <meta property="og:url" content={url || 'https://designedbysiri.com'} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url || 'https://designedbysiri.com'} />
    </Head>
  );
};

export default SEO;
