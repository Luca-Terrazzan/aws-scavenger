import { products } from "./config.json";

type ProductDetails = {
    url: string;
    name: string
}

export class Config {

    private config: ProductDetails[];

    constructor() {
        this.config = products;
    }

    public getProductsDetail() {
        return this.config;
    }

}
