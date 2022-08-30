import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { MenuItems } from './types';
import MenuItemLink from './MenuItemLink';

const MenuItemWithChildren = ({
    item,
    tag,
    linkClassName,
    className,
    subMenuClassNames,
    activeMenuItems,
    toggleMenu,
}: MenuItems) => {
    const Tag: React.ElementType = tag || 'div';

    const [open, setOpen] = useState<boolean>(activeMenuItems!.includes(item.key));

    const showMenu: boolean = window.screen.width <= 768 && open;

    useEffect(() => {
        setOpen(activeMenuItems!.includes(item.key));
    }, [activeMenuItems, item]);

    const toggleMenuItem = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const status = !open;
        setOpen(status);
        if (toggleMenu) toggleMenu(item, status);
        return false;
    };

    return (
        <Tag className={classNames('dropdown', className, activeMenuItems!.includes(item.key) ? 'active' : '')}>
            <Link
                to="/#"
                onClick={toggleMenuItem}
                data-menu-key={item.key}
                className={classNames('dropdown-toggle', 'arrow-none', linkClassName)}
                id={item.key}
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={open}
            >
                {item.icon && <i className={item.icon}></i>}
                <span> {item.label} </span>
                <div className="arrow-down"></div>
            </Link>

            {item.children ? (
                <div className={classNames(subMenuClassNames, { show: showMenu })} aria-labelledby={item.key}>
                    {item.children.map((child, index) => {
                        return (
                            <React.Fragment key={index.toString()}>
                                {child.children ? (
                                    <>
                                        {/* parent */}
                                        <MenuItemWithChildren
                                            item={child}
                                            tag="div"
                                            linkClassName={classNames(
                                                'dropdown-item',
                                                activeMenuItems!.includes(child.key) ? 'active' : ''
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
                                                active: activeMenuItems!.includes(child.key),
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

export default MenuItemWithChildren;
