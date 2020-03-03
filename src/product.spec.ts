import { Product, ProductPrice } from './product';

describe('Product analyzer', () => {

    const sampleProducts: string[] = [
        'https://www.amazon.it/gp/product/B07Y8YWTFL',
        'https://www.amazon.it/Xiaomi-Smartphone-2280x1080-Snapdragon-Fotocamera/dp/B008I0YEWE'
    ];

    it('Should be able to get a product price', async () => {
        const product = new Product(sampleProducts[0], 'note 8 pro');
        const price: ProductPrice = await product.getPrice();

        expect(price.price).toBeGreaterThan(1);
    });

});