import { Tldraw, useFileSystem } from '@krapi0314/tldraw';
import { useEffect, useState } from 'react';
import useMultiplayerState from './useMultiplayerState';
import useMultiplayerAssets from './useMultiplayerAssets';

const Whiteboard = () => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paramId = params.get('id');

    if (typeof paramId === 'string') {
      setId(paramId);
    }
  }, []);

  const fileSystemEvents = useFileSystem();
  const { ...events } = useMultiplayerState(id ? id : 'default', '');
  const { ...assetEvents } = useMultiplayerAssets();

  return (
    <div>
      <Tldraw autofocus disableAssets={false} showPages={false} {...assetEvents} {...fileSystemEvents} {...events} />
    </div>
  );
};

export { Whiteboard };
