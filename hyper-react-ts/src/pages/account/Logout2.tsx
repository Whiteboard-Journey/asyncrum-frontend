import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AccountLayout2 from './AccountLayout2';
import logoutIcon from 'assets/images/logout-icon.svg';
import { useLogout } from './hooks';

const BottomLink = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer footer-alt">
            <p className="text-muted">
                {t('Back to ')}{' '}
                <Link to={'/account/login'} className="text-muted ms-1">
                    <b>{t('Log In')}</b>
                </Link>
            </p>
        </footer>
    );
};

const Logout2 = () => {
    const { t } = useTranslation();
    useLogout();

    return (
        <AccountLayout2 bottomLinks={<BottomLink />}>
            <div className="text-center">
                <h4 className="mt-0">{t('See You Again !')}</h4>
                <p className="text-muted mb-4">{t('You are now successfully sign out.')}</p>
            </div>

            <div className="logout-icon m-auto">
                <img src={logoutIcon} alt="" />
            </div>
        </AccountLayout2>
    );
};

export default Logout2;
