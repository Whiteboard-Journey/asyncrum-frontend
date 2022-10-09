import { Box, Flex, SliderTrack, Slider, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';

import { Volume as VolumeIcon } from 'tabler-icons-react';

import type { Video } from './Video';

type Props = {
  video: Video;
  setCurrentVolume: React.Dispatch<React.SetStateAction<number>>;
};

export default function VideoVolume({ video, setCurrentVolume }: Props) {
  function handleSliderChange(value: number) {
    setCurrentVolume(value);
    video.el.volume = value;
  }

  return (
    <Flex align="center" width="7rem">
      <Box mb={1}>
        <VolumeIcon />
      </Box>
      <Slider
        key="playing"
        aria-label="Video volume control"
        value={video.el.volume}
        min={0}
        max={1}
        onChange={(value: number) => handleSliderChange(value)}
        step={0.01}
        focusThumbOnChange={false}
        ml={2}
        mb={1}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Flex>
  );
}
