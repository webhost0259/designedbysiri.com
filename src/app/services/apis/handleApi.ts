import Cookies from 'js-cookie';


// const BASE_URL = 'http://localhost:8080/api'; 

const BASE_URL = 'https://api.surfserver.in/api/v1'; 


export const handleGet = async (url: string, _params?: any) => {
    const token = Cookies.get('token');
        
    url = `${BASE_URL}/${url}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const handlePost = async (url: string, requestBody: any) => {
    const token = Cookies.get('token');
    url = `${BASE_URL}/${url}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                // Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const handlePostFormData = async (url: string, requestBody: any) => {
    const token = Cookies.get('token');
    url = `${BASE_URL}/${url}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: requestBody
        });
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const handlePut = async (url: string, requestBody: any) => {
    const token = Cookies.get('token');
    url = `${BASE_URL}/${url}`;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

export const handleDelete = async (url: string, requestBody: any) => {
    const token = Cookies.get('token');
    url = `${BASE_URL}/${url}`;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}