// @flow
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { findAllParent, findMenuItem } from '../../helpers/menu';

const MenuItemWithChildren = ({
    item,
    tag,
    linkClassName,
    className,
    subMenuClassNames,
    activeMenuItems,
    toggleMenu,
}) => {
    const Tag = tag;

    const [open, setOpen] = useState(activeMenuItems.includes(item.key));

    const showMenu = window.screen.width <= 768 && open;

    useEffect(() => {
        setOpen(activeMenuItems.includes(item.key));
    }, [activeMenuItems, item]);

    const toggleMenuItem = (e) => {
        e.preventDefault();
        const status = !open;
        setOpen(status);
        if (toggleMenu) toggleMenu(item, status);
        return false;
    };

    return (
        <Tag className={classNames('dropdown', className, activeMenuItems.includes(item.key) ? 'active' : '')}>
            <Link
                to="/#"
                onClick={toggleMenuItem}
                data-menu-key={item.key}
                className={classNames('dropdown-toggle', 'arrow-none', linkClassName)}
                id={item.key}
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={open}>
                {item.icon && <i className={item.icon}></i>}
                <span> {item.label} </span>
                <div className="arrow-down"></div>
            </Link>

            {item.children ? (
                <div className={classNames(subMenuClassNames, { show: showMenu })} aria-labelledby={item.key}>
                    {item.children.map((child, i) => {
                        return (
                            <React.Fragment key={i}>
                                {child.children ? (
                                    <>
                                        {/* parent */}
                                        <MenuItemWithChildren
                                            item={child}
                                            tag="div"
                                            linkClassName={classNames(
                                                'dropdown-item',
                                                activeMenuItems.includes(child.key) ? 'active' : ''
                                            )}
                                            activeMenuItems={activeMenuItems}
                                            className=""
                                            subMenuClassNames="dropdown-menu"
                                            toggleMenu={toggleMenu}
                                        />
                                    </>
                                ) : (
                                    <>
                                        {/* child */}
                                        <MenuItemLink
                                            item={child}
                                            className={classNames('dropdown-item', {
                                                active: activeMenuItems.includes(child.key),
                                            })}
                                        />
                                    </>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            ) : null}
        </Tag>
    );
};

const MenuItem = ({ item, className, linkClassName }) => {
    return (
        <li className={classNames('nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName} />
        </li>
    );
};

const MenuItemLink = ({ item, className }) => {
    return (
        <Link to={item.url} target={item.target} className={classNames(className)} data-menu-key={item.key}>
            {item.icon && <i className={item.icon}></i>}
            <span> {item.label} </span>
        </Link>
    );
};

/**
 * Renders the application menu
 */

type AppMenuProps = {
    menuItems: Array<any>,
};

const AppMenu = ({ menuItems }: AppMenuProps): React$Element<React$FragmentType> => {
    const menuRef = useRef(null);
    let location = useLocation();

    const [topnavMenuItems, setTopnavMenuItems] = useState([]);
    const [activeMenuItems, setActiveMenuItems] = useState([]);

    /*
     * toggle the menus
     */
    const toggleMenu = (menuItem, show) => {
        if (show) setActiveMenuItems([menuItem['key'], ...findAllParent(topnavMenuItems, menuItem)]);
    };

    /**
     * activate the menuitems
     */
    const activeMenu = useCallback(() => {
        const div = document.getElementById('main-side-menu');
        let matchingMenuItem = null;

        if (div) {
            let items: any = div.getElementsByTagName('a');
            for (let i = 0; i < items.length; ++i) {
                if (location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }

            if (matchingMenuItem) {
                const mid = matchingMenuItem.getAttribute('data-menu-key');
                const activeMt = findMenuItem(topnavMenuItems, mid);
                if (activeMt) {
                    setActiveMenuItems([activeMt['key'], ...findAllParent(topnavMenuItems, activeMt)]);
                }
            }
        }
    }, [location.pathname, topnavMenuItems]);

    useEffect(() => {
        //controlling how many menu items can be displayed in it
        let modifiedMenuItems = menuItems ? menuItems.filter((item) => (!item.isTitle ? item : null)) : [];
        const defaultDisplayedItems = window.screen.width > 1366 ? 7 : 5;

        if (modifiedMenuItems.length > defaultDisplayedItems) {
            const displayedItems = modifiedMenuItems.slice(0, defaultDisplayedItems);

            const moreChildren = modifiedMenuItems
                .slice(defaultDisplayedItems, menuItems.length)
                .map((i) => ({ ...i, parentKey: 'more' }));

            const otherItems = {
                id: modifiedMenuItems.length + 1,
                path: '/',
                label: 'More',
                icon: 'uil-ellipsis-h',
                key: 'more',
                children: moreChildren,
            };
            modifiedMenuItems = [...displayedItems, otherItems];
            setTopnavMenuItems(modifiedMenuItems);
        } else {
            setTopnavMenuItems(modifiedMenuItems);
        }
    }, [menuItems]);

    useEffect(() => {
        if (topnavMenuItems && topnavMenuItems.length > 0) activeMenu();
    }, [activeMenu, topnavMenuItems]);

    return (
        <>
            <ul className="navbar-nav" ref={menuRef} id="main-side-menu">
                {(topnavMenuItems || []).map((item, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            {item.children ? (
                                <MenuItemWithChildren
                                    item={item}
                                    tag="li"
                                    className="nav-item"
                                    subMenuClassNames="dropdown-menu"
                                    activeMenuItems={activeMenuItems}
                                    linkClassName="nav-link"
                                    toggleMenu={toggleMenu}
                                />
                            ) : (
                                <MenuItem
                                    item={item}
                                    linkClassName="nav-link dropdown-toggle arrow-none"
                                    className={{ active: activeMenuItems.includes(item.key) }}
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </ul>
        </>
    );
};

export default AppMenu;
