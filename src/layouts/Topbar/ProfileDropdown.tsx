import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

type ProfileDropdownProps = {
  userImage: string;
  username: string;
  userTitle?: string;
};

const ProfileDropdown = ({ userTitle, username, userImage }: ProfileDropdownProps) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="link"
        id="dropdown-profile"
        as={Link}
        to="/settings/user"
        className="nav-link dropdown-toggle nav-user arrow-none me-0">
        <span className="account-user-avatar">
          <img src={userImage} className="rounded-circle" alt="user" referrerPolicy="no-referrer" />
        </span>
        <span>
          <span className="account-user-name">{username}</span>
          <span className="account-position">{userTitle}</span>
        </span>
      </Dropdown.Toggle>
    </Dropdown>
  );
};

export default ProfileDropdown;
