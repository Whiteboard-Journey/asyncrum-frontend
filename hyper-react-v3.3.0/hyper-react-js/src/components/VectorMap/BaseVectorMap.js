// @flow
import React, { useEffect, useState } from 'react';

type BaseVectorMapProps = {
    width?: string,
    height?: string,
    options?: any,
    type: string,
};

const BaseVectorMap = ({ width, height, options, type }: BaseVectorMapProps): React$Element<React$FragmentType> => {
    const selectorId = type + new Date().getTime();
    const [map, setMap] = useState();

    useEffect(() => {
        if (!map) {
            // create jsvectormap
            const map = new window['jsVectorMap']({
                selector: '#' + selectorId,
                map: type,
                ...options,
            });

            setMap(map);
        }
    }, [selectorId, map, options, type]);
    return (
        <>
            <div id={selectorId} style={{ width: width, height: height }}></div>
        </>
    );
};

export default BaseVectorMap;
