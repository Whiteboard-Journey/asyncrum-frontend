import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { showRightSidebar, changeSidebarType } from 'redux/actions';
import * as layoutConstants from 'appConstants';
import { useRedux, useToggle, useViewport } from 'hooks';
import { notifications, profileMenus, searchOptions } from './data';
import LanguageDropdown from './LanguageDropdown';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import SearchDropdown from './SearchDropdown';
import TopbarSearch from './TopbarSearch';
import AppsDropdown from './AppsDropdown';
import userImage from 'assets/images/users/avatar-1.jpg';
import logoSmDark from 'assets/images/logo_sm_dark.png';
import logoSmLight from 'assets/images/logo_sm.png';
import logo from 'assets/images/logo-light.png';

type TopbarProps = {
    hideLogo?: boolean;
    navCssClasses?: string;
    openLeftMenuCallBack?: () => void;
    topbarDark?: boolean;
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps) => {
    const { dispatch, appSelector } = useRedux();
    const { width } = useViewport();
    const [isMenuOpened, toggleMenu] = useToggle();

    const containerCssClasses = !hideLogo ? 'container-fluid' : '';

    const { layoutType, leftSideBarType } = appSelector((state) => ({
        layoutType: state.Layout.layoutType,
        leftSideBarType: state.Layout.leftSideBarType,
    }));

    /**
     * Toggle the leftmenu when having mobile screen
     */
    const handleLeftMenuCallBack = () => {
        toggleMenu();
        if (openLeftMenuCallBack) openLeftMenuCallBack();

        switch (layoutType) {
            case layoutConstants.LayoutTypes.LAYOUT_VERTICAL:
                if (width >= 768) {
                    if (leftSideBarType === 'fixed' || leftSideBarType === 'scrollable')
                        dispatch(changeSidebarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_CONDENSED));
                    if (leftSideBarType === 'condensed')
                        dispatch(changeSidebarType(layoutConstants.SideBarWidth.LEFT_SIDEBAR_TYPE_FIXED));
                }
                break;

            case layoutConstants.LayoutTypes.LAYOUT_FULL:
                if (document.body) {
                    document.body.classList.toggle('hide-menu');
                }
                break;
            default:
                break;
        }
    };

    /**
     * Toggles the right sidebar
     */
    const handleRightSideBar = () => {
        dispatch(showRightSidebar());
    };

    return (
        <div className={classNames('navbar-custom', navCssClasses)}>
            <div className={containerCssClasses}>
                {!hideLogo && (
                    <Link to="/" className="topnav-logo">
                        <span className="topnav-logo-lg">
                            <img src={logo} alt="logo" height="16" />
                        </span>
                        <span className="topnav-logo-sm">
                            <img src={topbarDark ? logoSmLight : logoSmDark} alt="logo" height="16" />
                        </span>
                    </Link>
                )}

                <ul className="list-unstyled topbar-menu float-end mb-0">
                    <li className="notification-list topbar-dropdown d-xl-none">
                        <SearchDropdown />
                    </li>
                    <li className="dropdown notification-list topbar-dropdown">
                        <LanguageDropdown />
                    </li>
                    <li className="dropdown notification-list">
                        <NotificationDropdown notifications={notifications} />
                    </li>
                    <li className="dropdown notification-list d-none d-sm-inline-block">
                        <AppsDropdown />
                    </li>
                    <li className="notification-list">
                        <button
                            className="nav-link dropdown-toggle end-bar-toggle arrow-none btn btn-link shadow-none"
                            onClick={handleRightSideBar}
                        >
                            <i className="dripicons-gear noti-icon"></i>
                        </button>
                    </li>
                    <li className="dropdown notification-list">
                        <ProfileDropdown
                            userImage={userImage}
                            menuItems={profileMenus}
                            username={'Dominic Keller'}
                            userTitle={'Founder'}
                        />
                    </li>
                </ul>

                {/* toggle for vertical layout */}
                {(layoutType === layoutConstants.LayoutTypes.LAYOUT_VERTICAL ||
                    layoutType === layoutConstants.LayoutTypes.LAYOUT_FULL) && (
                    <button className="button-menu-mobile open-left" onClick={handleLeftMenuCallBack}>
                        <i className="mdi mdi-menu" />
                    </button>
                )}

                {/* toggle for horizontal layout */}
                {layoutType === layoutConstants.LayoutTypes.LAYOUT_HORIZONTAL && (
                    <Link
                        to="#"
                        className={classNames('navbar-toggle', { open: isMenuOpened })}
                        onClick={handleLeftMenuCallBack}
                    >
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                )}

                {/* toggle for detached layout */}
                {layoutType === layoutConstants.LayoutTypes.LAYOUT_DETACHED && (
                    <Link to="#" className="button-menu-mobile disable-btn" onClick={handleLeftMenuCallBack}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                )}
                <TopbarSearch options={searchOptions} />
            </div>
        </div>
    );
};

export default Topbar;
