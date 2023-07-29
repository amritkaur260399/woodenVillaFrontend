import { EndPoint } from "@/types";
const OtpEndpoint: EndPoint = {
  verifyOtp: {
    uri: "/auth/verifyOtp/:token",
    method: "POST",
    version: "",
  },
  resendOtp: {
    uri: "/auth/sendOtp",
    method: "POST",
    version: "",
  },
};
export default OtpEndpoint;
