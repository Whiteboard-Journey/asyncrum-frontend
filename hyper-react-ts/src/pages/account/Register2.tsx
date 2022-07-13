import { Navigate, Link } from 'react-router-dom';
import { Button, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout2 from './AccountLayout2';
import { useRegister } from './hooks';

type UserData = {
    fullname: string;
    email: string;
    password: string;
};

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t('Already have account?')}{' '}
                <Link to={'/account/login2'} className="text-muted ms-1">
                    <b>{t('Log In')}</b>
                </Link>
            </p>
        </footer>
    );
};

const Register2 = () => {
    const { t } = useTranslation();
    const { loading, userSignUp, error, schemaResolver, onSubmit } = useRegister();

    return (
        <>
            {userSignUp ? <Navigate to={'/account/confirm2'} /> : null}

            <AccountLayout2 bottomLinks={<BottomLink />}>
                <h4 className="mt-0">{t('Free Sign Up')}</h4>
                <p className="text-muted mb-4">
                    {t("Don't have an account? Create your account, it takes less than a minute.")}
                </p>

                {error && (
                    <Alert variant="danger" className="my-2">
                        {error}
                    </Alert>
                )}

                <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver} defaultValues={{}}>
                    <FormInput
                        label={t('Full Name')}
                        type="text"
                        name="fullname"
                        placeholder={t('Enter your name')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Email address')}
                        type="email"
                        name="email"
                        placeholder={t('Enter your email')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('Password')}
                        type="password"
                        name="password"
                        placeholder={t('Enter your password')}
                        containerClass={'mb-3'}
                    />
                    <FormInput
                        label={t('I accept Terms and Conditions')}
                        type="checkbox"
                        name="checkboxsignup"
                        containerClass={'mb-3 text-muted'}
                    />

                    <div className="mb-0 d-grid text-center">
                        <Button variant="primary" type="submit" disabled={loading}>
                            <i className="mdi mdi-account-circle"></i> {t('Sign Up')}
                        </Button>
                    </div>

                    {/* social links */}
                    <div className="text-center mt-4">
                        <p className="text-muted font-16">{t('Sign up using')}</p>
                        <ul className="social-list list-inline mt-3">
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-primary text-primary">
                                    <i className="mdi mdi-facebook"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-danger text-danger">
                                    <i className="mdi mdi-google"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-info text-info">
                                    <i className="mdi mdi-twitter"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#" className="social-list-item border-secondary text-secondary">
                                    <i className="mdi mdi-github"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </VerticalForm>
            </AccountLayout2>
        </>
    );
};

export default Register2;
