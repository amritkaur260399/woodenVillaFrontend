import { useMutation } from '@tanstack/react-query';

import { AddtoCart,DeleteCart } from '@/services/cart';



// export const useAddContact = () => {
//   return useMutation((payload: any) => addToContact(payload));
// };

export function useAddtoCart() {
    return useMutation((payload: any) => AddtoCart(payload));
  }

  export function useDeleteCart() {
    return useMutation((payload: any) => DeleteCart(payload));
  }