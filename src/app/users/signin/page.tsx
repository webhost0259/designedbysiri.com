'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import Head from 'next/head';
import { signin } from '@/app/services/apis/api';
import { useState } from 'react';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import Image from 'next/image';

export interface SignInFormInputs {
  emailOrPhone: string;
  password: string;
};

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInFormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignInFormInputs> = async (data) => {
    // Handle sign-in logic here
    setLoading(true);
    try {
      const res = await signin(data);
      setLoading(false);
      Cookies.set('token', res.token, { secure: true, sameSite: 'strict' });
      Cookies.set('customerId', res.customer.customerId, { secure: true, sameSite: 'strict' });
      Cookies.set('firstName', res.customer.firstName, { secure: true, sameSite: 'strict' });
      Cookies.set('lastName', res.customer.lastName, { secure: true, sameSite: 'strict' });
      window.location.href = '/';
    } catch (error) {
      // Capture the error message
      let errorMessage = 'An unexpected error occurred';
      
      // Check if the error has a response (common in HTTP errors)
      if ((error as any).response) {
        // Extract the message from the response data
        errorMessage = (error as any).response.data?.message || (error as any).response.statusText || errorMessage;
      } else if ((error as any).message) {
        // Fallback to a generic error message
        errorMessage = (error as any).message;
      }
    
      toast.error(errorMessage, {
        duration: 3000,
        position: 'top-center',
        style: {
          background: 'red',
          color: '#fff',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Sign In - Sireesha Reddy Designer Studio</title>
      </Head>
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="emailOrPhone" className="block text-sm font-medium text-gray-700">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="emailOrPhone"
              {...register('emailOrPhone', { required: 'This field is required' })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email or phone number"
            />
            {errors.emailOrPhone && (
              <p className="mt-1 text-sm text-red-600">{errors.emailOrPhone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="remember_me" className="block ml-2 text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="/users/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="flex flex-row justify-center items-center space-x-4 w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                <path  fill="white" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            )}
            <span>Sign In</span>
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{' '}
          <a href="/users/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;