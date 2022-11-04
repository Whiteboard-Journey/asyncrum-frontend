import { Row, Col } from 'react-bootstrap';
import { FormInput } from '../form';
import { useChatForm } from './hooks';
import { CreateCommentRecordButton } from '../';

const ChatForm = () => {
  return (
    <form name="chat-form" id="chat-form" className="needs-validation m-3">
      <Row>
        <CreateCommentRecordButton />
      </Row>
    </form>
  );
};

export default ChatForm;
