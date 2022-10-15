import { useState, useCallback } from 'react';

import { Flex, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow } from '@chakra-ui/react';
import { TldrawApp, SizeStyle } from '@krapi0314/tldraw';

type PropsType = {
  app: TldrawApp;
};

const sizes = {
  [SizeStyle.Small]: 'S',
  [SizeStyle.Medium]: 'M',
  [SizeStyle.Large]: 'L',
};

const DrawingControlsSizeSelector = ({ app }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentStyle = app.useStore((s) => s.appState.currentStyle);

  const handleSizePick = useCallback(
    (size: SizeStyle) => {
      app.style({ size });
      setIsOpen(false);
    },
    [app]
  );

  const handleOpen = () => {
    setIsOpen(true);
  };

  const sizesData = Object.entries(sizes) as Array<[SizeStyle, string]>;

  const renderedSwatches = sizesData.map(([key, value]) => {
    return (
      <Flex
        mx={1}
        my={1}
        key={key}
        width="1.5rem"
        height="1.5rem"
        cursor="pointer"
        onClick={() => handleSizePick(key)}
        align="center"
        justify="center"
        border="1px"
        borderColor="whiteAlpha.400"
        background="whiteAlpha.200"
        padding="1rem">
        {value}
      </Flex>
    );
  });

  return (
    <Popover placement="right" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <PopoverTrigger>
        <Flex
          width="2rem"
          height="2rem"
          cursor="pointer"
          background="black"
          align="center"
          justifyContent="center"
          border="1px"
          borderColor="whiteAlpha.400"
          onClick={handleOpen}>
          {
            // @ts-ignore
            sizes[currentStyle.size].slice(0, 1).toUpperCase()
          }
        </Flex>
      </PopoverTrigger>
      <PopoverContent width={`${sizesData.length * 3}rem`}>
        <PopoverArrow />
        <PopoverBody backgroundColor="black">
          <Flex my={-1} mx={-1}>
            {renderedSwatches}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default DrawingControlsSizeSelector;
