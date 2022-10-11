import { useCallback } from 'react';
import moment from 'moment';

const useMoment = () => {
  const convertDateTime = (datetime: string) => {
    const convertedDatetime = new Date(datetime);
    convertedDatetime.setTime(convertedDatetime.getTime() - convertedDatetime.getTimezoneOffset() * 60 * 1000);
    return convertedDatetime;
  };

  const getTimeFromNow = (datetime: string) => {
    return moment(convertDateTime(datetime)).fromNow();
  };

  const getTimeDifference = useCallback((datetime: string) => {
    return moment().diff(moment(convertDateTime(datetime)), 'hours');
  }, []);

  return { convertDateTime, getTimeFromNow, getTimeDifference };
};

export default useMoment;
