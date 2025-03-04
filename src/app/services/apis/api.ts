// lib/api.ts

import { SignUpFormInputs } from "@/app/users/signup/page";
import { handleGet, handlePost, handlePut } from "./handleApi";
import Cookies from 'js-cookie';
import { SignInFormInputs } from "@/app/users/signin/page";
import { Address, CategoryType, CategoryTypeProduct, Customer, Product, ProductSearch } from "./models";
import { ProductBasicResponse } from "./ecomModels";

const orgId = 970017453;

export const validateToken = async () : Promise<boolean> => {
  const url = `ecommerce/${orgId}/customer/validateToken`;
  try {
    const response = await handleGet(url);
    if(response){
      return true;
    }else{
      return false;
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

//----------------------Users----------------------------------
export const createCustomer = async (creadVaultUser: SignUpFormInputs) : Promise<any> => {
  const url = `ecommerce/${orgId}/customer`;
  try {
    const response = await handlePost(url, creadVaultUser);
    return response;
  } catch (error) {
    console.log("Res 1 error: ");
    console.error('API Error:', error);
    if (error instanceof Error) {
      return error.message;
    } else {
      return String(error);
    }
  }
};

export const getCustomerByToken = async () : Promise<Customer | undefined> => {
  const url = `ecommerce/${orgId}/customers/fromToken`;
  try {
    const response = await handleGet(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const updateCustomer = async (customer: Customer) : Promise<Customer | undefined> => {
  const url = `ecommerce/${orgId}/customers/${customer.customerId}`;
  try {
    const response = await handlePut(url, customer);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const addAddress = async (customerId: string, address: Address) : Promise<any> => {
  const url = `ecommerce/${orgId}/customers/${customerId}/address`;
  try {
    const response = await handlePost(url, address);
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const updateAddress = async (customerId: string, address: Address) : Promise<any> => {
  const url = `ecommerce/${orgId}/customers/${customerId}/addresses/${address.id}`;
  try {
    const response = await handlePut(url, address);
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const markAddressAsDefault = async (customerId: string, addressId: string) : Promise<any> => {
  const url = `ecommerce/${orgId}/customers/${customerId}/addresses/${addressId}/mark-default`;
  try {
    const response = await handlePut(url, {});
    return response;
  }
  catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const signin = async (creadVaultUser: SignInFormInputs) : Promise<any> => {
  const url = `ecommerce/${orgId}/customers/login`;
  try {
    const signIn = {
      email: creadVaultUser.emailOrPhone,
      phone: creadVaultUser.emailOrPhone,
      password: creadVaultUser.password
    }
    const response = await handlePost(url, signIn);
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const signout = async () : Promise<void> => {
  Cookies.remove('token');
  window.location.href = '/';
};

//----------------------Cart----------------------------------

export const upsertCartItems = async (customerId: string, productId: string, quantity: any, price: any, discountApplied: any) : Promise<any> => {
  const url = `ecommerce/${orgId}/customers/${customerId}/cartItems`;
  try {
    const response = await handlePut(url, {
      productId,
      quantity,
      price,
      discountApplied
    });
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

//----------------------Orders----------------------------------

export const createOrder = async (customerId: string, orderRequest: any) : Promise<any> => {
  const url = `ecommerce/${orgId}/customers/${customerId}/orders`;
  orderRequest.orgId = orgId;
  orderRequest.customerId = customerId;
  try {
    const response = await handlePost(url, orderRequest);
    console.log("createOrder", response);
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const getOrders = async (customerId: string) : Promise<any> => {
  const url = `ecommerce/${orgId}/customers/${customerId}/orders`;
  try {
    const response = await handleGet(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const updateOrderStatus = async (orderId: string, status: string) : Promise<any> => {
  const url = `ecommerce/${orgId}/orders/${orderId}/status`;
  try {
    const response = await handlePut(url, { status });
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const updatePaymentStatus = async (orderId: string, paymentStatus: string) : Promise<any> => {
  const url = `ecommerce/${orgId}/orders/${orderId}/paymentStatus`;
  try {
    const response = await handlePut(url, { paymentStatus });
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// ----------------------CategoryTypes----------------------------------

export const getAllCategoryTypes = async () : Promise<Array<CategoryType>> => { 
  const url = `ecommerce/${orgId}/category-types`;
  try {
    const response = await handleGet(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}


// -----------------------------Products---------------------------

export const getCategoryTypeProducts = async (categoryTypeId: number) : Promise<Array<CategoryTypeProduct>> => {
  const url = `ecommerce/${orgId}/category-types/${categoryTypeId}/products`;
  try {
    const response = await handleGet(url);
    if(response){
      return response.data;
    }else{
      return [];
    }
  } catch (error) {
    
    console.error('API Error:', error);
    throw error;
  }
}

export const getProduct = async (productId: string) : Promise<Product> => {
  const url = `ecommerce/${orgId}/products/${productId}`;
  try {
    const response = await handleGet(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const getProductsForHomepage = async () : Promise<Array<ProductBasicResponse>> => {
  const url = `ecommerce/${orgId}/products/home-page/items`;
  try {
    const response = await handleGet(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

export const searchProducts = async (searchTerm: string) : Promise<Array<ProductSearch>> => {
  const url = `ecommerce/${orgId}/products/search/all?searchTerm=${searchTerm}`;
  try {
    const response = await handleGet(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

// -----------------------------Paymnets---------------------------

export const initiatePayment = async (payload: any) : Promise<any> => {
  const url = `payment/phonepe/transaction`;
  try {
    const response = await handlePost(url, payload);
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

