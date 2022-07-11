import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/spain.js';
import useVectorMap from './useVectorMap';

type SpainVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const SpainVectorMap = ({ width, height, options }: SpainVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'spain');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default SpainVectorMap;
