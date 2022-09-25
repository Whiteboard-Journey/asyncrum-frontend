import AppMenu from './Menu';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';
import { getMenuItems } from 'helpers';

type NavbarProps = {
  isMenuOpened?: boolean;
};

const Navbar = ({ isMenuOpened }: NavbarProps) => {
  const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
  // change the inputTheme value to light for creative theme
  const inputTheme = 'dark';

  return (
    <div className="topnav shadow-sm">
      <div className="container-fluid">
        <nav className={classNames('navbar', 'navbar-expand-lg', 'topnav-menu', 'navbar-' + inputTheme)}>
          <Collapse in={isMenuOpened} className="navbar-collapse">
            <div id="topnav-menu-content">
              <AppMenu menuItems={getMenuItems(user.teams)} />
            </div>
          </Collapse>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
