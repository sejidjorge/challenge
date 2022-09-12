import useSWR from "swr";
import getProductsApi from "../services/getProductsApi";

export function useFetch<Data = any, Error = any>(query: string) {
  const { data, error } = useSWR<Data, Error>(query, async (query) => {
    const response = await getProductsApi.get(query);

    const data = await response.data;
    
    return data;
  });

  return { data, error, isLoading: !data && !error };
}
