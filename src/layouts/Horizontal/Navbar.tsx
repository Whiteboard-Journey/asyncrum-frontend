import AppMenu from './Menu';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';
import { getMenuItems } from 'helpers';
import { useRedux } from 'hooks';

type NavbarProps = {
  isMenuOpened?: boolean;
};

const Navbar = ({ isMenuOpened }: NavbarProps) => {
  const { appSelector } = useRedux();

  const { user, teamList, currentTeam } = appSelector((state) => ({
    user: state.Auth.user,
    teamList: state.Team.teamList,
    currentTeam: state.Team.currentTeam,
  }));
  // change the inputTheme value to light for creative theme
  const inputTheme = 'dark';

  return (
    <div className="topnav shadow-sm">
      <div className="container-fluid">
        <nav className={classNames('navbar', 'navbar-expand-lg', 'topnav-menu', 'navbar-' + inputTheme)}>
          <Collapse in={isMenuOpened} className="navbar-collapse">
            <div id="topnav-menu-content">
              <AppMenu menuItems={getMenuItems(teamList, currentTeam)} />
            </div>
          </Collapse>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
