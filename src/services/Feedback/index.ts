import { callApi } from "@/utils/apiUtils";
import FeedbackEndpoint from "@/utils/endpoints/Feedback/index";

export const addFeedback =async ({ body }:any) =>
  callApi({
    uriEndPoint: {
      ...FeedbackEndpoint.addFeedback,
    },body,
  }).catch((err)=>{
    throw err
  })