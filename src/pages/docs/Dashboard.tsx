import WhiteboardContainer from './WhiteboardContainer';
import DailyStandupContainer from './DailyStandupContainer';

const Dashboard = () => {
  return (
    <>
      <DailyStandupContainer />
      <hr />
      <WhiteboardContainer />
    </>
  );
};

export default Dashboard;
