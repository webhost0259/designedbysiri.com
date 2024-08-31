// hooks/useData.ts

import useSWR from 'swr';
import { fetcher } from '../apis/api';

export const useData = (url: string) => {
  const { data, error, mutate } = useSWR(url, fetcher);
  
  return {
    data,
    error,
    mutate,
  };
};