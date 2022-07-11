import { Row, Col, Button, Modal } from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { VerticalForm, FormInput } from 'components';
import { useComposeMail } from './hooks';

type ComposeMailProps = {
    isModalOpen: boolean;
    toggleComposeModal: () => void;
};

const ComposeMail = ({ isModalOpen, toggleComposeModal }: ComposeMailProps) => {
    const { editorState, schemaResolver, handleEmailSave, onEditorStateChange } = useComposeMail(toggleComposeModal);

    return (
        <Modal show={isModalOpen} onHide={toggleComposeModal}>
            <Modal.Header closeButton onHide={toggleComposeModal} className="modal-colored-header bg-primary">
                <Modal.Title className="m-0">New Message</Modal.Title>
            </Modal.Header>
            <div className="p-1">
                <Modal.Body className="px-3 pt-3 pb-0">
                    <VerticalForm onSubmit={handleEmailSave} resolver={schemaResolver}>
                        <FormInput
                            label="To"
                            type="email"
                            name="to"
                            placeholder="example@email.com"
                            containerClass={'mb-2'}
                        />
                        <FormInput
                            label="Subject"
                            type="text"
                            name="subject"
                            placeholder="Your subject"
                            containerClass={'mb-2'}
                        />
                        <Row className="mb-3">
                            <Col>
                                <label className="form-label">Message</label>
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={onEditorStateChange}
                                    toolbarClassName="draft-toolbar"
                                    wrapperClassName="react-draft-wrapper border border-1 rounded-1"
                                    editorStyle={{ minHeight: '150px' }}
                                    toolbar={{
                                        options: ['inline', 'fontSize', 'fontFamily', 'list', 'textAlign', 'link'],
                                        inline: { inDropdown: true },
                                        list: { inDropdown: true },
                                        textAlign: { inDropdown: true },
                                        link: { inDropdown: true },
                                    }}
                                />
                            </Col>
                        </Row>
                        <div className="pb-3">
                            <Button variant="primary" type="submit" className="me-1">
                                <i className="mdi mdi-send me-1"></i> Send Message
                            </Button>
                            <Button variant="light" onClick={toggleComposeModal}>
                                Cancel
                            </Button>
                        </div>
                    </VerticalForm>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default ComposeMail;
