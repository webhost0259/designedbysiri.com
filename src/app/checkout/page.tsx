'use client'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSWRConfig } from 'swr';
import useSWR from 'swr';
import { paymentUIpayload } from '../services/apis/models';
import { initiatePayment } from '../services/apis/api';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

const CARTKEY = 'siri-cart';

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutForm {
  email?: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

const CheckoutPage = () => {

  const fetchCart = (): CartItem[] => {
    const cart = localStorage.getItem(CARTKEY);
    return cart ? JSON.parse(cart) : [];
   };
  const { mutate } = useSWRConfig();
  const { data: cart, mutate: mutateCart } = useSWR(CARTKEY, fetchCart);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const calculateSubTotal = () => {
    const val = cart?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    return parseFloat(val || '0') || 0;
  };

  const totalAmount = parseFloat(calculateSubTotal().toString()) * 100;

  const [formData, setFormData] = useState<paymentUIpayload>({
    merchantTransactionId: "TRNS1234",
    customerId: "CUST1234",
    amount: 100,
    redirectUrl: "https://designedbysiri.com",
    mobileNumber: 8870692077,
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toastError = (message ?: string) => {
    toast.error(
      (t) => (
        <div className='flex justify-between items-center'>
          <p>{message}</p>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="mt-2 py-1 px-3 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
          >
            Close
          </button>
        </div>
      ),
      {
        duration: Infinity, // Toast will persist until dismissed
        position: 'top-center',
        style: {
          background: '#D32F2F', // Red background for error
          color: '#fff',
        }
      } 
    );
  }

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmitting(true);
    setErrorMessage(null);

    // Fetch the email and address values from the form
    const emailField = document.getElementById("email") as HTMLInputElement;
    const addressField = document.getElementById("address") as HTMLInputElement;
    const cityField = document.getElementById("city") as HTMLInputElement;
    const stateField = document.getElementById("state") as HTMLInputElement;
    const zipField = document.getElementById("zip") as HTMLInputElement;
    const email = emailField?.value.trim();
    const address = addressField?.value.trim();
    const city = cityField?.value.trim();
    const state = stateField?.value.trim();
    const zip = zipField?.value.trim();

    // Validation checks
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage("Please provide a valid email address.");
      toastError("Please provide a valid email address.")
      return;
    }
    if (!address) {
      setErrorMessage("Please provide a valid address.");
      toastError("Please provide a valid address.")
      return;
    }
    if (!city) {
      setErrorMessage("Please provide a valid city.");
      toastError("Please provide a valid city.")
      return;
    }
    if (!state) {
      setErrorMessage("Please provide a valid state.");
      toastError("Please provide a valid state.")
      return;
    }
    if (!zip) {
      setErrorMessage("Please provide a valid pin code.");
      toastError("Please provide a valid pin code.")
      return;
    }

    if(errorMessage?.length){
      toastError(errorMessage);
      return;
    }

    try {
      const newUuid = uuidv4();
      formData.amount = totalAmount;
      formData.merchantTransactionId = newUuid;
      
      initiatePayment(formData).then((res) => {
        // Clear the cart from localStorage
        localStorage.removeItem(CARTKEY);
        // Update the cart state
        mutateCart();
        if(res.data.success){
          window.location.href = res.data.redirectUrl;
        }else {
            setErrorMessage(res.data.message || "Payment initiation failed.");
          }
      }).catch((err) => {
        console.log('Payment initiation failed : ', err);
      })
    } finally {
      // setIsSubmitting(false);
    }
  };

  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutForm>();

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = checkUserLoggedIn();
    setIsLoggedIn(loggedIn);
  }, []);

  const checkUserLoggedIn = (): boolean => {
    // Replace with actual logic to check user authentication status
    return false; // Assuming user is not logged in for now
  };

  return (
    <div className="container mx-auto py-8 px-4 mb-36 text-black">
      <h2 className="text-3xl font-semibold mb-4">Checkout</h2>
      <div className="laptop:hidden bg-gray-100 p-4 rounded-md shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {cart && cart.length > 0 ? (
            <>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.productId} className="flex justify-between items-center">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>₹{calculateSubTotal()}</span>
                </div>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
          (cart && cart.length > 0 &&
            <div>
              {!isLoggedIn && (
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { required: 'Email is required' })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
              )}
            <form onSubmit={handlePaymentSubmit} className="space-y-6">
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  {...register('address', { required: 'Address is required' })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register('city', { required: 'City is required' })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    {...register('state', { required: 'State is required' })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                  Pin Code
                </label>
                <input
                  type="text"
                  id="zip"
                  {...register('zip', { required: 'ZIP code is required' })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.zip && <p className="text-red-500 text-sm mt-1">{errors.zip.message}</p>}
              </div>

              {/* <div className='pt-12 border-t-2 border-green-600'>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  {...register('cardNumber', { required: 'Card number is required' })}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/YY"
                    {...register('expiryDate', { required: 'Expiry date is required' })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>}
                </div>

                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    {...register('cvv', { required: 'CVV is required' })}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  />
                  {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>}
                </div>
              </div> */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Complete Purchase
              </button>
            </form>
          </div>
          )
        }
        <div className="hidden laptop:block bg-gray-100 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          {cart && cart.length > 0 ? (
            <>
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li key={item.productId} className="flex justify-between items-center">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>₹{calculateSubTotal()}</span>
                </div>
              </div>
            </>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;