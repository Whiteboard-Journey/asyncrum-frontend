import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { SubMenus } from './types';
import { changeTeam } from 'helpers';
import { Dayjs } from 'dayjs';

const isWorking = (time: Dayjs) => {
  return 8 < time.hour() && time.hour() < 17;
};

const MenuItemLink = ({ item, className }: SubMenus) => {
  return (
    <Link
      to={{ pathname: item.url }}
      onClick={() => {
        if (item.teamId) {
          changeTeam(item.teamId);
        }
      }}
      target={item.target}
      className={classNames('side-nav-link-ref', 'side-sub-nav-link', className)}
      data-menu-key={item.key}>
      {item.icon && <i className={item.icon}></i>}
      {item.parentKey === 'members' && (
        <span
          style={{ height: '0.5rem', borderRadius: '10', fontSize: '0.5rem', marginTop: '0.5rem' }}
          className={classNames('badge', isWorking(item.time!) ? 'bg-success' : 'bg-secondary', 'float-end')}>
          &nbsp;
        </span>
      )}
      <span> {item.label} </span>
    </Link>
  );
};

export default MenuItemLink;
