import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/italy.js';
import useVectorMap from './useVectorMap';

type ItalyVectorMapProps = {
    width?: string;
    height?: string;
    options?: Record<string, unknown>;
};

const ItalyVectorMap = ({ width, height, options }: ItalyVectorMapProps) => {
    const { selectorId } = useVectorMap(options, 'italy');

    return <div id={selectorId} style={{ width: width, height: height }}></div>;
};

export default ItalyVectorMap;
