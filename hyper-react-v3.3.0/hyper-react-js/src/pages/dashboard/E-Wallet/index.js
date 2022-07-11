// @flow
import React from 'react';
import { Col, Row } from 'react-bootstrap';

// component
import PageTitle from '../../../components/PageTitle';

import StatisticsWidget from './StatisticsWidget';
import BalanceStatus from './BalanceStatus';
import WalletCard from './WalletCard';
import WatchList from './WatchList';
import MoneyHistory from './MoneyHistory';
import MarchantList from './MarchantList';
import TransactionList from './TransactionList';

// dummy data
import { marchantList, moneyHistory, transactionList, watchList } from './data';

const EWalletDashboard = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Dashboard', path: '/' },
                    { label: 'E Wallet', path: '/dashboard/e-wallet', active: true },
                ]}
                title={'E Wallet'}
            />

            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col xl={4}>
                            <StatisticsWidget
                                icon="mdi mdi-currency-btc"
                                stats="$12,500"
                                trend="45%"
                                currencyType="BTC"
                                currencyAmount="$48,781.20"
                                chartType="line"
                                colors={['#727cf5']}
                                data={[25, 33, 28, 35, 30, 40]}
                                strokeWidth={2}
                            />
                        </Col>
                        <Col xl={4}>
                            <StatisticsWidget
                                icon="mdi mdi-currency-cny"
                                stats="$9,250"
                                trend="32%"
                                currencyType="CNY"
                                currencyAmount="$0.6"
                                chartType="bar"
                                colors={['#727cf5']}
                                data={[25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63]}
                                strokeWidth={0}
                            />
                        </Col>
                        <Col xl={4}>
                            <StatisticsWidget
                                icon="mdi mdi-currency-eth"
                                stats="$12,500"
                                trend="60%"
                                currencyType="ETH"
                                currencyAmount="$3,783.68"
                                chartType="line"
                                colors={['#727cf5']}
                                data={[25, 33, 28, 35, 30, 40]}
                                strokeWidth={2}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <BalanceStatus />
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xxl={12} md={6}>
                            <WalletCard />
                        </Col>
                        <Col xxl={12} md={6}>
                            <WatchList watchList={watchList} />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col xxl={3} md={6}>
                    <MoneyHistory moneyHistory={moneyHistory} />
                </Col>
                <Col xxl={3} md={6}>
                    <MarchantList marchantList={marchantList} />
                </Col>
                <Col xxl={6}>
                    <TransactionList transactionList={transactionList} />
                </Col>
            </Row>
        </>
    );
};

export default EWalletDashboard;
