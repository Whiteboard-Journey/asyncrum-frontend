import { useState } from 'react';
import productImg1 from 'assets/images/products/product-5.jpg';

export default function useProductDetails() {
    const [selectedProductImg, setSelectedProductImg] = useState<string>(productImg1);

    /**
     * Handles the image changes
     */
    const handleImgChange = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, selectedImg: string) => {
        e.preventDefault();
        setSelectedProductImg(selectedImg);
        return false;
    };

    return { selectedProductImg, handleImgChange };
}
