import classNames from 'classnames';
import { MenuItems } from './types';
import MenuItemLink from './MenuItemLink';

const MenuItem = ({ item, className, linkClassName }: MenuItems) => {
    return (
        <li className={classNames('nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName} />
        </li>
    );
};

export default MenuItem;
