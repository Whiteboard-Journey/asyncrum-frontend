import Carousel from 'react-multi-carousel';
import { readAllDailyStandups as readAllDailyStandupsAPI, viewDailyStandup as viewDailyStandupAPI } from 'helpers';
import { DailyStandup } from '../types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useMoment } from './';
import { APICore } from 'helpers/api/apiCore';

const useDailyStandup = () => {
  const [dailyStandups, setDailyStandups] = useState<DailyStandup[]>([]);
  const [dailyStandupLoading, setDailyStandupLoading] = useState<boolean>(true);

  const carouselRef = useRef<Carousel>(null);

  const { getTimeDifference } = useMoment();
  const api = new APICore();
  const user = api.getLoggedInUser();
  const scope = 'team';

  const readAllDailyStandups = useCallback(async () => {
    const pageIndex = 0;
    const readAllDailyStandupsAPIResponse = await readAllDailyStandupsAPI({ scope, pageIndex });
    for (const record of readAllDailyStandupsAPIResponse.data.records) {
      if (getTimeDifference(record.createdDate) > 24 && record.seenMemberIdGroup?.indexOf(user.id) > -1) {
        continue;
      }
      if (
        dailyStandups.at(-1) &&
        dailyStandups.at(-1)?.author === record.author.fullname &&
        dailyStandups.at(-1)?.title.slice(0, 13) === record.title.slice(0, 13)
      ) {
        if (record.title.slice(-6) === 'screen') {
          dailyStandups.at(-1)?.id.push(record.id);
          (dailyStandups.at(-1) as DailyStandup).screenRecordFileUrl = record.recordFileUrl;
        } else {
          dailyStandups.at(-1)?.id.push(record.id);
          (dailyStandups.at(-1) as DailyStandup).camRecordFileUrl = record.recordFileUrl;
        }
      } else {
        if (record.title.slice(-6) === 'screen') {
          dailyStandups.push({
            id: [record.id],
            author: record.author.fullname,
            title: record.title,
            profileImageUrl: record.author.profileImageUrl,
            createdDate: record.createdDate,
            camRecordFileUrl: '',
            screenRecordFileUrl: record.recordFileUrl,
            seen: record.seenMemberIdGroup?.indexOf(user.id) > -1 ? true : false,
          });
        } else {
          dailyStandups.push({
            id: [record.id],
            author: record.author.fullname,
            title: record.title,
            profileImageUrl: record.author.profileImageUrl,
            createdDate: record.createdDate,
            camRecordFileUrl: record.recordFileUrl,
            screenRecordFileUrl: '',
            seen: record.seenMemberIdGroup?.indexOf(user.id) > -1 ? true : false,
          });
        }
      }
    }
    setDailyStandups(dailyStandups.reverse());
    setDailyStandupLoading(false);
    let slide = dailyStandups.findIndex((dailyStandup) => !dailyStandup.seen);
    slide = slide >= 0 ? slide : 0;
    if (carouselRef && carouselRef.current) {
      carouselRef.current.goToSlide(slide);
    }
  }, [dailyStandups, getTimeDifference, user.id]);

  const onViewDailyStandups = async (dailyStandup: DailyStandup) => {
    await viewDailyStandupAPI(dailyStandup.id[0]);
    await viewDailyStandupAPI(dailyStandup.id[1]);
    dailyStandup.seen = true;
  };

  useEffect(() => {
    readAllDailyStandups();
  }, [readAllDailyStandups]);

  return { carouselRef, dailyStandups, dailyStandupLoading, setDailyStandups, setDailyStandupLoading, onViewDailyStandups };
};

export default useDailyStandup;
