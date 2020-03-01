import { Product } from './product';

const sampleProducts: string[] = [
    'https://www.amazon.it/gp/product/B07Y8YWTFL',
    'https://www.amazon.it/Xiaomi-Smartphone-2280x1080-Snapdragon-Fotocamera/dp/B008I0YEWE'
];

async function main() {
    const product = new Product(sampleProducts[1], 'note 8 pro');
    const price: number = await product.getPrice();
    console.log(price);

}

main()
