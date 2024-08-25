// pages/index.tsx
import { GetServerSideProps } from 'next';
import SEO from './SEO/SEO';
import Image from 'next/image'; // Import the 'Image' component from the appropriate library
import SecondSection from './home-page-sections/SecondSection';
import ThirdSection from './home-page-sections/ThirdSection';

interface HomePageProps {
  productData: {
    title: string;
    description: string;
    image: string;
  };
}

 const HomePage = async () => {

  const productData = await fetchProductData();

  return (
    <div className='text-black'>
      {/* SEO Component */}
      <SEO 
        title={productData.title} 
        description={productData.description} 
        image={productData.image} 
        url="https://designedbysiri.com"
      />

      {/* Page Content */}
      <main className="container mx-auto">
        <SecondSection />
        <ThirdSection />
      </main>
    </div>
  );
};

// Function to fetch product data
async function fetchProductData() {
  // Simulating fetching data from an API
  const productData = {
    title: 'Best Products in Our Store',
    description: 'Check out our wide range of products including the latest in fashion and technology.',
    image: '/logo.png'
  };

  return productData;
}

export default HomePage;
