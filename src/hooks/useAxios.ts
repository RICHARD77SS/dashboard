import useSWR from 'swr';

import api from '../services/api';

interface Props {
  url: string;
}

export function useAxios({url}:Props) {
  const { data, error, mutate } = useSWR(url,
    async (url) => {
      const response = await api.get(url);
      return response.data;
    },
    {}
  );
  return { data, error, mutate };
}