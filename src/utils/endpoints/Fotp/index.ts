import { EndPoint } from "@/types";

const FotpEndpoint: EndPoint = {
  Otpp: {
    uri: "/auth/verifyOtp/:token",
    method: "POST",
    version: "",
  },
};
export default FotpEndpoint;
