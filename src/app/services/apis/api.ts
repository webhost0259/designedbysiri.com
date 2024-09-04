// lib/api.ts

import { SignUpFormInputs } from "@/app/users/signup/page";
import { handlePost } from "./handleApi";
import Cookies from 'js-cookie';
import { SignInFormInputs } from "@/app/users/signin/page";

const orgId = 429054743;

export const createCustomer = async (creadVaultUser: SignUpFormInputs) : Promise<any> => {
  const url = `ecommerce/${orgId}/customer`;
  try {
    const response = await handlePost(url, creadVaultUser);
    console.log(response);
    Cookies.set(
      'token', 
      response.data.token, 
      { 
        secure: true, 
        sameSite: 'strict' 
      }
    );
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
    Cookies.set('token', response.data.token, { secure: true, sameSite: 'strict' });
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