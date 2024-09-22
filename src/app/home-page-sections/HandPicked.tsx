'use client'

import { useEffect, useState } from "react";
import { getCategoryTypeProducts, getProductsForHomepage } from "../services/apis/api";
import { CategoryTypeProduct } from "../services/apis/models";
import ProductBrief from "../components/ProductBrief";

interface HandpickedProps {
    categoryType: number;
}
const Handpicked = ({categoryType} : HandpickedProps) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<Array<CategoryTypeProduct>>([]);

    useEffect(() => {
        setLoading(true);
        getCategoryTypeProducts(categoryType).then((data) => {
            console.log(data);
            setProducts(data);
            setLoading(false);
        })
    },[categoryType])

    return (
        <div>
            {loading && <p>Loading...</p>}
            <div className="flex flex-nowrap space-x-4 mt-6">
                {
                    products.length === 0 && !loading && <p className="font-thin">No products found</p>
                }
                {products.map((product, index) => (
                    <ProductBrief 
                        key={index} 
                        productId={product.productId}
                        imagePath={product.imagePath}
                        name={product.productName}
                        description={product.productDescription}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

export default Handpicked;