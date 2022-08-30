import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import classNames from 'classnames';
import { getMenuItems } from 'helpers';
import AppMenu from './Menu';
import logoSm from 'assets/images/asyncrum-logo-white-small.png';
import logoDark from 'assets/images/asyncrum-logo-white.png';
import logoDarkSm from 'assets/images/asyncrum-logo-white-small.png';
import logo from 'assets/images/asyncrum-logo-white.png';
import helpBoxImage from 'assets/images/help-icon.svg';

type SideBarContentProps = {
  hideUserProfile: boolean;
};

const SideBarContent = ({ hideUserProfile }: SideBarContentProps) => {
  const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);

  return (
    <>
      {!hideUserProfile && (
        <div className="leftbar-user">
          <Link to="/">
            <img src="" alt="" height="42" className="rounded-circle shadow-sm" />
            <span className="leftbar-user-name">{user.fullname}</span>
          </Link>
        </div>
      )}
      <AppMenu menuItems={getMenuItems()} />

      <div
        className={classNames('help-box', 'text-center', {
          'text-white': hideUserProfile,
        })}
      >
        <Link to="/" className="float-end close-btn text-white">
          <i className="mdi mdi-close" />
        </Link>

        <img src={helpBoxImage} height="90" alt="Helper Icon" />
        <h5 className="mt-3">Unlimited Access</h5>
        <p className="mb-3">Upgrade to plan to get access to unlimited reports</p>
        <button className={classNames('btn', 'btn-sm', hideUserProfile ? 'btn-outline-light' : 'btn-outline-primary')}>
          Upgrade
        </button>
      </div>
      <div className="clearfix" />
    </>
  );
};

type LeftSidebarProps = {
  hideLogo?: boolean;
  hideUserProfile: boolean;
  isLight: boolean;
  isCondensed: boolean;
};

const LeftSidebar = ({ isCondensed, isLight, hideLogo, hideUserProfile }: LeftSidebarProps) => {
  const menuNodeRef = useRef<HTMLDivElement>(null);

  /**
   * Handle the click anywhere in doc
   */
  const handleOtherClick = (e: MouseEvent) => {
    if (menuNodeRef && menuNodeRef.current && menuNodeRef.current.contains(e.target as Node)) return;
    // else hide the menubar
    if (document.body) {
      document.body.classList.remove('sidebar-enable');
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOtherClick, false);

    return () => {
      document.removeEventListener('mousedown', handleOtherClick, false);
    };
  }, []);

  return (
    <div className="leftside-menu" ref={menuNodeRef}>
      {!hideLogo && (
        <>
          <Link to="/" className="logo text-center logo-light">
            <span className="logo-lg">
              <img src={isLight ? logoDark : logo} alt="logo" height="24" />
            </span>
            <span className="logo-sm">
              <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
            </span>
          </Link>

          <Link to="/" className="logo text-center logo-dark">
            <span className="logo-lg">
              <img src={isLight ? logoDark : logo} alt="logo" height="24" />
            </span>
            <span className="logo-sm">
              <img src={isLight ? logoSm : logoDarkSm} alt="logo" height="16" />
            </span>
          </Link>
        </>
      )}

      {!isCondensed && (
        <SimpleBar style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
          <SideBarContent hideUserProfile={hideUserProfile} />
        </SimpleBar>
      )}
      {isCondensed && <SideBarContent hideUserProfile={hideUserProfile} />}
    </div>
  );
};

export default LeftSidebar;
