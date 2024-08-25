// app/products/[productId]/page.tsx
import { GetServerSideProps } from 'next';
import SEO from '../../components/SEO';
import { Product } from '@/app/components/ProductBrief';
import { PRODUCTS } from '@/app/components/data';
import ProductDetails from './ProductDetails';

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
  return (
    <main className='min-h-screen mx-16 p-4 mt-8'>
      <SEO 
        title={product.name}
        description={product.description || `Buy ${product.name} from our store.`}
        image={product.imageUrl || '/default-product-image.jpg'}
        url={`https://designedbysiri.com/products/${product.productId}`}
      />
      <ProductDetails product={product} />
    </main>
  );
};

export default ProductPage;
