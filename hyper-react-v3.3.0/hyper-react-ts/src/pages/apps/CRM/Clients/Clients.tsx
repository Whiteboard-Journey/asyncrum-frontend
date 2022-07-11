import { Col, Row } from 'react-bootstrap';
import { PageTitle } from 'components';
import ClientDetails from './ClientDetails';
import { clients } from './data';

const Clients = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'CRM', path: '/apps/crm/clients' },
                    { label: 'Clients List', path: '/apps/crm/clients', active: true },
                ]}
                title={'Clients List'}
            />

            <Row>
                <ClientDetails clientsData={clients} />
            </Row>
            <Row>
                <Col xs={12} className="text-center">
                    <i className="mdi mdi-dots-circle mdi-spin font-24 text-muted"></i>
                </Col>
            </Row>
        </>
    );
};

export { Clients };
