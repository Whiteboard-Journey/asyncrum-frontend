// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';

// component
import CardTitle from '../../../components/CardTitle';

type MoneyHistoryItems = {
    title: string,
    money: string,
    icon: string,
    variant: string,
};

type MoneyHistoryProps = {
    moneyHistory: Array<MoneyHistoryItems>,
};

const MoneyHistory = ({ moneyHistory }: MoneyHistoryProps): React$Element<React$FragmentType> => {
    return (
        <Card>
            <Card.Body>
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between mb-2"
                    title="Money History"
                    menuItems={[
                        { label: 'Refresh', icon: 'mdi mdi-cached' },
                        { label: 'Edit', icon: 'mdi mdi-circle-edit-outline' },
                        { label: 'Remove', icon: 'mdi mdi-delete-outline', variant: 'text-danger' },
                    ]}
                />
                {(moneyHistory || []).map((money, i) => {
                    return (
                        <div
                            className={classNames('border', 'border-light', 'rounded', 'p-3', {
                                'mb-3': i < moneyHistory.length - 1,
                            })}
                            key={i}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p className="font-18 mb-1">{money.title}</p>
                                    <h3 className={classNames('text-' + money.variant, 'my-0')}>{money.money}</h3>
                                </div>
                                <div className="avatar-sm">
                                    <span
                                        className={classNames(
                                            'avatar-title',
                                            'bg-' + money.variant,
                                            'rounded-circle',
                                            'h3',
                                            'my-0'
                                        )}>
                                        <i className={classNames(money.icon)}></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Card.Body>
        </Card>
    );
};

export default MoneyHistory;
