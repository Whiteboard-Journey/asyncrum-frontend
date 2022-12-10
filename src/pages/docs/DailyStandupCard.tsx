import { Suspense, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useDailyStandup, useMoment } from './hooks';
import { DailyStandup } from './types';
import { useDisclosure } from '@chakra-ui/react';
import { getLazyComponentWithPreload } from 'hooks/useLazyComponent';

const [LazyDailyStandupModal, preload] = getLazyComponentWithPreload(() => import('./DailyStandupModal'));

const DailyStandupCard = ({ dailyStandup }: { dailyStandup: DailyStandup }) => {
  const { getTimeFromNow } = useMoment();
  const { onViewDailyStandups } = useDailyStandup();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    preload();
  }, []);

  return (
    <Card className="d-block me-3">
      <Card.Body
        onClick={() => {
          onOpen();
          onViewDailyStandups(dailyStandup);
        }}
        style={{ cursor: 'pointer' }}>
        <div className={(dailyStandup.seen ? 'opacity-25' : '') + ' text-center'}>
          <img
            src={dailyStandup.profileImageUrl}
            className="rounded-circle avatar-lg"
            alt={dailyStandup.author}
            referrerPolicy="no-referrer"
          />
        </div>
        <h4 className={(dailyStandup.seen ? 'text-light' : '') + ' text-center font-weight-bold mt-2'}>
          {dailyStandup.author}
        </h4>
        <p className={(dailyStandup.seen ? 'text-light' : 'text-muted') + ' text-center font-12 mb-1'}>
          {getTimeFromNow(dailyStandup.createdDate)}
        </p>
        <Suspense fallback={null}>
          <LazyDailyStandupModal dailyStandup={dailyStandup} onClose={onClose} isOpen={isOpen} />
        </Suspense>
      </Card.Body>
    </Card>
  );
};

export default DailyStandupCard;
