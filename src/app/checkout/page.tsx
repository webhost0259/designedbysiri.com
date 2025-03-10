'use client'
import { useState, useEffect } from 'react';
import { set, useForm } from 'react-hook-form';
import useSWR from 'swr';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { getCustomerByToken, initiatePayment, updatePaymentStatus } from '../services/apis/api';
import { Address, Customer } from '../services/apis/models';
import { createOrderRequest } from '../cart/cartUtils';

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
  district: string;
  state: string;
  zip: string;
}

const CheckoutPage = () => {
  const { register, handleSubmit, setValue, watch } = useForm<CheckoutForm>();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  const fetchCart = (): CartItem[] => {
    const cart = localStorage.getItem(CARTKEY);
    return cart ? JSON.parse(cart) : [];
  };

  const { data: cart } = useSWR(CARTKEY, fetchCart);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const customerData = await getCustomerByToken();
        if (customerData) {
          setCustomer(customerData);
        }
        const defaultAddress = customerData?.addresses?.find(addr => addr.isDefault) || customerData?.addresses?.[0];
        if (defaultAddress) {
          setSelectedAddress(defaultAddress);
          prefillAddressForm(defaultAddress);
        }
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomerData();
  }, []);

  const prefillAddressForm = (address: Address) => {
    setValue('address', `${address.line1}, ${address.line2 || ''}`);
    setValue('city', address.city);
    setValue('district', address.district);
    setValue('state', address.state);
    setValue('zip', address.zip);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = customer?.addresses?.find(addr => addr.id === event.target.value);
    if (selected) {
      setSelectedAddress(selected);
      prefillAddressForm(selected);
    }
  };

  const onSubmit = async (data: CheckoutForm) => {
    if (!cart || cart.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }

    const orderPayload = {
      shippingAddress: `${data.address}, ${data.city}, ${data.state}, ${data.zip}`,
      billingAddress: `${data.address}, ${data.city}, ${data.state}, ${data.zip}`,
      items: cart.map(item => ({ productId: item.productId, quantity: item.quantity, price: item.price })),
    };

    try {
      const orderResponse = await createOrderRequest(orderPayload);
      const transactionId = orderResponse.data.data.orderId || uuidv4();
      console.log('Order created:', orderResponse.data.data);
      const paymentResponse = await initiatePayment({
        merchantTransactionId: transactionId,
        customerId: customer?.customerId || '',
        amount: cart.reduce((total, item) => total + item.price * item.quantity, 0) * 100,
        redirectUrl: `https://designedbysiri.com/users/payment-status?transactionId=${transactionId}`,
        mobileNumber: customer?.phone || 0,
      });
      console.log('Payment initiated:', paymentResponse.data.data);
    } catch (error) {
      console.error('Error processing payment:', error);
      toast.error('Error processing your order.');
    }
  };

  return (
    <div className='container mx-auto py-8 px-4 mb-36 text-black'>
      <h2 className='text-3xl font-semibold mb-4'>Checkout</h2>
      <div className='grid md:grid-cols-2 gap-8'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          {customer && customer.addresses && (
            <div>
              <label className='block text-sm font-medium text-gray-700'>Select Address</label>
              <select
                className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                onChange={handleAddressChange}
                value={selectedAddress?.id || ''}
              >
                {customer.addresses.map((addr) => (
                  <option key={addr.id} value={addr.id}>{`${addr.line1}, ${addr.city}, ${addr.state}, ${addr.zip}`}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className='block text-sm font-medium text-gray-700'>Address</label>
            <input type='text' {...register('address', { required: true })} className='mt-1 p-2 block w-full border' />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>City</label>
            <input type='text' {...register('city', { required: true })} className='mt-1 p-2 block w-full border' />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>State</label>
            <input type='text' {...register('state', { required: true })} className='mt-1 p-2 block w-full border' />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>Zip Code</label>
            <input type='text' {...register('zip', { required: true })} className='mt-1 p-2 block w-full border' />
          </div>

          <button type='submit' className='w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md'>
            Complete Purchase
          </button>
        </form>

        {/* Cart Summary */}
        <div className='border p-4 rounded-md'>
          <h3 className='text-xl font-semibold mb-4'>Your Cart</h3>
          {cart && cart.length > 0 ? (
            <>
              <ul className='space-y-2'>
                {cart.map((item) => (
                  <li key={item.productId} className='flex justify-between border-b py-2'>
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className='mt-4 font-bold text-lg'>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</div>
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