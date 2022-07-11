// @flow
import classNames from 'classnames';
import React from 'react';
import { Card } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

// component
import CardTitle from '../../../components/CardTitle';

type WatchListItems = {
    icon: string,
    variant: string,
    title: string,
    amount: string,
    trend: string,
    trendStatus: string,
};

type WatchListProps = {
    watchList: Array<WatchListItems>,
};

const WatchList = ({ watchList }: WatchListProps): React$Element<React$FragmentType> => {
    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title="My Watchlist"
                    menuItems={[
                        { label: 'Refresh', icon: 'mdi mdi-cached' },
                        { label: 'Edit', icon: 'mdi mdi-circle-edit-outline' },
                        { label: 'Remove', icon: 'mdi mdi-delete-outline', variant: 'text-danger' },
                    ]}
                />
            </Card.Body>

            <SimpleBar style={{ maxHeight: '315px' }} className="card-body py-0">
                {(watchList || []).map((watch, i) => {
                    return (
                        <React.Fragment key={i}>
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                    <div className="avatar-sm rounded">
                                        <span
                                            className={classNames(
                                                'avatar-title',
                                                'bg-' + watch.variant + '-lighten',
                                                'text-' + watch.variant,
                                                'border',
                                                'border-' + watch.variant,
                                                'rounded-circle',
                                                'h3',
                                                'my-0'
                                            )}>
                                            <i className={classNames(watch.icon)} />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <h4 className="mt-0 mb-1 font-16 fw-semibold">{watch.title}</h4>
                                    <p className="mb-0 text-muted">{watch.amount}</p>
                                </div>
                                <p
                                    className={classNames('mb-0', {
                                        'text-success': watch.trendStatus === 'up',
                                        'text-danger': watch.trendStatus === 'down',
                                    })}>
                                    <i
                                        className={classNames('me-1', {
                                            'mdi mdi-trending-up': watch.trendStatus === 'up',
                                            'mdi mdi-trending-down': watch.trendStatus === 'down',
                                        })}></i>
                                    {watch.trend}
                                </p>
                            </div>

                            <hr className="opacity-50 bg-secondary-lighten" />
                        </React.Fragment>
                    );
                })}
            </SimpleBar>
        </Card>
    );
};

export default WatchList;
