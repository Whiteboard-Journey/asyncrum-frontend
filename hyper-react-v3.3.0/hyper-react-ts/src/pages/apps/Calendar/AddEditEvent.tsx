import { Modal, Row, Col, Button } from 'react-bootstrap';
import { EventInput } from '@fullcalendar/react';
import { FormInput } from 'components';
import { Event } from './types';
import { useAddEditEvent } from './hooks';

type AddEditEventProps = {
    isOpen: boolean;
    onClose: () => void;
    isEditable: boolean;
    eventData: EventInput;
    onRemoveEvent: () => void;
    onUpdateEvent: (value: Event) => void;
    onAddEvent: (value: Event) => void;
};

const AddEditEvent = ({
    isOpen,
    onClose,
    isEditable,
    eventData,
    onRemoveEvent,
    onUpdateEvent,
    onAddEvent,
}: AddEditEventProps) => {
    const { handleSubmit, register, control, errors, onSubmitEvent } = useAddEditEvent(
        eventData,
        isEditable,
        onUpdateEvent,
        onAddEvent
    );

    return (
        <Modal show={isOpen} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Header className="pb-2 px-4 border-bottom-0" closeButton>
                <Modal.Title id="modal-title">
                    <h5> {isEditable ? 'Edit Event' : 'Add New Event'} </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4 pb-4 pt-0">
                <form noValidate name="chat-form" id="chat-form" onSubmit={handleSubmit(onSubmitEvent)}>
                    <Row>
                        <Col sm={12}>
                            <FormInput
                                type="text"
                                label="Event Name"
                                name="title"
                                placeholder="Insert Event Name"
                                containerClass={'mb-3'}
                                register={register}
                                key="title"
                                errors={errors}
                                control={control}
                            />
                        </Col>
                        <Col sm={12}>
                            <FormInput
                                type="select"
                                label="Category"
                                name="className"
                                containerClass={'mb-3'}
                                register={register}
                                key="className"
                                errors={errors}
                                control={control}
                            >
                                <option value="bg-danger">Danger</option>
                                <option value="bg-success">Success</option>
                                <option value="bg-primary">Primary</option>
                                <option value="bg-info">Info</option>
                                <option value="bg-dark">Dark</option>
                                <option value="bg-warning">Warning</option>
                            </FormInput>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={4}>
                            {isEditable ? (
                                <Button variant="danger" onClick={onRemoveEvent}>
                                    Delete
                                </Button>
                            ) : null}
                        </Col>
                        <Col xs={8} className="text-end">
                            <Button className="btn btn-light me-1" onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="success" type="submit" className="btn btn-success">
                                Save
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Modal.Body>
        </Modal>
    );
};

export default AddEditEvent;
