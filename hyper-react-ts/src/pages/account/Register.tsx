import { Navigate, Link } from 'react-router-dom';
import { Button, Alert, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useRegister } from './hooks';
import naverIcon from 'assets/images/btnW_icon_circle.png'
import googleIcon from 'assets/images/google.png'

export type UserData = {
    fullname: string;
    email: string;
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <Row className="mt-3">
            <Col className="text-center">
                <p className="text-muted">
                    {t('Already have account?')}{' '}
                    <Link to={'/account/login'} className="text-muted ms-1">
                        <b>{t('Log In')}</b>
                    </Link>
                </p>
            </Col>
        </Row>
    );
};

const Register = () => {
    const { t } = useTranslation();
    const { loading, userSignUp, error, schemaResolver, onSubmit } = useRegister();

    return (
        <>
            {userSignUp ? <Navigate to={'/account/confirm'}></Navigate> : null}

            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold">{t('Free Sign Up')}</h4>
                    <p className="text-muted mb-4">
                        {t("Don't have an account? Create your account, it takes less than a minute.")}
                    </p>
                </div>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver} defaultValues={{}}>
                    <div className="mb-3 mb-0 text-center">
                        <Button className="signin-button" variant="primary" type="submit" disabled={loading}>
                            <img className="signin-icon" src={naverIcon} alt="Naver Icon" /> Sign up with Naver
                        </Button>
                        <Button className="signin-button" variant="primary" type="submit" disabled={loading}>
                            <img className="signin-icon" src={googleIcon} alt="Google Icon" /> Sign up with Google
                        </Button>
                    </div>
                </VerticalForm>
            </AccountLayout>
        </>
    );
};

export default Register;
