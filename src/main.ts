import { Product } from './product';
import { Config } from './config/config';

async function main() {

    // Get products and their details
    const configuration = new Config();
    const products = configuration.getProductsDetail();

    // Start to poll for products prices
    while (true) {
        const productsPricesPromises: Promise<number>[] = [];
        for (const product of products) {
            productsPricesPromises.push((new Product(product.url, product.name)).getPrice());
        }

        Promise.all(
            productsPricesPromises
        );
    }

}

main()
