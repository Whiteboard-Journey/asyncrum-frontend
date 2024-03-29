import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import { useRedux } from 'hooks';
import { getMenuItems } from 'helpers';
import AppMenu from './Menu';
import logo from 'assets/images/asyncrum-logo-white.png';
import logoSm from 'assets/images/asyncrum-logo-white-small.png';
import { MenuItemType } from 'appConstants';

type SideBarContentProps = {
  hideUserProfile: boolean;
};

const SideBarContent = ({ hideUserProfile }: SideBarContentProps) => {
  const { appSelector } = useRedux();
  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  const { loading, user, teamList, currentTeam } = appSelector((state) => ({
    loading: state.Auth.loading,
    user: state.Auth.user,
    teamList: state.Team.teamList,
    currentTeam: state.Team.currentTeam,
  }));

  useEffect(() => {
    if (loading) {
      return;
    }
    setMenuItems(getMenuItems(teamList, currentTeam));
  }, [loading, teamList, currentTeam]);

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
      <AppMenu menuItems={menuItems} />
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
              <img src={logo} alt="logo" height="24" />
            </span>
            <span className="logo-sm">
              <img src={logoSm} alt="logo" height="16" />
            </span>
          </Link>

          <Link to="/" className="logo text-center logo-dark">
            <span className="logo-lg">
              <img src={logo} alt="logo" height="24" />
            </span>
            <span className="logo-sm">
              <img src={logoSm} alt="logo" height="16" />
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
