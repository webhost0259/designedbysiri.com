//DB Model
export interface Customer{
    customerId: string,
    orgId?: number,
    firstName ?: string,
    lastName ?: string,
    email ?: string,
    phone ?: number
    addresses?: Array<Address>,
}

//DB Model
export interface CustomerCredVault{
    customerId: string,
    email?: string,
    phone?: number,
    password: string,
}

export interface Address{
    id: string,
    line1 : string,
    line2 ?: string,
    city: string,
    district: string,
    state: string,
    zip: string,
    country: string,
    isDefault: boolean
}

export interface CategoryType{
    categoryTypeId: number,
    categoryTypeName: string,
    orgId: number
}

export interface CategoryTypeProduct{
    productId: string,
    productName: string,
    productDescription: string,
    price: number,
    quantity: number,
    categoryName: string,
    categoryTypeName: string,
    imagePath: string
}

export interface Product{
    productId: number,
    productName: string,
    productDescription: string,
    price: number,
    quantity: number,
    status: boolean,
    imagePaths: Array<string>,
    gender: string,
    ageGroup: string,
    brandId: number,
    style: string,
    pattern: string,
    occasion: string,
    season: string,
    fit: string,
    careInstructions: string
}

export interface ProductSearch{
    productId: string;
    orgId: number;
    storeId: string;
    sku: string;
    name: string;
    description?: string;
    price: number;
    quantity: number;
    status: boolean;
    isTopProduct: boolean;
    createdAt?: string; 
    updatedAt?: string;
}

export interface paymentUIpayload {
    merchantTransactionId: string,
    customerId : string,
    amount : number,
    redirectUrl: string,
    mobileNumber ?: number
}

export interface Customer{
    customerId: string,
    orgId?: number,
    firstName ?: string,
    lastName ?: string,
    email ?: string,
    phone ?: number
    addresses?: Array<Address>,
}

export interface OrderItemRequest{
    productId: string,
    quantity: number,
    price: number
}

export interface orderRequest{
    customerId?: string,
    orgId?: number,
    shippingAddress?: string,
    billingAddress?: string,
    items?: Array<OrderItemRequest>
}

export interface OrderItem {
    orderId: string;
    productId: string;
    quantity: number;
    price: number;
    totalAmount: number;
}

export interface Order {
    orderId: string;
    totalAmount: number;
    orderStatus: 'pending' | 'processed' | 'shipped' | 'delivered' | 'cancelled';
    paymentStatus: 'notPaid' | 'paid' | 'refunded';
    createdAt: string; // ISO date string
    items: OrderItem[];
}

export interface GetOrdersResponse {
    status: number;
    message?: string;
    data?: Order[];
}