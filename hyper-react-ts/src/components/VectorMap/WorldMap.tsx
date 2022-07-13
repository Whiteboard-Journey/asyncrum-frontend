import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';
import useVectorMap from './useVectorMap';

type WorldVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const WorldVectorMap = ({ width, height, options }: WorldVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'world');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default WorldVectorMap;
