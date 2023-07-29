import { callApi } from "@/utils/apiUtils";
import EmailEndpoint from "@/utils/endpoints/Forgotmail";
import FotpEndpoint from "@/utils/endpoints/Fotp";

import NewPassEndpoint from "@/utils/endpoints/Newpass";

export const Email = ({ body }: any) => {
  return callApi({
    uriEndPoint: {
      ...EmailEndpoint.Email,
    },
    body,
  });
};

export const Otpp = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: {
      ...FotpEndpoint.Otpp,
    },
    pathParams,
  });
};

export const Password = ({ pathParams }: any) => {
  return callApi({
    uriEndPoint: {
      ...NewPassEndpoint.Password,
    },
    pathParams,
  });
};
