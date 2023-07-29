import { useMutation } from '@tanstack/react-query';

import { addToContact } from '@/services/contact/index';



// export const useAddContact = () => {
//   return useMutation((payload: any) => addToContact(payload));
// };

export function useAddContact() {
    return useMutation((payload: any) => addToContact(payload));
  }