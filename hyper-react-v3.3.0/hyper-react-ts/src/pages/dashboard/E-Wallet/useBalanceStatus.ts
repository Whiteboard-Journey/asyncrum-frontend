export default function useBalanceStatus() {
    // generate data
    const generateData = () => {
        let balanceData = [];
        for (let i = 0; i < 100; i++) {
            balanceData.push(5000 + Math.random() * 100000 + 0.8 * i * i * i);
        }
        return balanceData;
    };

    const getDayBalance = () => {
        let dayDummyData = generateData();
        let dayBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            dayBalanceData.push([start.setDate(start.getDate() + i - 100), dayDummyData[i]]);
        }
        return [{ data: dayBalanceData }];
    };

    const getWeekBalance = () => {
        let weekDummyData = generateData();
        let weekBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            weekBalanceData.push([start.setDate(start.getDate() + i * 7 - 100 * 7), weekDummyData[i]]);
        }
        return [{ data: weekBalanceData }];
    };

    const getMonthBalance = () => {
        let monthDummyData = generateData();
        let monthBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            monthBalanceData.push([start.setDate(start.getDate() + i * 30 - 100 * 30), monthDummyData[i]]);
        }
        return [{ data: monthBalanceData }];
    };

    const getYearBalance = () => {
        let yearDummyData = generateData();
        let yearBalanceData = [];

        for (let i = 0; i < 100; i++) {
            let start = new Date();
            yearBalanceData.push([start.setDate(start.getDate() + i * 365 - 100 * 365), yearDummyData[i]]);
        }
        return [{ data: yearBalanceData }];
    };

    return {
        getDayBalance,
        getWeekBalance,
        getMonthBalance,
        getYearBalance,
    };
}
