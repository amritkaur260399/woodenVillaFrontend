import { callApi } from '@/utils/apiUtils';
import contactEndpoints from '@/utils/endpoints/Contactus';

export const addToContact = ({ body }:any) => {
  return callApi({
    uriEndPoint: {
      ...contactEndpoints.addToContact,
    },
    body,
  });
};