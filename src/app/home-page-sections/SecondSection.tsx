// pages/index.js or components/SecondSection.js
import Image from 'next/image';
import { PRODUCTS } from '../components/data';
import ProductBrief from '../components/ProductBrief';

const SecondSection = () => {
  // Sample data for product cards
  const products = PRODUCTS;

  return (
    <section
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1778353/pexels-photo-1778353.jpeg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-opacity-50 bg-black">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sireesha Reddy Designer Studio
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Handpicked collections of Indian traditional attire.
            </p>
            <div>
              <a
                href="#"
                className="px-6 py-3 bg-green-600 rounded-lg text-white font-semibold hover:bg-green-700"
              >
                Shop Now
              </a>
            </div>
            <div className='flex flex-row mt-6 space-x-4'>
                {
                  products.map((product, index) => {
                    return(
                      <ProductBrief key={index} product={product} />
                    )
                  })
                }
            </div>
          </div>
        </div>
      </section>
  );
};

export default SecondSection;
