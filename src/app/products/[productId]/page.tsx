// app/products/[productId]/page.tsx
import { GetServerSideProps } from 'next';
import SEO from '../../SEO/SEO';
import { Product } from '@/app/components/ProductBrief';
import { PRODUCTS } from '@/app/components/data';
import ProductDetails from './ProductDetails';
import ThirdSection from '@/app/home-page-sections/ThirdSection';
import PRODUCTSEO from '@/app/SEO/PRODUCTSEO';
import { generateProductSEOObject } from '@/app/SEO/util';

const fetchProductById = async (productId: string): Promise<Product | null> => {
  try {
    // const response =  await fetch(`https://yourapi.com/products/${productId}`);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch product');
    // }
    // const data = await response.json();
    const data = PRODUCTS[Number(productId)-1]
    return data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

const ProductPage = async({ params: { productId } }: { params: { productId: string } }) => {
  const product = await fetchProductById(productId);

  if (!product) {
    return <div>Product not found</div>;
  }
  const seo = generateProductSEOObject(product);

  return (
    <main className='flex flex-col justify-center min-h-screen laptop:mx-16 p-4 mt-8'>
      <PRODUCTSEO
        title={seo.title}
        description={seo.description || `Buy ${product.name} from our store.`}
        image={seo.image || '/default-product-image.jpg'}
        url={`https://designedbysiri.com/products/${product.productId}`}
        datePublished={seo.datePublished}
        dateModified={seo.dateModified}
        keywords={seo.keywords}
        type={seo.type}
        price={seo.price}
        currency={seo.currency}
        availability={seo.availability}
        condition={seo.condition}
        brand={seo.brand}
        manufacturer={seo.manufacturer}
        model={seo.model}
        sku={seo.sku}
        gtin8={seo.gtin8}
        gtin13={seo.gtin13}
      />
      <ProductDetails product={product} />
      <ThirdSection />
    </main>
  );
};

export default ProductPage;
