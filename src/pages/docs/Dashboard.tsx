import WhiteboardContainer from './WhiteboardContainer';
import DailyStandupContainer from './DailyStandupContainer';
import MeetingContainer from './MeetingContainer';
import { useRedux } from 'hooks';

const Dashboard = () => {
  const { appSelector } = useRedux();

  const { loading } = appSelector((state) => ({
    loading: state.Auth.loading,
  }));

  return loading ? (
    <>
      <p>Loading</p>
    </>
  ) : (
    <>
      <DailyStandupContainer />
      <hr />
      <MeetingContainer />
      <hr />
      <WhiteboardContainer />
    </>
  );
};

export default Dashboard;
