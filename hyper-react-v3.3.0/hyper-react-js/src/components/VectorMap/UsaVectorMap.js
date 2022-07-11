// @flow
import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/us-merc-en.js';

//components
import BaseVectorMap from './BaseVectorMap';

type UsaVectorMapProps = {
    width?: string,
    height?: string,
    options?: any,
};

const UsaVectorMap = ({ width, height, options }: UsaVectorMapProps): React$Element<React$FragmentType> => {
    return (
        <>
            <BaseVectorMap width={width} height={height} options={options} type="us_merc_en" />
        </>
    );
};

export default UsaVectorMap;
