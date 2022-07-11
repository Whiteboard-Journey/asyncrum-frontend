// @flow
import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

// actions
import { changeSidebarType } from '../redux/actions';

// constants
import * as layoutConstants from '../constants/layout';

// components
import ThemeCustomizer from '../components/ThemeCustomizer/';

// utils
import { changeBodyAttribute } from '../utils/';

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52
const Topbar = React.lazy(() => import('./Topbar'));
const LeftSidebar = React.lazy(() => import('./LeftSidebar'));
const Footer = React.lazy(() => import('./Footer'));
const RightSidebar = React.lazy(() => import('./RightSidebar'));

const loading = () => <div className="text-center"></div>;

type VerticalLayoutProps = {
    children?: any,
};

type VerticalLayoutState = {
    isMenuOpened?: boolean,
};

const DetachedLayout = ({ children }: VerticalLayoutProps, state: VerticalLayoutState): React$Element<any> => {
    const dispatch = useDispatch();
    const { layoutColor, leftSideBarTheme, leftSideBarType, showRightSidebar } = useSelector((state) => ({
        layoutColor: state.Layout.layoutColor,
        layoutWidth: state.Layout.layoutWidth,
        leftSideBarTheme: state.Layout.leftSideBarTheme,
        leftSideBarType: state.Layout.leftSideBarType,
        showRightSidebar: state.Layout.showRightSidebar,
    }));

    const [isMenuOpened, setIsMenuOpened] = useState(false);

    /*
     * layout defaults
     */
    useEffect(() => {
        changeBodyAttribute('data-layout', layoutConstants.LAYOUT_DETACHED);
        changeBodyAttribute('data-layout-mode', layoutConstants.LAYOUT_WIDTH_FLUID);
        changeBodyAttribute('data-leftbar-theme', layoutConstants.LEFT_SIDEBAR_THEME_DARK);
    }, []);

    useEffect(() => {
        changeBodyAttribute('data-layout-color', layoutColor);
    }, [layoutColor]);

    useEffect(() => {
        changeBodyAttribute('data-leftbar-compact-mode', leftSideBarType);
    }, [leftSideBarType]);

    /**
     * Open the menu when having mobile screen
     */
    const openMenu = (e) => {
        setIsMenuOpened((prevState) => {
            setIsMenuOpened(!prevState);
        });
        if (document.body) {
            if (isMenuOpened) {
                document.body.classList.add('sidebar-enable');
            } else {
                document.body.classList.remove('sidebar-enable');
            }
        }
    };

    const updateDimensions = useCallback(() => {
        // activate the condensed sidebar if smaller devices like ipad or tablet
        if (window.innerWidth >= 768 && window.innerWidth <= 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED));
        } else if (window.innerWidth > 1028) {
            dispatch(changeSidebarType(layoutConstants.LEFT_SIDEBAR_TYPE_FIXED));
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, [dispatch, updateDimensions]);

    const isCondensed = leftSideBarType === layoutConstants.LEFT_SIDEBAR_TYPE_CONDENSED;
    const isLight = leftSideBarTheme === layoutConstants.LEFT_SIDEBAR_THEME_LIGHT;

    return (
        <>
            <Suspense fallback={loading()}>
                <Topbar
                    isMenuOpened={isMenuOpened}
                    openLeftMenuCallBack={openMenu}
                    navCssClasses="topnav-navbar topnav-navbar-dark"
                    topbarDark={true}
                />
            </Suspense>
            <Container fluid>
                <div className="wrapper">
                    <Suspense fallback={loading()}>
                        <LeftSidebar
                            isMenuOpened={isMenuOpened}
                            isCondensed={isCondensed}
                            isLight={isLight}
                            hideLogo={true}
                            hideUserProfile={false}
                        />
                    </Suspense>

                    <div className="content-page">
                        <div className="content">
                            <Outlet />
                        </div>

                        <Suspense fallback={loading()}>
                            <Footer />
                        </Suspense>
                    </div>
                </div>
            </Container>
            {showRightSidebar && (
                <Suspense fallback={loading()}>
                    <RightSidebar>
                        <ThemeCustomizer />
                    </RightSidebar>
                </Suspense>
            )}
        </>
    );
};

export default DetachedLayout;
