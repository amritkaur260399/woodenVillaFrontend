import { callApi } from "@/utils/apiUtils";

import WishListEndpoint from "./../../utils/endpoints/wishlist";

export const GetWishList = () => {
  return callApi({
    uriEndPoint: {
      ...WishListEndpoint.GetWishList,
    },
  });
};

export const AddtoWishList = ({ body }: any) => {
  return callApi({
    uriEndPoint: {
      ...WishListEndpoint.AddtoWishList,
    },
    body,
  });
};

export const DeleteWishList = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: {
      ...WishListEndpoint.DeleteWishList,
    },
    pathParams,
  });
};
