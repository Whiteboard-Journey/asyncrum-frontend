// @flow
import React from 'react';
import AppMenu from './Menu';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';

import { getMenuItems } from '../../helpers/menu';

type NavbarProps = {
    isMenuOpened?: boolean,
};

const Navbar = (props: NavbarProps): React$Element<React$FragmentType> => {
    // change the inputTheme value to light for creative theme
    const inputTheme = 'light';

    return (
        <>
            <div className="topnav shadow-sm">
                <div className="container-fluid">
                    <nav className={classNames('navbar', 'navbar-expand-lg', 'topnav-menu', 'navbar-' + inputTheme)}>
                        <Collapse in={props.isMenuOpened} className="navbar-collapse" id="topnav-menu-content">
                            <div>
                                <AppMenu menuItems={getMenuItems()} />
                            </div>
                        </Collapse>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
