import { Text } from '@chakra-ui/react';

type Props = {
  currentTime: number;
  fullDuration: number;
};

const secondsToHms = (input: number) => {
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor(input / 60) % 60;
  const seconds = input % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};

const TimeDisplay = ({ currentTime, fullDuration }: Props) => {
  return (
    <Text whiteSpace="nowrap" fontSize="sm" align="center" my="auto" mb="1">
      {secondsToHms(Math.round(currentTime))} / {secondsToHms(Math.round(fullDuration))}
    </Text>
  );
};

export default TimeDisplay;
