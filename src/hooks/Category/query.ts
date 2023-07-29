import { useQuery } from "@tanstack/react-query";


import { GetCategory, GetSingleCategory } from './../../services/Category/index';

export const UseCat = () =>
  useQuery(["GetCategory"], () => GetCategory(), {
    refetchOnWindowFocus: false,
  });


  export const UseSingleCategory = (payload:any) =>
  useQuery(["GetSingleCategory",payload], () => GetSingleCategory(), {
    // refetchOnWindowFocus: false,
  });