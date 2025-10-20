import { Product } from './product';

export class DiscountProduct {
    public id: number;
    public title: string;
    public originalPrice: number;
    public discountedPrice: number;
    public shortDescription: string;

    public constructor(product: Product) {
        this.id = product.id;
        this.title = product.title;
        this.originalPrice = product.price;
        this.discountedPrice = this.calculateDiscount(product.price, 10);
        this.shortDescription = this.discDescription(product.description);
    }

    private calculateDiscount(price: number, percent: number): number {
        return +(price * (1 - percent / 100)).toFixed(2);
    }

    private discDescription(description: string): string {
        return description + ' Discount due to Halloween';
    }
}
