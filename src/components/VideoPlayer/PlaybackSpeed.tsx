import { Select } from '@chakra-ui/react';
import { useState } from 'react';

const availableSpeeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

type Props = {
  disabled: boolean;
};

export default function PlaybackSpeed({ disabled }: Props) {
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  const renderedOptions = availableSpeeds.map((speed) => {
    return (
      <option key={speed} value={speed}>
        {speed}x
      </option>
    );
  });

  return (
    <Select
      onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
        setPlaybackSpeed(parseFloat(event.target.value));
      }}
      disabled={disabled}
      value={playbackSpeed}>
      {renderedOptions}
    </Select>
  );
}
