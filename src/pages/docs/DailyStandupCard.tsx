import { VideoPlayer } from 'components/VideoPlayer';
import { Card } from 'react-bootstrap';
import { useDailyStandup, useMoment } from './hooks';
import { DailyStandup } from './types';
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const DailyStandupCard = ({ dailyStandup }: { dailyStandup: DailyStandup }) => {
  const { getTimeFromNow } = useMoment();
  const { onViewDailyStandups } = useDailyStandup();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Modal onClose={onClose} size="full" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{dailyStandup.author + ' - ' + getTimeFromNow(dailyStandup.createdDate)}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VideoPlayer id={dailyStandup.screenRecordId} />
            </ModalBody>
          </ModalContent>
        </Modal>
        {/* <Modal
          backdrop="static"
          show={isViewOpen}
          onHide={toggleView}
          dialogClassName={className}
          size={size}
          scrollable={scroll}>
          <Modal.Header onHide={toggleView} closeButton>
            <h4 className="modal-title">{dailyStandup.author + ' - ' + getTimeFromNow(dailyStandup.createdDate)}</h4>
          </Modal.Header>
          <Modal.Body>
            <video
              src={dailyStandup.camRecordFileUrl}
              controls
              autoPlay
              playsInline
              width={cam_w}
              height={cam_h}
              style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            />
            <video
              src={dailyStandup.screenRecordFileUrl}
              controls
              autoPlay
              playsInline
              width={screen_w}
              height={screen_h}
              style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' }}
            />
          </Modal.Body>
        </Modal> */}
      </Card.Body>
    </Card>
  );
};

export default DailyStandupCard;
