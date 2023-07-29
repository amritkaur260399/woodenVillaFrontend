import { useMutation } from "@tanstack/react-query";

import { AddtoWishList, DeleteWishList } from "@/services/wishlist";

// export const useAddContact = () => {
//   return useMutation((payload: any) => addToContact(payload));
// };

export function useAddtoWishList() {
  return useMutation((payload: any) => AddtoWishList(payload));
}

export function useDeleteWishList() {
  return useMutation((payload: any) => DeleteWishList(payload));
}
