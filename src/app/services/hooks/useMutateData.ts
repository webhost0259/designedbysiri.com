// hooks/useMutateData.ts

import { useCallback } from 'react';
import { mutate } from 'swr';
import { createData, deleteData, updateData } from '../apis/api';

export const useMutateData = (url: string) => {
  const mutateData = useCallback(
    async (data: any, method: 'PUT' | 'POST' | 'DELETE') => {
      try {
        let result;
        switch (method) {
          case 'PUT':
            result = await updateData(url, data);
            break;
          case 'POST':
            result = await createData(url, data);
            break;
          case 'DELETE':
            result = await deleteData(url);
            break;
        }
        // Update the local storage if needed
        localStorage.setItem('data', JSON.stringify(result));
        // Revalidate SWR cache
        await mutate(url);
        return result;
      } catch (error) {
        console.error('Error mutating data:', error);
        throw error;
      }
    },
    [url]
  );

  return { mutateData };
};