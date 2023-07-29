import { EndPoint } from "@/types";

const WishListEndpoint: EndPoint = {
  AddtoWishList: {
    uri: "/wishlist",
    method: "POST",
    version: "",
  },
  GetWishList: {
    uri: "/wishlist",
    method: "GET",
    version: "",
  },
  DeleteWishList: {
    uri: "/wishlist/:id",
    method: "DELETE",
    version: "",
  },
};
export default WishListEndpoint;
