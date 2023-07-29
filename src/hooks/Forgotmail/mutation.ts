import { useMutation } from "@tanstack/react-query";

import { Email, Otpp, Password } from "@/services/Forgotmail";

// export const useAddContact = () => {
//   return useMutation((payload: any) => addToContact(payload));
// };

export function useMail() {
  return useMutation((payload: any) => Email(payload));
}

export function useOtpp() {
  return useMutation((payload: any) => Otpp(payload));
}

export function usePass() {
  return useMutation((payload: any) => Password(payload));
}
