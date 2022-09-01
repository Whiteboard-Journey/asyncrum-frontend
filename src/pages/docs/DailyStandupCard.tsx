import { Card, Modal } from 'react-bootstrap';
import { useModal, useMoment } from './hooks';
import { viewDailyStandup as viewDailyStandupAPI } from 'helpers';

import { DailyStandup } from './types';

const DailyStandupCard = ({ dailyStandup }: { dailyStandup: DailyStandup }) => {
  const cam_w = 320,
    cam_h = 240,
    screen_w = 960,
    screen_h = 540;
  const { isOpen: isViewOpen, size, className, scroll, toggleModal: toggleView, openModalWithClass } = useModal();
  const { getTimeFromNow } = useMoment();

  const onViewDailyStandups = async (id: number[]) => {
    await viewDailyStandupAPI(id[0]);
    await viewDailyStandupAPI(id[1]);
  };

  return (
    <Card className="d-block me-3">
      <Card.Body
        onClick={() => {
          openModalWithClass('modal-full-width');
          onViewDailyStandups(dailyStandup.id);
        }}
        style={{ cursor: 'pointer' }}
      >
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
        <Modal show={isViewOpen} onHide={toggleView} dialogClassName={className} size={size} scrollable={scroll}>
          <Modal.Body>
            <Modal.Header onHide={toggleView} closeButton>
              <h4 className="modal-title">{dailyStandup.author + ' - ' + getTimeFromNow(dailyStandup.createdDate)}</h4>
            </Modal.Header>
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
        </Modal>
      </Card.Body>
    </Card>
  );
};

export default DailyStandupCard;
