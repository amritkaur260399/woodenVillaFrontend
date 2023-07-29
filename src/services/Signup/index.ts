import { callApi } from "@/utils/apiUtils";
import SignupEndpoints from "@/utils/endpoints/Signup";

export const signup =({body}:any)=>{
    return callApi({
        uriEndPoint:{
            ...SignupEndpoints.signup,
        },
        body,
    })
}