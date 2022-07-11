// @flow
import React from 'react';

// components
import PageTitle from '../../components/PageTitle';

const Starter = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/starter' },
                    { label: 'Starter', path: '/pages/starter', active: true },
                ]}
                title={'Starter'}
            />
        </>
    );
};

export default Starter;
