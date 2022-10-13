import Carousel from 'react-multi-carousel';
import { readAllDailyStandups as readAllDailyStandupsAPI, viewDailyStandup as viewDailyStandupAPI } from 'helpers';
import { DailyStandup } from '../types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useRedux } from 'hooks';
import { useMoment } from './';
import { Video } from 'components/VideoPlayer/Video';

const useDailyStandup = () => {
  const [dailyStandups, setDailyStandups] = useState<DailyStandup[]>([]);
  const [dailyStandupLoading, setDailyStandupLoading] = useState<boolean>(true);
  const { appSelector } = useRedux();

  const carouselRef = useRef<Carousel>(null);

  const { getTimeDifference } = useMoment();

  const { loading, user } = appSelector((state) => ({
    loading: state.Auth.loading,
    user: state.Auth.user,
  }));

  const scope = 'team';
  const teamId = user.currentTeam?.id;

  const readAllDailyStandups = useCallback(async () => {
    const pageIndex = 0;
    const readAllDailyStandupsAPIResponse = await readAllDailyStandupsAPI({ teamId, scope, pageIndex });
    for (const record of readAllDailyStandupsAPIResponse.data.records) {
      if (getTimeDifference(record.createdDate) > 24 && record.seenMemberIdGroup?.indexOf(user.id) > -1) {
        continue;
      }
      if (
        dailyStandups.at(-1) &&
        dailyStandups.at(-1)?.author === record.member.fullname &&
        dailyStandups.at(-1)?.title.slice(0, dailyStandups.at(-1)?.title.lastIndexOf(" ")) === record.title.slice(0, dailyStandups.at(-1)?.title.lastIndexOf(" "))
      ) {
        if (record.title.slice(-6) === 'screen') {
          const el = document.createElement('video');
          el.src = record.recordUrl;
          el.addEventListener('loadedmetadata', function () {
            if (el.duration == Infinity) {
              el.currentTime = 1e101;
              el.ontimeupdate = function () {
                this.ontimeupdate = () => {
                  return;
                };
                el.currentTime = 0;
                return;
              };
            }
          });
          dailyStandups.at(-1)?.id.push(record.id);
          (dailyStandups.at(-1) as DailyStandup).screenRecordId = record.id;
          (dailyStandups.at(-1) as DailyStandup).screenRecordFileUrl = record.recordUrl;
          // (dailyStandups.at(-1) as DailyStandup).video = {
          //     bookmarks: record.bookmarks ? record.bookmarks.map((b: any) => {
          //       return {
          //         ...b,
          //         drawing: JSON.parse(b.drawing),
          //         icon: b.emoji ? String.fromCodePoint(parseInt('0x' + b.emoji)) : ''
          //       }
          //     }) : [],
          //     codedWidth: 1280,
          //     codedHeight: 720,
          //     displayAspectRatio: "16:9",
          //     el: el,
          //     filePath: record.recordUrl,
          //     frameRate: 30,
          //     id: record.id,
          //     name: record.title,
          //     seeking: false,
          //     volume: 0.8
          // }
        } else {
          dailyStandups.at(-1)?.id.push(record.id);
          (dailyStandups.at(-1) as DailyStandup).camRecordFileUrl = record.recordUrl;
        }
      } else {
        if (record.title.slice(-6) === 'screen') {
          const el = document.createElement('video');
          el.src = record.recordUrl;
          el.addEventListener('loadedmetadata', function () {
            if (el.duration == Infinity) {
              el.currentTime = 1e101;
              el.ontimeupdate = function () {
                this.ontimeupdate = () => {
                  return;
                };
                el.currentTime = 0;
                return;
              };
            }
          });
          dailyStandups.push({
            id: [record.id],
            author: record.member.fullname,
            title: record.title,
            profileImageUrl: record.member.profileImageUrl,
            createdDate: record.createdDate,
            camRecordFileUrl: '',
            screenRecordFileUrl: record.recordUrl,
            screenRecordId: record.id,
            seen: record.seenMemberIdGroup?.indexOf(user.id) > -1 ? true : false,
            // video: {
            //   bookmarks: record.bookmarks ? record.bookmarks.map((b: any) => {
            //     return {
            //       ...b,
            //       drawing: JSON.parse(b.drawing),
            //       icon: b.emoji ? String.fromCodePoint(parseInt('0x' + b.emoji)) : ''
            //     }
            //   }) : [],
            //   codedWidth: 1280,
            //   codedHeight: 720,
            //   displayAspectRatio: "16:9",
            //   el: el,
            //   filePath: record.recordUrl,
            //   frameRate: 30,
            //   id: record.id,
            //   name: record.title,
            //   seeking: false,
            //   volume: 0.8
            // }
          });
        } else {
          dailyStandups.push({
            id: [record.id],
            author: record.member.fullname,
            title: record.title,
            profileImageUrl: record.member.profileImageUrl,
            createdDate: record.createdDate,
            camRecordFileUrl: record.recordUrl,
            screenRecordFileUrl: '',
            screenRecordId: -1,
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

  return { carouselRef, dailyStandups, dailyStandupLoading, setDailyStandups, setDailyStandupLoading, onViewDailyStandups };
};

export default useDailyStandup;
