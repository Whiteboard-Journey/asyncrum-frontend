// @flow
import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/iraq.js';

//components
import BaseVectorMap from './BaseVectorMap';

type IraqVectorMapProps = {
    width?: string,
    height?: string,
    options?: any,
};

const IraqVectorMap = ({ width, height, options }: IraqVectorMapProps): React$Element<React$FragmentType> => {
    return (
        <>
            <BaseVectorMap width={width} height={height} options={options} type="iraq" />
        </>
    );
};

export default IraqVectorMap;
