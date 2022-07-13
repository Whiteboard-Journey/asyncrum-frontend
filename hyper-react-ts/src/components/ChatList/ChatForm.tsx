import { Row, Col } from 'react-bootstrap';
import { FormInput } from '../form';
import { useChatForm } from './hooks';

const ChatForm = ({ onNewMessagesPosted }: { onNewMessagesPosted: (message: string) => void }) => {
    const { register, control, errors, handleSubmit, handleValidMessageSubmit } = useChatForm();

    return (
        <form
            name="chat-form"
            id="chat-form"
            onSubmit={handleSubmit((value) => handleValidMessageSubmit(value, onNewMessagesPosted))}
            className="needs-validation m-3"
        >
            <Row>
                <Col>
                    <FormInput
                        type="text"
                        name="newMessage"
                        className="form-control chat-input"
                        placeholder="Enter your text"
                        register={register}
                        key="newMessage"
                        errors={errors}
                        control={control}
                    />
                </Col>
                <Col className="col-auto">
                    <button type="submit" className="btn btn-danger chat-send waves-effect waves-light">
                        Send
                    </button>
                </Col>
            </Row>
        </form>
    );
};

export default ChatForm;
