import { Row, Col, Button, ButtonGroup, Pagination } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useToggle } from 'hooks';
import {
  readAllWhiteboard as readAllWhiteboardAPI,
  updateWhiteboard as updateWhiteboardAPI,
  deleteWhiteboard as deleteWhiteboardAPI,
} from 'helpers';
import { Whiteboard } from './types';
import WhiteboardCard from './WhiteboardCard';
import CreateWhiteboardButton from './CreateWhiteboardButton';

const WhiteboardContainer = () => {
  const [whiteboards, setWhiteboards] = useState<Whiteboard[]>([]);
  const [whiteboardLoading, setWhiteboardLoading] = useState<boolean>(true);
  const [whiteboardPageNumber, setWhiteboardPageNumber] = useState<number>(1);
  const [numberOfWhiteboards, setNumberOfWhiteboards] = useState<number>(0);

  const scope = 'team';

  const readAllWhiteboard = async (pageIndex: number) => {
    const whiteboards: Whiteboard[] = [];
    const readAllWhiteboardAPIResponse = await readAllWhiteboardAPI({ scope, pageIndex });
    for (const whiteboard of readAllWhiteboardAPIResponse.data.whiteboards) {
      whiteboards.push({
        id: whiteboard.id,
        title: whiteboard.title,
        description: whiteboard.description,
        createdDate: whiteboard.createdDate,
        lastModifiedDate: whiteboard.lastModifiedDate,
        scope: whiteboard.scope,
        author: whiteboard.author.fullname,
        authorProfileImageUrl: whiteboard.author.profileImageUrl,
        whiteboardFileUrl: whiteboard.whiteboardFileUrl,
      });
    }
    setWhiteboards(whiteboards);
    setNumberOfWhiteboards(readAllWhiteboardAPIResponse.data.size_ALL_PAGE);
    setWhiteboardLoading(false);
  };

  const onEditWhiteboard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = ((event.target as HTMLFormElement).elements as { [key: string]: any })['id'].value;
    const title = ((event.target as HTMLFormElement).elements as { [key: string]: any })['title'].value;
    const description = ((event.target as HTMLFormElement).elements as { [key: string]: any })['description'].value;

    await updateWhiteboardAPI(id, { title, description, scope });
    const pageIndex = whiteboardPageNumber - 1;
    readAllWhiteboard(pageIndex);
  };

  const onDeleteWhiteboard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const id = ((event.target as HTMLFormElement).elements as { [key: string]: any })['id'].value;
    await deleteWhiteboardAPI(id);
    const pageIndex = whiteboardPageNumber - 1;
    readAllWhiteboard(pageIndex);
  };

  useEffect(() => {
    const pageIndex = whiteboardPageNumber - 1;
    readAllWhiteboard(pageIndex);
  }, [whiteboardPageNumber]);

  const WhiteboardPagination = () => {
    const whiteboardPerPage = 12;
    const items = [];

    const onPageNumberClick = (e: React.MouseEvent<HTMLElement>) => {
      setWhiteboardPageNumber(parseInt((e.target as any).innerText));
    };

    for (let number = 1; number <= Math.ceil(numberOfWhiteboards / whiteboardPerPage); number++) {
      items.push(
        <Pagination.Item key={number.toString()} active={number === whiteboardPageNumber} onClick={onPageNumberClick}>
          {number}
        </Pagination.Item>
      );
    }

    return (
      <Pagination className="mx-auto">
        <Pagination.Prev />
        {items}
        <Pagination.Next />
      </Pagination>
    );
  };

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
              <WhiteboardPagination />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default WhiteboardContainer;
