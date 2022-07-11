// @flow
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//actions
import { logoutUser } from '../../redux/actions';

// components
import AccountLayout from './AccountLayout';

// images
import logoutIcon from '../../assets/images/logout-icon.svg';

/* bottom link */
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

const Logout2 = (): React$Element<any> | React$Element<React$FragmentType> => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    return (
        <>
            <AccountLayout bottomLinks={<BottomLink />}>
                <div className="text-center">
                    <h4 className="mt-0">{t('See You Again !')}</h4>
                    <p className="text-muted mb-4">{t('You are now successfully sign out.')}</p>
                </div>

                <div className="logout-icon m-auto">
                    <img src={logoutIcon} alt="" />
                </div>
            </AccountLayout>
        </>
    );
};

export default Logout2;
