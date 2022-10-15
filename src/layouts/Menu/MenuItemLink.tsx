import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { SubMenus } from './types';
import { changeTeam } from 'helpers';

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
      data-menu-key={item.key}
    >
      {item.icon && <i className={item.icon}></i>}
      {item.badge && (
        <span
          className={classNames('badge', 'bg-' + item.badge.variant, 'rounded', 'font-10', 'float-end', {
            'text-dark': item.badge.variant === 'light',
            'text-light': item.badge.variant === 'dark' || item.badge.variant === 'secondary',
          })}
        >
          {item.badge.text}
        </span>
      )}
      <span> {item.label} </span>
    </Link>
  );
};

export default MenuItemLink;
