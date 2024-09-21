// components/SearchBar.js
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { Product, ProductSearch } from '../services/apis/models';
import { searchProducts } from '../services/apis/api';

interface Props{
  onSearch: (query: string) => void;
  placeholder: string
}
const SearchBar = ({ onSearch,placeholder }: Props) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ProductSearch[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
        const products = await searchProducts(value);
        setResults(products);
        setDropdownVisible(true);
    } else {
        setResults([]);
        setDropdownVisible(false);
    }
  };

  const handleSelect = (product: ProductSearch) => {
    setQuery(product.name); // Set the input to the selected product name
    onSearch(product.name); // Call the search with the selected product name
    setDropdownVisible(false); // Hide dropdown after selection
    window.location.href = `/products/${product.productId}`; // Redirect to the product details page
};

  return (
    <div className="relative">
            <form className="flex items-center">
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <IoIosSearch className="absolute w-5 h-5 text-gray-500 ml-3 flex items-center pointer-events-none" />
            </form>

            {isDropdownVisible && results.length > 0 && (
                <ul className="absolute left-0 right-0 z-10 bg-white border border-gray-300 rounded-md mt-1">
                    {results.map((product) => (
                        <li
                            key={product.productId}
                            onClick={() => handleSelect(product)}
                            className="py-2 px-4 hover:bg-gray-200 cursor-pointer text-black"
                        >
                            {product.name ? product.name : 'No products found'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
  );
};

export default SearchBar;
