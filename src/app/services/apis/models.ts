//DB Model
export interface Customer{
    customerId: number,
    orgId?: number,
    firstName ?: string,
    lastName ?: string,
    email ?: string,
    phone ?: number
    addresses?: Array<Address>,
}

//DB Model
export interface CustomerCredVault{
    customerId: number,
    email?: string,
    phone?: number,
    password: string,
}

export interface Address{
    line1 : string,
    line2 ?: string,
    city: string,
    state: string,
    zip: string,
    country: string
}

export interface CategoryType{
    categoryTypeId: number,
    categoryTypeName: string,
    orgId: number
}

export interface CategoryTypeProduct{
    productId: number,
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