import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import { CardTitle } from 'components';
import { MoneyRecord } from './types';

type MoneyHistoryProps = {
    moneyHistory: MoneyRecord[];
};

const MoneyHistory = ({ moneyHistory }: MoneyHistoryProps) => {
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
                {(moneyHistory || []).map((item, index) => {
                    return (
                        <div
                            className={classNames('border', 'border-light', 'rounded', 'p-3', {
                                'mb-3': index < moneyHistory.length - 1,
                            })}
                            key={index.toString()}
                        >
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p className="font-18 mb-1">{item.title}</p>
                                    <h3 className={classNames('text-' + item.variant, 'my-0')}>{item.money}</h3>
                                </div>
                                <div className="avatar-sm">
                                    <span
                                        className={classNames(
                                            'avatar-title',
                                            'bg-' + item.variant,
                                            'rounded-circle',
                                            'h3',
                                            'my-0'
                                        )}
                                    >
                                        <i className={classNames(item.icon)}></i>
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
