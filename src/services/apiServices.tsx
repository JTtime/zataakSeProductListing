import axios from "axios";

const apiGatewayUrl = {
    local: 'http://localhost:3000/',
    server: 'https://dummyjson.com'
}

const configurl =
    process.env.REACT_ENV === "local"
        ? apiGatewayUrl.local
        : apiGatewayUrl.server;

export class EcommerceServices {

    private static baseURL = configurl;
   
    public static getProductsList = () => {
        let productUrl: string = `${this.baseURL}/products`;
        return axios.get(productUrl);       
    };

    public static getPaginatedProductsList = (limit: string, skip: number=10) => {
        let productUrl: string = `${this.baseURL}/products?limit=${limit}&skip=${skip}`;
        return axios.get(productUrl);       
    };

    public static getProductsListByCategory = (category: string) => {
        let productUrl: string = `${this.baseURL}/products/category/${category}`
        return axios.get(productUrl);       
    };

}  