import { Product, ProductPrice } from './product';
import { Config } from './config/config';
import { TelegramService } from './telegram/telegram.service';

async function main() {

    // Get products and their details
    const configuration = new Config();
    const telegram = new TelegramService();
    const products = configuration.getProductsDetail();

    setInterval(() => {
        // Start to poll for products prices
        const productsPricesPromises: Promise<ProductPrice>[] = [];
        for (const product of products) {
            productsPricesPromises.push((new Product(product.url, product.name)).getPrice());
        }

        Promise.all(
            productsPricesPromises
        ).then((result) => {
            console.log('results', result);
            telegram.pushProductPricesToTelegram(result);

        }).catch((error) => {
            console.log('errors', error);
        });
    }, 30000);

}

main()
