// pages/index.tsx
import { GetServerSideProps } from 'next';
import SEO from './SEO/SEO';
import Image from 'next/image'; // Import the 'Image' component from the appropriate library
import SecondSection from './home-page-sections/SecondSection';
import ThirdSection from './home-page-sections/ThirdSection';
import { ApplicationDescription, ApplicationTitle } from './SEO/util';
import { getProductsForHomepage } from './services/apis/api';
import VideoSection from './home-page-sections/VideoSection';
import CategorySection from './home-page-sections/CategorySection';
import TestimonialsSection from './home-page-sections/TestimonialsSection';

interface HomePageProps {
  productData: {
    title: string;
    description: string;
    image: string;
  };
}

 const HomePage = async () => { 

  const productData = await getProductsForHomepage();

  return (
    <div className='text-black'>
      {/* SEO Component */}
      <SEO 
        title={ApplicationTitle} 
        description={ApplicationDescription} 
        image='/logo.png' 
        url="https://designedbysiri.com"
      />

      {/* Page Content */}
      <main>
        <SecondSection products={productData}/>
        <VideoSection 
          video1='/home-screen-images/video-sec-1.mp4' 
          video2='/home-screen-images/video-sec-3.mp4'
        />
        <CategorySection />
        <TestimonialsSection />
        <ThirdSection />
      </main>
    </div>
  );
};

export default HomePage;
