// @flow
import React from 'react';

// component
import PageTitle from '../../../../components/PageTitle';

import ClientDetails from './ClientDetails';

// dummy data
import { clientsData } from './data';

const Clients = (): React$Element<any> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'CRM', path: '/apps/crm/clients' },
                    { label: 'Clients List', path: '/apps/crm/clients', active: true },
                ]}
                title={'Clients List'}
            />

            <ClientDetails clientsData={clientsData} />
        </>
    );
};

export default Clients;
