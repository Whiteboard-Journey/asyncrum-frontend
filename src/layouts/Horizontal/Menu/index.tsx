import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { findAllParent, findMenuItem } from 'helpers';
import { MenuItemType } from 'appConstants';
import MenuItemWithChildren from './MenuItemWithChildren';
import MenuItem from './MenuItem';

/**
 * Renders the application menu
 */

type AppMenuProps = {
    menuItems: Array<MenuItemType>;
};

const AppMenu = ({ menuItems }: AppMenuProps) => {
    let location = useLocation();
    const menuRef = useRef<HTMLUListElement>(null);

    const [topnavMenuItems, setTopnavMenuItems] = useState<MenuItemType[]>(menuItems);
    const [activeMenuItems, setActiveMenuItems] = useState<string[]>([]);

    /*
     * toggle the menus
     */
    const toggleMenu = (menuItem: MenuItemType, show: boolean) => {
        if (show) setActiveMenuItems([menuItem['key'], ...findAllParent(topnavMenuItems, menuItem)]);
    };

    /**
     * activate the menuitems
     */
    const activeMenu = useCallback(() => {
        const div = document.getElementById('main-side-menu');
        let matchingMenuItem = null;

        if (div) {
            let items: HTMLCollectionOf<HTMLAnchorElement> = div.getElementsByTagName('a');
            for (let i = 0; i < items.length; ++i) {
                if (location.pathname === items[i].pathname) {
                    matchingMenuItem = items[i];
                    break;
                }
            }

            if (matchingMenuItem) {
                const mid = matchingMenuItem.getAttribute('data-menu-key');
                const activeMt = findMenuItem(topnavMenuItems, mid!);
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
        <ul className="navbar-nav" ref={menuRef} id="main-side-menu">
            {(topnavMenuItems || []).map((item, index) => {
                return (
                    <React.Fragment key={index.toString()}>
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
                                className={activeMenuItems.includes(item.key) ? 'active' : ''}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};

export default AppMenu;
