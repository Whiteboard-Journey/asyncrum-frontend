import { viewDailyStandup as viewDailyStandupAPI } from 'helpers';

const useDailyStandupCard = () => {
  const onViewDailyStandups = async (id: number[]) => {
    await viewDailyStandupAPI(id[0]);
    await viewDailyStandupAPI(id[1]);
  };

  return { onViewDailyStandups };
};

export default useDailyStandupCard;
