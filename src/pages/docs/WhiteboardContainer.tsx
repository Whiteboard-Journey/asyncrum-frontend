import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Whiteboard } from './types';
import WhiteboardCard from './WhiteboardCard';
import CreateWhiteboardButton from './CreateWhiteboardButton';
import WhiteboardPagination from './WhiteboardPagination';
import { useWhiteboard } from './hooks';

const WhiteboardContainer = () => {
  const {
    whiteboards,
    whiteboardLoading,
    whiteboardPageNumber,
    numberOfWhiteboards,
    onPageNumberClick,
    onDeleteWhiteboard,
    onEditWhiteboard,
  } = useWhiteboard();

  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Whiteboards</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
      <Row className="mb-4">
        <Col sm={4}>
          <CreateWhiteboardButton />
        </Col>
      </Row>
      {!whiteboardLoading && (
        <>
          <Row>
            {whiteboards.map((whiteboard: Whiteboard) => {
              return (
                <Col md={6} xxl={3} key={'wb-' + whiteboard.id}>
                  <WhiteboardCard
                    whiteboard={whiteboard}
                    onEditWhiteboard={onEditWhiteboard}
                    onDeleteWhiteboard={onDeleteWhiteboard}
                  />
                </Col>
              );
            })}
          </Row>
          {numberOfWhiteboards > 12 && (
            <Row>
              <Col className="d-flex">
                <WhiteboardPagination
                  whiteboardPageNumber={whiteboardPageNumber}
                  numberOfWhiteboards={numberOfWhiteboards}
                  onPageNumberClick={onPageNumberClick}
                />
              </Col>
            </Row>
          )}
        </>
      )}
    </>
  );
};
export default WhiteboardContainer;
