import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useToggle } from 'hooks';

const SearchDropdown = () => {
    const [isOpen, toggleDropdown] = useToggle();

    return (
        <Dropdown show={isOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                variant="link"
                id="dropdown-apps"
                as={Link}
                to="#"
                onClick={toggleDropdown}
                className="nav-link dropdown-toggle arrow-none"
            >
                <i className="dripicons-search noti-icon"></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-animated dropdown-lg p-0">
                <form className="p-3">
                    <input type="text" className="form-control" placeholder="Search ..." />
                </form>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SearchDropdown;
