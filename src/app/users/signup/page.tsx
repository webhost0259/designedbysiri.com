'use client'
import { useForm, SubmitHandler } from 'react-hook-form';
import Head from 'next/head';
import { createCustomer } from '@/app/services/apis/api';
import Cookies from 'js-cookie';
import { useState } from 'react';

export interface SignUpFormInputs {
  firstName ?: string,
  lastName ?: string,
  email ?: string,
  phone ?: number
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpFormInputs>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    // Handle sign-up logic here
    setLoading(true);
    try {
      const res = await createCustomer(data);
      Cookies.set('token', res.data.token, { secure: true, sameSite: 'strict' });
    } catch (error) {
      console.error("Sign-in error: ", error);
    } finally {
      setLoading(false);
    }
    window.location.href = '/';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Head>
        <title>Sign Up - Sireesha Reddy Designer Studio</title>
      </Head>
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            firstName
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', { required: 'firstName is required' })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your firstName"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            lastName
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', { required: 'lastName is required' })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your lastName"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              {...register('phone', { required: 'Phone number is required', pattern: { value: /^[0-9]+$/, message: 'Invalid phone number' } })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', { required: 'Please confirm your password', validate: (value) => value === watch('password') || 'Passwords do not match' })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="flex flex-row justify-center items-center space-x-4 w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
            )}
            <span>Sign Up</span>
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{' '}
          <a href="/users/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;