import classNames from 'classnames';
import { SubMenus } from './types';
import MenuItemLink from './MenuItemLink';

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
    return (
        <li className={classNames('side-nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName} />
        </li>
    );
};

export default MenuItem;
