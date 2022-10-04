import * as React from 'react';

import { Flex, Box, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow } from '@chakra-ui/react';

import { TldrawApp, ColorStyle } from '@krapi0314/tldraw';
import { Container, Overlay } from 'react-bootstrap';

type PropsType = {
  app: TldrawApp;
};

const colors = {
  [ColorStyle.White]: '#f0f1f3',
  [ColorStyle.LightGray]: '#c6cbd1',
  [ColorStyle.Gray]: '#788492',
  [ColorStyle.Black]: '#1d1d1d',
  [ColorStyle.Green]: '#36b24d',
  [ColorStyle.Cyan]: '#0e98ad',
  [ColorStyle.Blue]: '#1c7ed6',
  [ColorStyle.Indigo]: '#4263eb',
  [ColorStyle.Violet]: '#7746f1',
  [ColorStyle.Red]: '#ff2133',
  [ColorStyle.Orange]: '#ff9433',
  [ColorStyle.Yellow]: '#ffc936',
};

const colorBoxStyles = {
  container: {
    width: '1.5rem',
    height: '1.5rem',
    cursor: 'pointer',
  },
} as const;

export default function DrawingControlsColorSelector({ app }: PropsType) {
  const [isOpen, setIsOpen] = React.useState(false);

  const currentStyle = app.useStore((s) => s.appState.currentStyle);

  const handleColourPick = React.useCallback(
    (color: ColorStyle) => {
      app.style({ color });
      setIsOpen(false);
    },
    [app]
  );

  const handleOpen = () => {
    setIsOpen(true);
  };

  const swatchesData = Object.entries(colors) as Array<[ColorStyle, string]>;

  const renderedSwatches = swatchesData.map(([key, value]) => {
    const style = {
      ...colorBoxStyles.container,
      backgroundColor: value,
    };
    return <Container className="mx-1 my-1 " key={key} style={style} onClick={() => handleColourPick(key)} />;
  });

  return (
    // <>
    //   <Container></Container>
    //   <Overlay target={target.current} show={show} placement="right">
    //     {({ placement, arrowProps, show: _show, popper, ...props }) => (
    //       <div
    //         {...props}
    //         style={{
    //           position: 'absolute',
    //           backgroundColor: 'rgba(255, 100, 100, 0.85)',
    //           padding: '2px 10px',
    //           color: 'white',
    //           borderRadius: 3,
    //           ...props.style,
    //         }}>
    //         Simple tooltip
    //       </div>
    //     )}
    //   </Overlay>
    // </>
    <Popover placement="right" isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <PopoverTrigger>
        <Box
          width="2rem"
          height="2rem"
          // @ts-ignore
          bgColor={colors[currentStyle.color]}
          cursor="pointer"
          onClick={handleOpen}
        />
      </PopoverTrigger>
      <PopoverContent width={`${swatchesData.length * 2}rem`}>
        <PopoverArrow />
        <PopoverBody backgroundColor="black">
          <Flex my={-1} mx={-1}>
            {renderedSwatches}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
