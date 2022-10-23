import Carousel from 'react-multi-carousel';
import { readAllDailyStandups as readAllDailyStandupsAPI, viewDailyStandup as viewDailyStandupAPI } from 'helpers';
import { DailyStandup } from '../types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRedux } from 'hooks';
import { useMoment } from './';

const useDailyStandup = () => {
  const [dailyStandups, setDailyStandups] = useState<DailyStandup[]>([]);
  const [dailyStandupLoading, setDailyStandupLoading] = useState<boolean>(true);
  const { appSelector } = useRedux();

  const carouselRef = useRef<Carousel>(null);

  const { getTimeDifference } = useMoment();

  const { loading, user, currentTeam } = appSelector((state) => ({
    loading: state.Auth.loading,
    user: state.Auth.user,
    currentTeam: state.Team.currentTeam,
  }));

  const scope = 'team';
  const teamId = currentTeam.id;
  const pageIndex = 0;

  const readAllDailyStandups = useCallback(async () => {
    const readAllDailyStandupsAPIResponse = await readAllDailyStandupsAPI({ teamId, scope, pageIndex });
    for (const record of readAllDailyStandupsAPIResponse.data.records) {
      if (getTimeDifference(record.createdDate) > 24 && record.seenMemberIdGroup?.indexOf(user.id) > -1) {
        continue;
      }
      if (
        dailyStandups.at(-1) &&
        dailyStandups.at(-1)?.author === record.member.fullname &&
        dailyStandups.at(-1)?.title.slice(0, dailyStandups.at(-1)?.title.lastIndexOf(' ')) ===
          record.title.slice(0, dailyStandups.at(-1)?.title.lastIndexOf(' '))
      ) {
        dailyStandups.at(-1)?.id.push(record.id);
        if (record.title.slice(-6) === 'screen') {
          (dailyStandups.at(-1) as DailyStandup).screenRecordId = record.id;
          (dailyStandups.at(-1) as DailyStandup).screenRecordFileUrl = record.recordUrl;
        } else {
          (dailyStandups.at(-1) as DailyStandup).camRecordFileUrl = record.recordUrl;
        }
      } else {
        let dailyStandup = {
          id: [record.id],
          author: record.member.fullname,
          title: record.title,
          profileImageUrl: record.member.profileImageUrl,
          createdDate: record.createdDate,
          camRecordFileUrl: '',
          screenRecordFileUrl: '',
          screenRecordId: -1,
          seen: record.seenMemberIdGroup?.indexOf(user.id) > -1 ? true : false,
        };
        if (record.title.slice(-6) === 'screen') {
          dailyStandup = {
            ...dailyStandup,
            screenRecordFileUrl: record.recordUrl,
            screenRecordId: record.id,
          };
        } else {
          dailyStandup = {
            ...dailyStandup,
            camRecordFileUrl: record.recordUrl,
          };
        }
        dailyStandups.push(dailyStandup);
      }
    }
    setDailyStandups(dailyStandups.reverse());
    setDailyStandupLoading(false);
    let slide = dailyStandups.findIndex((dailyStandup) => !dailyStandup.seen);
    slide = slide >= 0 ? slide : 0;
    if (carouselRef && carouselRef.current) {
      carouselRef.current.goToSlide(slide);
    }
  }, [dailyStandups, getTimeDifference, user.id, teamId]);

  const onViewDailyStandups = async (dailyStandup: DailyStandup) => {
    await viewDailyStandupAPI(dailyStandup.id[0]);
    await viewDailyStandupAPI(dailyStandup.id[1]);
    dailyStandup.seen = true;
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    readAllDailyStandups();
  }, [loading, readAllDailyStandups]);

  return {
    carouselRef,
    dailyStandups,
    dailyStandupLoading,
    setDailyStandups,
    setDailyStandupLoading,
    onViewDailyStandups,
  };
};

export default useDailyStandup;
