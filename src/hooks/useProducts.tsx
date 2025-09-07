import useSWR from "swr";

import {fetcher} from "@/lib/fetcher";
import {API_ENDPOINTS} from "@/lib/api";
import {Product} from "@/types/product";

export function useProducts(search?: string) {
  const url = search ? `${API_ENDPOINTS.products}?search=${search}` : API_ENDPOINTS.products;
  const {data, error, isLoading} = useSWR<Product[]>(url, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
