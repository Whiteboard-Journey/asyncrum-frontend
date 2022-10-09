import classNames from 'classnames';
import { SubMenus } from './types';
import MenuItemLink from './MenuItemLink';

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
  const user = JSON.parse(sessionStorage.getItem('asyncrum_user')!);
  return (
    <li
      className={classNames('side-nav-item', className, item.key === user.currentTeam?.code ? 'menuitem-active' : '')}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};

export default MenuItem;
