import { Button, Alert, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { VerticalForm, FormInput } from 'components';
import AccountLayout from './AccountLayout';
import { useLogin } from './hooks';
import OAuthButton from './OAuthButton';

export type UserData = {
  username: string;
  password: string;
};

const BottomLink = () => {
  const { t } = useTranslation();

  return (
    <Row className="mt-3">
      <Col className="text-center">
        <p className="text-muted">
          {t("Don't have an account?")}{' '}
          <Link to={'/account/register'} className="text-muted ms-1">
            <b>{t('Sign Up')}</b>
          </Link>
        </p>
      </Col>
    </Row>
  );
};

const Login = () => {
  const { t } = useTranslation();

  const { loading, userLoggedIn, user, error, schemaResolver, onSubmit, redirectUrl } = useLogin();

  return (
    <>
      {(userLoggedIn || user) && <Navigate to={redirectUrl} replace />}

      <AccountLayout bottomLinks={<BottomLink />}>
        <div className="text-center w-75 m-auto">
          <h4 className="text-dark-50 text-center mt-0 mb-4 fw-bold">{t('Log In')}</h4>
        </div>

        {error && (
          <Alert variant="danger" className="my-2">
            {error}
          </Alert>
        )}

        <VerticalForm<UserData> onSubmit={onSubmit} resolver={schemaResolver}>
          <FormInput
            label={t('Username')}
            type="text"
            name="username"
            placeholder={t('Enter your Username')}
            containerClass={'mb-3'}
          />
          <FormInput
            label={t('Password')}
            type="password"
            name="password"
            placeholder={t('Enter your password')}
            containerClass={'mb-3'}>
            <Link to="/account/forget-password" className="text-muted float-end">
              <small>{t('Forgot your password?')}</small>
            </Link>
          </FormInput>
          <div className="mb-3 mb-0 text-center">
            <Button variant="primary" href="/dashboard" disabled={loading}>
              {t('Log In')}
            </Button>
          </div>

          <div className="pt-3 mb-3 mb-0 text-center border-top">
            <OAuthButton type="naver" loading={loading} />
            <OAuthButton type="google" loading={loading} />
          </div>
        </VerticalForm>
      </AccountLayout>
    </>
  );
};

export default Login;
