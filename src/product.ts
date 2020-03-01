import Axios from 'axios';
import parse from 'node-html-parser';
import parsecurrency from 'parsecurrency';
export class Product {

    constructor(private readonly url: string, private readonly name: string) {
    }

    public async getPrice(): Promise<number> {
        const productPage = await Axios.get(this.url);
        const parsedPage = parse(productPage.data) as unknown as (HTMLElement & { valid: boolean; });
        const amazonPriceHTML = parsedPage.querySelector('#priceblock_ourprice');
        const salesPriceHTML = parsedPage.querySelector('#priceblock_saleprice');

        if (!amazonPriceHTML && !salesPriceHTML) {
            // Cannot throw here, or fail-fast promise.all will have problems later
            // Just return a 'error' value
            return -1;
        }

        const prices: number[] = [];

        amazonPriceHTML && prices.push(parsecurrency(amazonPriceHTML.innerHTML).value);
        salesPriceHTML && prices.push(parsecurrency(salesPriceHTML.innerHTML).value);

        return Math.min(...prices);
    }

}
