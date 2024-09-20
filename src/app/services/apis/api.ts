// lib/api.ts

import { SignUpFormInputs } from "@/app/users/signup/page";
import { handleGet, handlePost } from "./handleApi";
import Cookies from 'js-cookie';
import { SignInFormInputs } from "@/app/users/signin/page";
import { CategoryType, CategoryTypeProduct, Product } from "./models";
import { ProductBasicResponse } from "./ecomModels";

const orgId = 970017453;

export const createCustomer = async (creadVaultUser: SignUpFormInputs) : Promise<any> => {
  const url = `ecommerce/${orgId}/customer`;
  try {
    const response = await handlePost(url, creadVaultUser);
    return response;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

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

