// @flow
import React, { Suspense, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// constants
import * as layoutConstants from '../../constants/layout';

// utils
import { changeBodyAttribute } from '../../utils';

// components
import ThemeCustomizer from '../../components/ThemeCustomizer/';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('../Topbar'));
const Navbar = React.lazy(() => import('./Navbar'));
const Footer = React.lazy(() => import('../Footer'));
const RightSidebar = React.lazy(() => import('../RightSidebar'));

const loading = () => <div className="text-center"></div>;

type HorizontalLayoutProps = {
    children?: any,
};

type HorizontalLayoutState = {
    isMenuOpened: boolean,
};

const HorizontalLayout = ({ children }: HorizontalLayoutProps, state: HorizontalLayoutState): React$Element<any> => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const { layoutColor, showRightSidebar, layoutWidth } = useSelector((state) => ({
        layoutColor: state.Layout.layoutColor,
        layoutWidth: state.Layout.layoutWidth,
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = () => {
        setIsMenuOpened(!isMenuOpened);
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.remove('sidebar-enable');
            } else {
                document.body.classList.add('sidebar-enable');
            }
        }
    };

    /*
     * layout defaults
     */
    useEffect(() => {
        changeBodyAttribute('data-layout', layoutConstants.LAYOUT_HORIZONTAL);
        changeBodyAttribute('data-leftbar-theme', layoutConstants.LEFT_SIDEBAR_THEME_DEFAULT);
        changeBodyAttribute('data-leftbar-compact-mode', layoutConstants.LEFT_SIDEBAR_TYPE_FIXED);
    }, []);

    useEffect(() => {
        changeBodyAttribute('data-layout-color', layoutColor);
    }, [layoutColor]);

    useEffect(() => {
        changeBodyAttribute('data-layout-mode', layoutWidth);
    }, [layoutWidth]);

    return (
        <>
            <div className="wrapper">
                <div className="content-page">
                    <div className="content">
                        <Suspense fallback={loading()}>
                            <Topbar
                                isMenuOpened={isMenuOpened}
                                openLeftMenuCallBack={openMenu}
                                navCssClasses="topnav-navbar topnav-navbar-dark"
                                topbarDark={true}
                            />
                        </Suspense>

                        <Suspense fallback={loading()}>
                            <Navbar isMenuOpened={isMenuOpened} />
                        </Suspense>

                        <Container fluid>
                            <Outlet />
                        </Container>
                    </div>

                    <Suspense fallback={loading()}>
                        <Footer />
                    </Suspense>

                    {showRightSidebar && (
                        <Suspense fallback={loading()}>
                            <RightSidebar>
                                <ThemeCustomizer />
                            </RightSidebar>
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    );
};

export default HorizontalLayout;
