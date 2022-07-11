import { CartItem } from '../types';

export type Cart = {
    items: Array<CartItem>;
    sub_total: number;
    shipping: number;
    total: number;
};
