/* eslint-disable import/prefer-default-export */

const getRatioDimensions = (displayAspectRatio: string, element: HTMLElement): [number, number] => {
  const [widthSplit, heightSplit] = displayAspectRatio.split(':');
  const width = parseInt(widthSplit, 10);
  const height = parseInt(heightSplit, 10);

  const ratioWidthHeight = width / height;
  const ratioHeightWidth = height / width;

  const containerWidth = element.offsetWidth;
  const containerHeight = element.offsetHeight;

  if (containerHeight * ratioWidthHeight <= containerWidth) {
    return [containerHeight * ratioWidthHeight, containerHeight];
  }

  return [containerWidth, containerWidth * ratioHeightWidth];
};

export default getRatioDimensions;
