import { EndPoint } from "@/types";
const ProductEndpoint:EndPoint={
    GetAllProducts:{
        uri: '/product',
        method: 'GET',
        version: '',
    },
    GetSingleProduct:{
        uri: '/product',
        method: 'GET',
        version: '',
    },
    GetProductDescription:{
        uri: '/product/:id',
        method: 'GET',
        version: '',
    }
}
export default ProductEndpoint;