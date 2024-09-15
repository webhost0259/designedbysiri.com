// app/products/[productId]/page.tsx
import { Product } from '@/app/services/apis/models';
import ProductDetails from './ProductDetails';
import ThirdSection from '@/app/home-page-sections/ThirdSection';
import { generateProductSEOObject } from '@/app/SEO/util';
import ProductSEO from '@/app/SEO/PRODUCTSEO';
import { getProduct } from '@/app/services/apis/api';

interface Props {
  product: Product | null;
}

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const { productId } = params;

  let product: Product | null = null;

  try {
    product = await getProduct(productId);
  } catch (error) {
    console.error('Failed to fetch product:', error);
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const seo = await generateProductSEOObject(product);

  return (
    <main className='flex flex-col justify-center min-h-screen laptop:mx-16 p-4 mt-8'>
      <ProductSEO
        title={seo.title}
        description={seo.description}
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
        brand={seo.brand?.toString()}
        manufacturer={seo.manufacturer}
        model={seo.model}
        sku={seo.sku.toString()}
        gtin8={seo.gtin8.toString()}
        gtin13={seo.gtin13.toString()}
        canonical={seo.url}
      />
      <ProductDetails product={product} />
      <ThirdSection />
    </main>
  );
};

export default ProductPage;