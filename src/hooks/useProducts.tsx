import useSWR from "swr";

import {fetcher} from "@/lib/fetcher";
import {API_ENDPOINTS} from "@/lib/api";
import {Product} from "@/types/product";

export function useProducts() {
  const {data, error, isLoading} = useSWR<Product[]>(API_ENDPOINTS.products, fetcher);

  return {
    products: data,
    isLoading,
    isError: error,
  };
}
