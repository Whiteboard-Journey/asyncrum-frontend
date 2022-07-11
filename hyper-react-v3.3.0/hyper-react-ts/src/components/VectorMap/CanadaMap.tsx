import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/canada.js';
import useVectorMap from './useVectorMap';

type CanadaVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const CanadaVectorMap = ({ width, height, options }: CanadaVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'canada');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default CanadaVectorMap;
