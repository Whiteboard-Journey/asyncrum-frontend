// @flow
import classNames from 'classnames';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

type MarchantListItems = {
    icon: string,
    variant: string,
    title: string,
};

type MarchantListProps = {
    marchantList: Array<MarchantListItems>,
};

const createMarkup = (text) => {
    return { __html: text };
};

const MarchantList = ({ marchantList }: MarchantListProps): React$Element<React$FragmentType> => {
    return (
        <Card>
            <Card.Body className="pb-0">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h4 className="header-title">Money History</h4>
                    <Link to="#" className="btn btn-sm btn-light">
                        <i className="mdi mdi-plus"></i>
                    </Link>
                </div>
            </Card.Body>
            <SimpleBar style={{ maxHeight: '375px' }} className="card-body py-0">
                {(marchantList || []).map((marchant, i) => {
                    return (
                        <div className="d-flex align-items-center mb-3" key={i}>
                            <div className="flex-shrink-0">
                                <div className="avatar-sm rounded">
                                    <span
                                        className={classNames(
                                            'avatar-title',
                                            'bg-transparent',
                                            'border',
                                            'border-light',
                                            'text-' + marchant.variant,
                                            'rounded',
                                            'h3',
                                            'my-0'
                                        )}>
                                        <span dangerouslySetInnerHTML={createMarkup(marchant.icon)}></span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <Link to="#" className="h4 my-0 fw-semibold text-secondary">
                                    {marchant.title}
                                    <i className="mdi mdi-check-decagram text-muted ms-1"></i>
                                </Link>
                            </div>
                            <Link to="#" className="font-16 text-muted">
                                <i className="uil uil-angle-right-b"></i>
                            </Link>
                        </div>
                    );
                })}
            </SimpleBar>
        </Card>
    );
};

export default MarchantList;
