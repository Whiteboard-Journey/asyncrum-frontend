import { useEffect } from 'react';

export default function useMaintenance() {
    useEffect(() => {
        if (document.body) document.body.classList.remove('authentication-bg');
    }, []);
}
