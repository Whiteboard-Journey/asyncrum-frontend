// @flow
import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/spain.js';

//components
import BaseVectorMap from './BaseVectorMap';

type SpainVectorMapProps = {
    width?: string,
    height?: string,
    options?: any,
};

const SpainVectorMap = ({ width, height, options }: SpainVectorMapProps): React$Element<React$FragmentType> => {
    return (
        <>
            <BaseVectorMap width={width} height={height} options={options} type="spain" />
        </>
    );
};

export default SpainVectorMap;
