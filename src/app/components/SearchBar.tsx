// components/SearchBar.js
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

interface Props{
  onSearch: (query: string) => void;
  placeholder: string
}
const SearchBar = ({ onSearch,placeholder }: Props) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full"
      />
      <IoIosSearch className="absolute w-5 h-5 text-gray-500 ml-3 flex items-center pointer-events-none" />
    </form>
  );
};

export default SearchBar;
