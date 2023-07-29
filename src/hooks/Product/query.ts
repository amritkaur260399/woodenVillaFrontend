import { useQuery } from "@tanstack/react-query";

import {
  GetAllProducts,
  GetProductDescription,
  GetSingleProduct,
} from "@/services/Product/index";

export const useGetAllProducts = (payload: any) =>
  useQuery(["GetProduct", payload], () => GetAllProducts(payload), {
    refetchOnWindowFocus: false,
  });

// export const useGetSingleProduct = (payload:any) =>
// useQuery(["GetSingleProduct",payload],  () => GetSingleProduct(payload),{
//   refetchOnWindowFocus: false,
// }
// );
export const useGetSingleProduct = (payload: any) => {
  return useQuery(
    ["GetSingleProduct", payload],
    () => GetSingleProduct(payload),
    {
      refetchOnWindowFocus: false,
    }
  );
};

export const useGetProductDescription = (payload: any) => {
  return useQuery(
    ["GetProductDescription", payload],
    () => GetProductDescription(payload),
    {
      refetchOnWindowFocus: false,
    }
  );
};
