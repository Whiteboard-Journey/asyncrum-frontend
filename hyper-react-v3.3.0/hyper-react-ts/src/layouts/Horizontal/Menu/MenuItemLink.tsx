import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { MenuItems } from './types';

const MenuItemLink = ({ item, className }: MenuItems) => {
    return (
        <Link
            to={{ pathname: item.url }}
            target={item.target}
            className={classNames(className)}
            data-menu-key={item.key}
        >
            {item.icon && <i className={item.icon}></i>}
            <span> {item.label} </span>
        </Link>
    );
};
export default MenuItemLink;
