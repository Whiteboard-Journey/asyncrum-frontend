import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { changeSidebarType } from 'redux/actions';
import * as layoutConstants from 'appConstants';
import { useRedux, useToggle, useViewport } from 'hooks';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';
import logoSm from 'assets/images/asyncrum-logo-white-small.png';
import logo from 'assets/images/asyncrum-logo-white.png';
import { useEffect, useState } from 'react';
import { getFirebaseToken, onMessageListener } from './FirebaseConfig';
import { NotificationItem, Message } from '../types';
import useThemeCustomizer from 'components/ThemeCustomizer/useThemeCustomizer';
import { Form } from 'react-bootstrap';

type TopbarProps = {
  hideLogo?: boolean;
  navCssClasses?: string;
  openLeftMenuCallBack?: () => void;
  topbarDark?: boolean;
};

const Topbar = ({ hideLogo, navCssClasses, openLeftMenuCallBack, topbarDark }: TopbarProps) => {
  const { layoutColor, changeLayoutColorScheme } = useThemeCustomizer();
  const { dispatch, appSelector } = useRedux();
  const { width } = useViewport();
  const [isMenuOpened, toggleMenu] = useToggle();
  const [isTokenFound, setTokenFound] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));

  useEffect(() => {
    getFirebaseToken(setTokenFound);
  }, []);

  onMessageListener()
    .then((payload: any) => {
      console.log(payload);

      const title: string = payload.notification.title;
      const body: string = payload.notification.body;
      const message: Message = {
        id: 1,
        title: title,
        subText: body,
        time: '1 min ago',
        icon: 'mdi mdi-comment-account-outline',
        variant: 'primary',
        isRead: true,
      };

      const messages: Message[] = [];
      messages.push(message);

      const notification: NotificationItem = { day: 'Today', messages: messages };
      notifications.push(notification);

      setNotifications(notifications);
    })
    .catch((err) => console.log('failed: ', err));

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

  return (
    <div className={classNames('navbar-custom', navCssClasses)}>
      <div className={containerCssClasses}>
        {!hideLogo && (
          <Link to="/" className="topnav-logo">
            <span className="topnav-logo-lg">
              <img src={logo} alt="logo" height="16" />
            </span>
            <span className="topnav-logo-sm">
              <img src={logoSm} alt="logo" height="16" />
            </span>
          </Link>
        )}

        <ul className="list-unstyled topbar-menu float-end mb-0">
          <li className="nav-link notification-list">
            <Form>
              <i className={classNames('uil uil-sun noti-icon', layoutColor === 'light' ? 'text-warning' : '')}></i>
              <Form.Check
                className="d-inline-block"
                type="switch"
                id="custom-switch"
                checked={layoutColor === 'light' ? false : true}
                onChange={(e) => {
                  changeLayoutColorScheme(layoutColor === 'light' ? 'dark' : 'light');
                }}
              />
              <i className={classNames('uil uil-moon noti-icon', layoutColor === 'dark' ? 'text-warning' : '')}></i>
            </Form>
          </li>
          <li className="dropdown notification-list">
            <NotificationDropdown notifications={notifications!} />
          </li>
          <li className="dropdown notification-list">
            <ProfileDropdown userImage={user.profileImageUrl} username={user.fullname} userTitle={'Developer'} />
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
          <Link to="#" className={classNames('navbar-toggle', { open: isMenuOpened })} onClick={handleLeftMenuCallBack}>
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
        {/* <TopbarSearch options={searchOptions} /> */}
      </div>
    </div>
  );
};

export default Topbar;
