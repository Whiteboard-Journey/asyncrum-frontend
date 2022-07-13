import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col } from 'react-bootstrap';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import avatar1 from 'assets/images/users/avatar-1.jpg';
import { useLockScreen } from './hooks';

export type UserData = {
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    {t('Not you? return')}{' '}
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('Sign In')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const LockScreen = () => {
    const { t } = useTranslation();
    const { schemaResolver, onSubmit } = useLockScreen();

    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <div className="text-center w-75 m-auto">
                <img src={avatar1} height="64" alt="" className="rounded-circle shadow" />
                <h4 className="text-dark-50 text-center mt-3 fw-bold">{t('Hi ! Michael ')}</h4>
                <p className="text-muted mb-4">{t('Enter your password to access the admin.')}</p>
            </div>

            <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
                <FormInput
                    label={t('Password')}
                    type="password"
                    name="password"
                    placeholder={t('Enter your password')}
                    containerClass={'mb-3'}
                />

                <div className="mb-0 text-center">
                    <Button variant="primary" type="submit">
                        {t('Log In')}
                    </Button>
                </div>
            </VerticalForm>
        </AccountLayout>
    );
};

export default LockScreen;
