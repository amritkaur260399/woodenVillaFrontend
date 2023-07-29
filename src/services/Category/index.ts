import { callApi } from '@/utils/apiUtils';

import CategoryEndpoint from './../../utils/endpoints/Category/Index';

export const GetCategory = () => {
  return callApi({
    uriEndPoint: {
      ...CategoryEndpoint.GetCategory,
    },
    
  });
};

export const GetSingleCategory = () => {
  return callApi({
    uriEndPoint: {
      ...CategoryEndpoint.GetSingleCategory,
    },
    
  });
};