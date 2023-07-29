import { callApi } from "@/utils/apiUtils";

import ProductEndpoint from "./../../utils/endpoints/Product/index";

export const GetAllProducts = ({ query }: any) => {
  return callApi({
    uriEndPoint: {
      ...ProductEndpoint.GetAllProducts,
    },
    query,
  });
};

export const GetSingleProduct = ({ query }: any) => {
  return callApi({
    uriEndPoint: {
      ...ProductEndpoint.GetSingleProduct,
    },
    query,
  });
};
export const GetProductDescription = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: {
      ...ProductEndpoint.GetProductDescription,
    },
    pathParams,
  });
};
