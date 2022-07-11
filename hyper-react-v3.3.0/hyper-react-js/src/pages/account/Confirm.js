// @flow
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

// components
import AccountLayout from './AccountLayout';

// images
import mailSent from '../../assets/images/mail_sent.svg';

const Confirm = (): React$Element<any> => {
    const { t } = useTranslation();

    return (
        <>
            <AccountLayout>
                <div className="text-center m-auto">
                    <img src={mailSent} alt="mail sent" height="64" />
                    <h4 className="text-dark-50 text-center mt-4 fw-bold">{t('Please check your email')}</h4>
                    <p className="text-muted mb-4">
                        {t(
                            'A email has been send to <b>youremail@domain.com</b>. Please check for an email from company and click on the included link to reset your password.'
                        )}
                    </p>
                    <p className="text-center">
                        <Link className="btn btn-primary" to="/account/login">
                            {t('Back to Login')}
                        </Link>
                    </p>
                </div>
            </AccountLayout>
        </>
    );
};

export default Confirm;
