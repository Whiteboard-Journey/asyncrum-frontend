import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';
import classNames from 'classnames';
import { groupByFields } from 'utils';
import { SearchOption } from '../types';

type TopbarSearchProps = {
    options: SearchOption[];
};

/*
 * get options
 */
const optionGetter = (option: SearchOption) => {
    switch (option.type) {
        case 'report':
            return (
                <Link to="#" className={classNames('dropdown-item', 'notify-item', 'p-0')}>
                    <i className={classNames(option.icon, 'font-16', 'me-1')}></i>
                    <span>{option.label}</span>
                </Link>
            );
        case 'help':
            return (
                <Link to="#" className={classNames('dropdown-item', 'notify-item', 'p-0')}>
                    <i className={classNames(option.icon, 'font-16', 'me-1')}></i>
                    <span>{option.label}</span>
                </Link>
            );
        case 'settings':
            return (
                <Link to="#" className={classNames('dropdown-item', 'notify-item', 'p-0')}>
                    <i className={classNames(option.icon, 'font-16', 'me-1')}></i>
                    <span>{option.label}</span>
                </Link>
            );
        case 'title':
            return (
                <div className="noti-title">
                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                </div>
            );
        case 'users':
            return (
                <Link to="#" className="dropdown-item notify-item p-0">
                    <div className="d-flex">
                        <img
                            src={option.userDetails?.avatar}
                            alt=""
                            className="d-flex me-2 rounded-circle"
                            height="32"
                        />
                        <div className="w-100">
                            <h5 className="drop-username m-0 font-14">
                                {option.userDetails?.firstname} {option.userDetails?.lastname}
                            </h5>
                            <span className="user-subinfo font-12 mb-0">{option.userDetails?.position}</span>
                        </div>
                    </div>
                </Link>
            );

        default:
            return;
    }
};

/*
 * filter options
 */
const formateOptions = (options: SearchOption[]) => {
    const grouppedData = groupByFields(options, (item: SearchOption) => {
        return [item.type];
    });

    let formattedOptions = [];
    let count = 0;

    for (let i = 0; i < grouppedData.length; i++) {
        for (let j = 0; j < grouppedData[i].length; j++) {
            if (grouppedData[i][j].type === 'users' && count === 0) {
                grouppedData[i].splice(j, 0, {
                    label: 'Users',
                    value: 'title',
                    type: 'title',
                });
                count = 1;
            }
            formattedOptions.push(grouppedData[i][j]);
        }
    }
    return formattedOptions;
};

/* custom control */
const Control = ({ children, ...props }: any) => {
    const { handleClick } = props.selectProps;
    return (
        <components.Control {...props}>
            <span onMouseDown={handleClick} className="mdi mdi-magnify search-icon"></span>
            {children}
        </components.Control>
    );
};

/* custon indicator */
const IndicatorsContainer = (props: any) => {
    const { handleClick } = props.selectProps;
    return (
        <div style={{}}>
            <components.IndicatorsContainer {...props} className="input-group">
                <button className="btn btn-primary input-group-text" onMouseDown={handleClick}>
                    Search
                </button>
            </components.IndicatorsContainer>
        </div>
    );
};

/* custom menu list */
const MenuList = (props: any) => {
    const { options } = props.selectProps;

    return (
        <components.MenuList {...props}>
            {/* menu header */}
            <div className="dropdown-header noti-title">
                <h5 className="text-overflow mb-2">
                    Found <span className="text-danger">{options.length}</span> results
                </h5>
            </div>
            {props.children}
        </components.MenuList>
    );
};

/* fomates the option label */
const handleFormatOptionLabel = (option: SearchOption) => {
    const formattedOption = optionGetter(option);
    return <div>{formattedOption}</div>;
};

const TopbarSearch = ({ options }: TopbarSearchProps) => {
    return (
        <Select
            components={{ Control, IndicatorsContainer, MenuList }}
            placeholder={'Search...'}
            options={formateOptions(options)}
            formatOptionLabel={handleFormatOptionLabel}
            isOptionDisabled={(option) => option.type === 'title'}
            maxMenuHeight={350}
            isSearchable
            isClearable
            name="search-app"
            className="app-search dropdown"
            classNamePrefix="react-select"
        />
    );
};

export default TopbarSearch;
