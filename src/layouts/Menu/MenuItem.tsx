import classNames from 'classnames';
import { SubMenus } from './types';
import MenuItemLink from './MenuItemLink';
import { useRedux } from 'hooks';

const MenuItem = ({ item, className, linkClassName }: SubMenus) => {
  const { appSelector } = useRedux();

  const { user } = appSelector((state) => ({
    user: state.Auth.user,
  }));

  return (
    <li
      className={classNames('side-nav-item', className, item.key === user.currentTeam?.code ? 'menuitem-active' : '')}
    >
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};

export default MenuItem;
