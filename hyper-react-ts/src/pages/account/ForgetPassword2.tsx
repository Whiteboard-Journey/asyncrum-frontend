import { Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout2 from './AccountLayout2';
import { useForgetPassword } from './hooks';

type UserData = {
    username: string;
};
const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t('Back to')}{' '}
                <Link to={'/account/login2'} className="text-muted ms-1">
                    <b>{t('Log In')}</b>
                </Link>
            </p>
        </footer>
    );
};

const ForgetPassword2 = () => {
    const { t } = useTranslation();
    const { loading, passwordReset, resetPasswordSuccess, error, schemaResolver, onSubmit } = useForgetPassword();

    return (
        <AccountLayout2 bottomLinks={<BottomLink />}>
            <h4 className="mt-0">{t('Reset Password')}</h4>
            <p className="text-muted mb-4">
                {t("Enter your email address and we'll send you an email with instructions to reset your password")}
            </p>

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

                    <div className="mb-0 text-center d-grid">
                        <Button variant="primary" type="submit" disabled={loading}>
                            <i className="mdi mdi-lock-reset"></i> {t('Reset Password')}
                        </Button>
                    </div>
                </VerticalForm>
            )}
        </AccountLayout2>
    );
};

export default ForgetPassword2;
