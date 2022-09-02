import { Pagination } from 'react-bootstrap';
import { WhiteboardPaginationProps } from './types';

const WhiteboardPagination: React.FC<WhiteboardPaginationProps> = ({
  whiteboardPageNumber,
  numberOfWhiteboards,
  onPageNumberClick,
}: WhiteboardPaginationProps) => {
  const whiteboardPerPage = 12;
  const items = [];

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

export default WhiteboardPagination;
