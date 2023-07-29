import { useQuery } from "@tanstack/react-query";


import { GetCart  } from './../../services/cart/index';

export const UseGetCart = () =>
  useQuery(["GetCart"], () => GetCart(), {
    refetchOnWindowFocus: false,
  });