import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useForgetPassword } from './hooks';

export type UserData = {
    username: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    {t('Back to')}{' '}
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('Log In')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const ForgetPassword = () => {
    const { t } = useTranslation();
    const { loading, passwordReset, resetPasswordSuccess, error, schemaResolver, onSubmit } = useForgetPassword();

    return (
        <AccountLayout bottomLinks={<BottomLink />}>
            <div className="text-center m-auto">
                <h4 className="text-dark-50 text-center mt-0 font-weight-bold">{t('Reset Password')}</h4>
                <p className="text-muted mb-4">
                    {t("Enter your email address and we'll send you an email with instructions to reset your password")}
                </p>
            </div>

            {resetPasswordSuccess && <Alert variant="success">{resetPasswordSuccess.message}</Alert>}

            {error && !resetPasswordSuccess && (
                <Alert variant="danger" className="my-2">
                    {error}
                </Alert>
            )}

            {!passwordReset && (
                <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
                    <FormInput
                        label={t('Username')}
                        type="text"
                        name="username"
                        placeholder={t('Enter your Username')}
                        containerClass={'mb-3'}
                    />

                    <div className="mb-3 mb-0 text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            {t('Submit')}
                        </Button>
                    </div>
                </VerticalForm>
            )}
        </AccountLayout>
    );
};

export default ForgetPassword;
