import WhiteboardContainer from './WhiteboardContainer';
import DailyStandupContainer from './DailyStandupContainer';
import MeetingContainer from './MeetingContainer';
import NewTeamContainer from './NewTeamContainer';
import { useRedux } from 'hooks';

const Dashboard = () => {
  const { appSelector } = useRedux();

  const { loading, teamList } = appSelector((state) => ({
    loading: state.Auth.loading,
    teamList: state.Team.teamList,
  }));

  return (
    <>
      {/* <DailyStandupContainer /> */}
      <hr />
      <MeetingContainer />
      <hr />
      <WhiteboardContainer />
    </>
  );
};

export default Dashboard;
