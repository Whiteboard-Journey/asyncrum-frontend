import { useState } from 'react';
import { CartItem, CartSummaryItem } from '../types';
import productImg1 from 'assets/images/products/product-5.jpg';
import productImg2 from 'assets/images/products/product-1.jpg';
import productImg3 from 'assets/images/products/product-3.jpg';
import productImg4 from 'assets/images/products/product-2.jpg';

export default function useCart() {
    const [items, setItems] = useState<CartItem[]>([
        {
            id: 1,
            image: productImg2,
            name: 'Amazing Modern Chair',
            size: 'Large',
            color: 'Light Green',
            price: 148.66,
            qty: 5,
            total: 743.3,
        },
        {
            id: 2,
            image: productImg4,
            name: 'Biblio Plastic Armchair',
            size: 'Small',
            color: 'Brown',
            price: 99,
            qty: 2,
            total: 198.0,
        },
        {
            id: 3,
            image: productImg3,
            name: 'Designer Awesome Chair',
            size: 'Medium',
            color: 'Green',
            price: 49.99,
            qty: 3,
            total: 499.9,
        },
        {
            id: 4,
            image: productImg1,
            name: 'Unpowered aircraft',
            size: 'Large',
            color: 'Orange',
            price: 129.99,
            qty: 1,
            total: 129.99,
        },
    ]);

    const [summary, setSummary] = useState<CartSummaryItem>({
        gross_total: 1571.19,
        discount: 157.11,
        shipping_charge: 25,
        tax: 19.22,
        net_total: 1458.3,
    });

    /**
     * On quantity changed
     */
    const onQtyChange = (e: React.ChangeEvent<HTMLInputElement>, item: CartItem) => {
        var localItems = [...items];
        var idx = localItems.findIndex((i) => i.id === item.id);
        var newQty = Number(e.target.value);
        var newTotal = localItems[idx].price * newQty;
        localItems[idx] = { ...item, qty: newQty, total: newTotal };
        _adjustCart(localItems);
    };

    /**
     * Removes item from cart
     */
    const removeItem = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: CartItem) => {
        e.preventDefault();
        var localItems = items.filter((i) => i.id !== item.id);
        _adjustCart(localItems);
    };

    /**
     * Adjust the cart
     */
    const _adjustCart = (localItems: CartItem[]) => {
        // calculate gross and other total
        var newGrossTotal = 0;
        for (const item of localItems) {
            newGrossTotal += item.total;
        }
        var newNetTotel = newGrossTotal - summary.discount + summary.shipping_charge + summary.tax;
        setItems(localItems);
        setSummary({
            ...summary,
            gross_total: newGrossTotal,
            net_total: newNetTotel,
        });
    };

    return {
        items,
        summary,
        onQtyChange,
        removeItem,
    };
}
