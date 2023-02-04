import classNames from 'classnames';
import { SubMenus } from './types';
import MenuItemLink from './MenuItemLink';
import { currentTeam } from 'mock-server/demoData';

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
  const bottom = item.key === 'settings' ? 63 : 20;

  return (
    <li
      style={['settings', 'logout'].includes(item.key) ? { position: 'fixed', bottom: bottom } : {}}
      className={classNames('side-nav-item', className, item.key === currentTeam?.code ? 'menuitem-active' : '')}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};

export default MenuItem;
