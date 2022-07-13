import { useState } from 'react';

export default function usePortlet(): [boolean, () => void] {
    const [loading, setLoading] = useState<boolean>(false);

    /**
     * Reload the content
     */
    const reloadContent = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 500 + 300 * (Math.random() * 5));
    };

    return [loading, reloadContent];
}
