import WhiteboardContainer from './WhiteboardContainer';
import DailyStandupContainer from './DailyStandupContainer';
import { VideoPlayer } from 'components/VideoPlayer';

const Dashboard = () => {
  return (
    <>
      {/* <VideoPlayer /> */}
      <DailyStandupContainer />
      <hr />
      <WhiteboardContainer />
    </>
  );
};

export default Dashboard;
