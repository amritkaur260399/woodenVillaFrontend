import { EndPoint } from "@/types";

const CartEndpoint: EndPoint = {
  AddtoCart: {
    uri: "/cart",
    method: "POST",
    version: "",
  },
  GetCart: {
    uri: "/cart",
    method: "GET",
    version: "",
  },
  DeleteCart: {
    uri: "/cart/:id",
   method: "DELETE",
    version: "",
  },
};
export default CartEndpoint;