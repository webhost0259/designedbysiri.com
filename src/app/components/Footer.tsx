// components/Footer.tsx
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Company Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Company</h4>
            <ul>
              <li>
                <Link href="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
            <ul>
              <li>
                <Link href="/shipping" className="hover:underline">Shipping Info</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:underline">Returns</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 mb-4 text-gray-800 rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4 text-white">
            <a href="https://www.facebook.com/profile.php?id=61561066942013" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebookSquare  className='text-blue-600' size={36}/>
            </a>
            <a href="https://www.instagram.com/sireeshareddy_designer_studio/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram className='text-green-600' size={36}/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-400 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
