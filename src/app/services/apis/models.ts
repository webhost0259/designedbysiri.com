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