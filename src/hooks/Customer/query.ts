import { useQuery } from "@tanstack/react-query";

import { CustUser } from "@/services/Customer/index";

export const useCust = () =>
  useQuery(["CustUser"],  CustUser, {
    refetchOnWindowFocus: false,
  });
