import { Product } from './product';
import { DiscountProduct } from './discount-product';

async function fetchFromUrl(url: string): Promise<Product[]> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
    }
    const jsonData: Product[] = await response.json();
    return jsonData;
}

async function fetchData(url: string): Promise<Product[] | undefined> {
    try {
        const data = await fetchFromUrl(url);
        return data;
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

(async () => {
    const products = await fetchData('https://fakestoreapi.com/products');
    if (!products) return;
    const discounted = new DiscountProduct(products[0]);
    console.log('Received and processed data:', products);
    console.log(products?.find(p => p.id === 7)?.price);
    console.log(discounted);
})();

