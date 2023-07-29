 import { useMutation } from "@tanstack/react-query";

import { addFeedback } from "@/services/Feedback";

// export const useAddContact = () => {
//   return useMutation((payload: any) => addToContact(payload));
// };

export function useFeedback() {
  return useMutation((payload: any) => addFeedback(payload));
}

