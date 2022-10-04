import { Text } from '@chakra-ui/react';

export function secondsToHms(input: number) {
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor(input / 60) % 60;
  const seconds = input % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
}

type Props = {
  video: HTMLVideoElement;
};

export default function TimeDisplay({ video }: Props) {
  const currentTime = video.currentTime;
  const fullDuration = video.duration;

  if (fullDuration === null) {
    return null;
  }

  return (
    <Text whiteSpace="nowrap" fontSize="sm" align="center">
      {secondsToHms(Math.round(currentTime))} / {secondsToHms(Math.round(fullDuration))}
    </Text>
  );
}
