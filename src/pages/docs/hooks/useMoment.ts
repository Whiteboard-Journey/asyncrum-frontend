import moment from 'moment';

export default function useMoment() {
  const convertDateTime = (datetime: string) => {
    const convertedDatetime = new Date(datetime);
    convertedDatetime.setTime(convertedDatetime.getTime() - convertedDatetime.getTimezoneOffset() * 60 * 1000);
    return convertedDatetime;
  };

  const getTimeFromNow = (datetime: string) => {
    return moment(convertDateTime(datetime)).fromNow();
  };

  return { convertDateTime, getTimeFromNow };
}
