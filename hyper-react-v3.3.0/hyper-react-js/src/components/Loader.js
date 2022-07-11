// @flow
import React from 'react';

/**
 * Renders the preloader
 */
const Loader = (): React$Element<any> => {
    return (
        <div className="preloader" id="preloader">
            <div className="status" id="status">
                <div className="bouncing-loader">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
