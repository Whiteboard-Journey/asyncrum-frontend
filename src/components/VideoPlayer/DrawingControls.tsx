import * as React from 'react';

import { css } from '@emotion/react';

import { Flex, Box, VStack, IconButton, Tooltip } from '@chakra-ui/react';
import { TDShapeType, TDToolType, TldrawApp } from '@krapi0314/tldraw';
import {
  Click as ClickIcon,
  Pencil as PencilIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Rectangle as RectangleIcon,
  Circle as CircleIcon,
  Trash as TrashIcon,
} from 'tabler-icons-react';

import DrawingControlsColorSelector from './DrawingControlsColorSelector';
import DrawingControlsSizeSelector from './DrawingControlsSizeSelector';
import DrawingControlsDashSelector from './DrawingControlsDashSelector';

type PropsType = {
  app: TldrawApp;
};

const selectedStyle = css`
  opacity: 1;
`;

const unSelectedStyle = css`
  opacity: 0.5;
`;

const DrawingControls = ({ app }: PropsType) => {
  const activeTool = app.useStore((s) => s.appState.activeTool);

  const selectTool = React.useCallback(
    (type: TDToolType) => {
      app.selectTool(type);
      app.toggleToolLock();
    },
    [app]
  );

  return (
    <>
      <Box>
        <VStack spacing={4}>
          <Tooltip label="Select" aria-label="Select">
            <IconButton
              icon={<ClickIcon />}
              aria-label="Select"
              css={activeTool === 'select' ? selectedStyle : unSelectedStyle}
              onClick={() => selectTool('select')}
            />
          </Tooltip>
          <Tooltip label="Pencil" aria-label="Pencil">
            <IconButton
              icon={<PencilIcon />}
              aria-label="Pencil"
              css={activeTool === TDShapeType.Draw ? selectedStyle : unSelectedStyle}
              onClick={() => selectTool(TDShapeType.Draw)}
            />
          </Tooltip>
          <Tooltip label="Arrow" aria-label="Arrow">
            <IconButton
              icon={<ArrowUpRightIcon />}
              aria-label="Arrow"
              css={activeTool === TDShapeType.Arrow ? selectedStyle : unSelectedStyle}
              onClick={() => selectTool(TDShapeType.Arrow)}
            />
          </Tooltip>
          <Tooltip label="Rectangle" aria-label="Rectangle">
            <IconButton
              icon={<RectangleIcon />}
              aria-label="Rectangle"
              css={activeTool === TDShapeType.Rectangle ? selectedStyle : unSelectedStyle}
              onClick={() => selectTool(TDShapeType.Rectangle)}
            />
          </Tooltip>
          <Tooltip label="Ellipse" aria-label="Ellipse">
            <IconButton
              icon={<CircleIcon />}
              aria-label="Ellipse"
              css={activeTool === TDShapeType.Ellipse ? selectedStyle : unSelectedStyle}
              onClick={() => selectTool(TDShapeType.Ellipse)}
            />
          </Tooltip>
        </VStack>
      </Box>
      <Flex mt={4} pt={4} borderTop="1px" borderColor="whiteAlpha.300" justify="center">
        <Box>
          <Box>
            <DrawingControlsColorSelector app={app} />
          </Box>
          <Box mt={4}>
            <DrawingControlsSizeSelector app={app} />
          </Box>
          <Box mt={4}>
            <DrawingControlsDashSelector app={app} />
          </Box>
        </Box>
      </Flex>
      <Flex mt={4} pt={4} borderTop="1px" borderColor="whiteAlpha.300" justify="center">
        <Box>
          <IconButton icon={<TrashIcon />} aria-label="Arrow" css={selectedStyle} onClick={() => app.deleteAll()} />
        </Box>
      </Flex>
    </>
  );
};

export default DrawingControls;
