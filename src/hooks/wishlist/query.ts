import { useQuery } from "@tanstack/react-query";

import { GetWishList } from "./../../services/wishlist/index";

export const UseGetWishList = () =>
  useQuery(["GetWishList"], () => GetWishList(), {
    refetchOnWindowFocus: false,
  });
