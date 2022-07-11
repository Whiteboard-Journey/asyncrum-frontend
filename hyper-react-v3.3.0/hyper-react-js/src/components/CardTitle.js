// @flow
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type MenuItem = {
    label: string,
    icon?: string,
    variant?: string,
    hasDivider?: boolean,
};

type CardTitleProps = {
    menuItems: Array<MenuItem>,
    title: string | React$Node,
    containerClass: string,
    icon?: string,
};

const CardTitle = ({ title, containerClass, icon, menuItems }: CardTitleProps): React$Element<any> => {
    return (
        <div className={classNames(containerClass)}>
            {typeof title === 'string' ? <h4 className="header-title">{title}</h4> : title}
            <Dropdown>
                <Dropdown.Toggle as={Link} to="#" className="arrow-none card-drop">
                    <i className={classNames(icon ? icon : 'mdi mdi-dots-vertical')} />
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                    {(menuItems || []).map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                {item.hasDivider && <Dropdown.Divider as="div" />}
                                <Dropdown.Item className={classNames(item.variant ? item.variant : '')}>
                                    {item.icon && <i className={classNames(item.icon, 'me-1')}></i>}
                                    {item.label}
                                </Dropdown.Item>
                            </React.Fragment>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default CardTitle;
