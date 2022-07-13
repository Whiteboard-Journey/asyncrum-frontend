import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LogoLight from 'assets/images/logo.png';
import LogoDark from 'assets/images/logo-dark.png';
import { useAccountLayout } from './hooks';

type AccountLayoutProps = {
    bottomLinks?: React.ReactNode;
    children?: React.ReactNode;
};

const AccountLayout2 = ({ bottomLinks, children }: AccountLayoutProps) => {
    useAccountLayout();
    const { t } = useTranslation();

    return (
        <div className="auth-fluid">
            {/* Auth fluid left content */}
            <div className="auth-fluid-form-box">
                <div className="align-items-center d-flex h-100">
                    <Card.Body>
                        {/* logo */}
                        <div className="auth-brand text-center text-lg-start">
                            <Link to="/" className="logo-dark">
                                <span>
                                    <img src={LogoDark} alt="" height="18" />
                                </span>
                            </Link>
                            <Link to="/" className="logo-light">
                                <span>
                                    <img src={LogoLight} alt="" height="18" />
                                </span>
                            </Link>
                        </div>

                        {children}

                        {/* footer links */}
                        {bottomLinks}
                    </Card.Body>
                </div>
            </div>

            {/* Auth fluid right content */}
            <div className="auth-fluid-right text-center">
                <div className="auth-user-testimonial">
                    <h2 className="mb-3">{t('I love the color!')}</h2>
                    <p className="lead">
                        <i className="mdi mdi-format-quote-open"></i>{' '}
                        {t("It's a elegent templete. I love it very much! .")}{' '}
                        <i className="mdi mdi-format-quote-close"></i>
                    </p>
                    <p>{t('- Hyper Admin User')}</p>
                </div>
            </div>
        </div>
    );
};

export default AccountLayout2;
