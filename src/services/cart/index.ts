import { callApi } from "@/utils/apiUtils";

import CartEndpoint from "./../../utils/endpoints/cart";

export const GetCart = () => {
  return callApi({
    uriEndPoint: {
      ...CartEndpoint.GetCart,
    },
  });
};

export const AddtoCart = ({ body }: any) => {
  return callApi({
    uriEndPoint: {
      ...CartEndpoint.AddtoCart,
    },
    body,
  });
};

export const DeleteCart = ({ pathParams }: any) => {
  // console.log(pathParams,"list")
  return callApi({
    uriEndPoint: {
      ...CartEndpoint.DeleteCart,
    },
    pathParams,
  });
};
