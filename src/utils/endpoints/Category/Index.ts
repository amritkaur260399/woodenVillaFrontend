import { EndPoint } from "@/types";

const CatagoryEndpoint: EndPoint = {
    GetCategory: {
    uri: "/category",
    method: "GET",
    version: "",
  },
  GetSingleCategory: {
    uri: "/category/:id",
    method: "GET",
    version: "",
  },
  
};
export default CatagoryEndpoint;