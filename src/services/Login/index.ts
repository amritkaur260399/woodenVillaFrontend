import { callApi } from "@/utils/apiUtils";
import LoginEndpoint from "@/utils/endpoints/Login/index";


export const  loginn =({body}:any)=>{
    return callApi({
        uriEndPoint:{
            ...LoginEndpoint.loginn,
        },
        body,
    })
}