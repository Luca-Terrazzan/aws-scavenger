import Axios from 'axios';
import parse from 'node-html-parser';
import parsecurrency from 'parsecurrency';
export class Product {

    constructor(private readonly url: string, private readonly name: string) {
    }

    public async getPrice(): Promise<number> {
        const productPage = await Axios.get(this.url);
        const parsedPage = parse(productPage.data) as unknown as (HTMLElement & { valid: boolean; });
        const rawPriceString = parsedPage.querySelector('#priceblock_ourprice');

        if (!rawPriceString) {
            throw Error(`Cannot fetch price for ${this.name}`);
        }

        const price = parsecurrency(rawPriceString.innerHTML).value;

        return price;
    }

}
