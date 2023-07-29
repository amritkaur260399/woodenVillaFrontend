import { callApi } from "@/utils/apiUtils";
import CustEndpoint from "@/utils/endpoints/Customer/index";

export const CustUser =async () =>
  callApi({
    uriEndPoint: {
      ...CustEndpoint.CustUser,
    },
  }).catch((err)=>{
    throw err
  })
