// lib/api.ts

export const fetcher = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('An error occurred while fetching the data.');
    }
    return response.json();
  };

  // lib/api.ts

// Example for updating data
export const updateData = async (url: string, data: any) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('An error occurred while updating the data.');
    }
    return response.json();
  };
  
  // Example for creating new data
  export const createData = async (url: string, data: any) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('An error occurred while creating the data.');
    }
    return response.json();
  };
  
  // Example for deleting data
  export const deleteData = async (url: string) => {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('An error occurred while deleting the data.');
    }
    return response.json();
  };