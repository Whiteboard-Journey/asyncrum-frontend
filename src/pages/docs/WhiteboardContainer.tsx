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
      <Row className="mb-2">
        <Col sm={4}>
          <CreateWhiteboardButton />
        </Col>
        <Col sm={8}>
          <div className="text-sm-end">
            <div className="btn-group mb-3">
              <Button variant="primary">All</Button>
            </div>
            <ButtonGroup className="mb-3 ms-1">
              <Button variant="light">Owned by me</Button>
              <Button variant="light">Not owned by me</Button>
            </ButtonGroup>
          </div>
        </Col>
      </Row>
      {!whiteboardLoading && (
        <>
          <Row>
            {whiteboards.map((whiteboard: Whiteboard, i: number) => {
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
          <Row>
            <Col className="d-flex">
              <WhiteboardPagination
                whiteboardPageNumber={whiteboardPageNumber}
                numberOfWhiteboards={numberOfWhiteboards}
                onPageNumberClick={onPageNumberClick}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default WhiteboardContainer;
