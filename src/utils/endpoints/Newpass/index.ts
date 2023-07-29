import { EndPoint } from "@/types";

const NewPassEndpoint: EndPoint = {
  Password: {
    uri: "/auth/resetPassword/:token",
    method: "POST",
    version: "",
  },
};
export default NewPassEndpoint;
