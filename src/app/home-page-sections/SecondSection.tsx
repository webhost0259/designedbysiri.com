import { PRODUCTS } from '../components/data';
import ProductBrief from '../components/ProductBrief';

const SecondSection = () => {
  // Sample data for product cards
  const products = PRODUCTS;


  return (
    <section
        className="bg-cover bg-center h-[614px] relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1778353/pexels-photo-1778353.jpeg')",
        }}
      >
        <div className="flex items-center justify-center h-full bg-opacity-50 bg-black">
          <div className="text-center text-white">
            <h1 className="text-2xl laptop:text-4xl font-bold mb-4">
              Sireesha Reddy Designer Studio
            </h1>
            <p className="text-sm mb-8 text-wrap">
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
            <div className="max-w-96 tablet:max-w-[640px] laptop:min-w-[1024px] overflow-x-auto">
              <div className="flex flex-nowrap space-x-4 mt-6">
                {products.map((product, index) => (
                  <ProductBrief key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default SecondSection;
