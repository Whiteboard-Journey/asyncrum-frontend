import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useToggle } from 'hooks';
import { Language } from '../../types';

// get the languages
const Languages: Language[] = [
    {
        name: 'English',
    },
    {
        name: '한국어',
    },
    {
        name: '简体中文',
    },
    {
        name: '繁體中文',
    },
];

const LanguageDropdown = () => {
    const enLang = Languages[0] || {};
    const [isOpen, toggleDropdown] = useToggle();

    return (
        <Dropdown show={isOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                variant="link"
                id="dropdown-languages"
                as={Link}
                to="#"
                onClick={toggleDropdown}
                className="nav-link dropdown-toggle arrow-none"
            >
                <span className="align-middle d-none d-sm-inline-block">{enLang.name}</span>
                <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align={'end'} className="dropdown-menu-animated topbar-dropdown-menu">
                <div onClick={toggleDropdown}>
                    {Languages.map((lang, i) => {
                        return (
                            <Link to="#" className="dropdown-item notify-item" key={i + '-lang'}>
                                <span className="align-middle">{lang.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default LanguageDropdown;
