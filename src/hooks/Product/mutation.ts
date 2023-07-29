import { GetSingleProduct } from "@/services/Product";
import { useMutation } from "@tanstack/react-query";


export function useGetSingleProduct() {
    return useMutation((payload: any) => GetSingleProduct(payload));
  }
  // 