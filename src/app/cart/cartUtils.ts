import Cookies from 'js-cookie';

import { addProductToWishlist, createOrder, getCustomerByToken, getOrders, getWishlist, upsertCartItems, validateToken } from "../services/apis/api";

export const upsertCart = async (productId: string, 
                                quantity: number, 
                                price: number, 
                                discountApplied: number) => {

     // Check if there is a token in the cookies
     const token = Cookies.get('token');
     
     // If there is no token, do not proceed
    if (!token) {
        return;
    }

    // Check if token is valid
    const isValid = await validateToken();
    if (!isValid) {
        return;
    }

    getCustomerByToken().then((response) => {
        console.log("Customer", response);
        if (response) {
            upsertCartItems(response.customerId, 
                            productId, 
                            quantity, 
                            price, 
                            discountApplied);
        }
    }); 
}

export const upsertWishList = async (productId: string) => {

    // Check if there is a token in the cookies
    const token = Cookies.get('token');
    
    // If there is no token, do not proceed
    if (!token) {
        return;
    }

    // Check if token is valid
    const isValid = await validateToken();
    if (!isValid) {
        return;
    }

    getCustomerByToken().then((response) => {
        console.log("Customer", response);
        if (response) {
            addProductToWishlist(response.customerId, productId);
        }
    });

}

export const getWishlistData = async () => {

    // Check if there is a token in the cookies
    const token = Cookies.get('token');
    
    // If there is no token, do not proceed
    if (!token) {
        return;
    }

    // Check if token is valid
    const isValid = await validateToken();
    if (!isValid) {
        return;
    }

    const customerResponse = await getCustomerByToken();
    console.log("Customer", customerResponse);

    if (!customerResponse || !customerResponse.customerId) {
        return;
    }

    const response = await getWishlist(customerResponse.customerId);

    return response;

}


export const createOrderRequest = async (orderRequest: any): Promise<any> => {
    try {
        // Check if there is a token in the cookies
        const token = Cookies.get('token');
        
        // If there is no token, do not proceed
        if (!token) {
            throw new Error("No authentication token found");
        }

        // Validate token
        const isValid = await validateToken();
        if (!isValid) {
            throw new Error("Invalid token");
        }

        // Get customer details by token
        const customerResponse = await getCustomerByToken();
        console.log("Customer", customerResponse);

        if (!customerResponse || !customerResponse.customerId) {
            throw new Error("Customer details not found");
        }

        // Create order
        const orderResponse = await createOrder(customerResponse.customerId, orderRequest);
        console.log("Order", orderResponse);

        return orderResponse;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const getOrdersData = async () => {
    try {

         // Check if there is a token in the cookies
        const token = Cookies.get('token');
        
        // If there is no token, do not proceed
        if (!token) {
            return;
        }

        // Check if token is valid
        const isValid = await validateToken();
        if (!isValid) {
            return;
        }

        const customerResponse = await getCustomerByToken();
        console.log("Customer", customerResponse);

        if (!customerResponse || !customerResponse.customerId) {
            return;
        }

        const response = await getOrders(customerResponse.customerId);

        return response;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
}