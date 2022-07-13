import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/us-merc-en.js';
import useVectorMap from './useVectorMap';

type UsaVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const UsaVectorMap = ({ width, height, options }: UsaVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'us_merc_en');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default UsaVectorMap;
