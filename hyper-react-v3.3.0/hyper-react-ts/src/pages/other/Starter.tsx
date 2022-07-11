import { PageTitle } from 'components';

const Starter = () => {
    return (
        <PageTitle
            breadCrumbItems={[
                { label: 'Pages', path: '/pages/starter' },
                { label: 'Starter', path: '/pages/starter', active: true },
            ]}
            title={'Starter'}
        />
    );
};

export default Starter;
