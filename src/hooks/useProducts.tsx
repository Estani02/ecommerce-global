import useSWR, {mutate as globalMutate} from "swr";

import {fetcher} from "@/lib/fetcher";
import {API_ENDPOINTS} from "@/lib/api";
import {Product} from "@/types/product";

export function useProducts(search?: string) {
  const url = search ? API_ENDPOINTS.search(search) : API_ENDPOINTS.products;
  const {data, error, isLoading, mutate} = useSWR<Product[]>(url, fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 0, // o >0 si querés polling automático
  });

  return {
    products: data ?? [],
    isLoading,
    isError: error,
    mutate, // mutación local para este hook
    refresh: () => globalMutate(url), // también podés exponer la global
  };
}
