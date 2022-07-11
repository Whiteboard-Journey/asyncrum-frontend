import { useEffect, useState } from 'react';

export default function useVectorMap(options: Record<string, unknown> = {}, type: string) {
    const selectorId = type + new Date().getTime();
    const [map, setMap] = useState<any>();

    useEffect(() => {
        if (!map) {
            // create jsvectormap
            const map = new (window as any)['jsVectorMap']({
                selector: '#' + selectorId,
                map: type,
                ...options,
            });

            setMap(map);
        }
    }, [selectorId, map, options, type]);

    return { selectorId };
}
