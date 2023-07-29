import { callApi } from "@/utils/apiUtils";
import OtpEndpoint from "@/utils/endpoints/Otp";


export const  verifyOtp =({pathParams}:any)=>{
    return callApi({
        uriEndPoint:{
            ...OtpEndpoint.verifyOtp,
        },
        pathParams,
    })
}
export const  resendOtp =({body}:any)=>{
    return callApi({
        uriEndPoint:{
            ...OtpEndpoint.resendOtp,
        },
        body,
    })
}