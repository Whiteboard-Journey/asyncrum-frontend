import { VideoPlayer } from 'components/VideoPlayer';
import { useMoment } from './hooks';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import { DailyStandup } from './types';

type Props = {
  dailyStandup: DailyStandup;
  onClose: () => void;
  isOpen: boolean;
};

const DailyStandupModal = ({ dailyStandup, onClose, isOpen }: Props) => {
  const { getTimeFromNow } = useMoment();

  return (
    <Modal onClose={onClose} size="full" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{dailyStandup.author + ' - ' + getTimeFromNow(dailyStandup.createdDate)}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VideoPlayer id={dailyStandup.screenRecordId} cam={dailyStandup.camRecordFileUrl} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DailyStandupModal;
