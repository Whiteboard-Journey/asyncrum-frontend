// @flow
import React, { useState } from 'react';
import { Card, Col, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// component
import ChatList from '../../../../components/ChatList';

// images
import clientImg from '../../../../assets/images/users/avatar-4.jpg';

// dummy data
import { chatMessages } from './data';
import CardTitle from '../../../../components/CardTitle';

type ClientWidgetItems = {
    avatar: string,
    name: string,
    companyName: string,
    date: string,
};

type ClientWidgetProps = {
    clientDetails: Array<ClientWidgetItems>,
};

const ClientWidget = ({ clientDetails }: ClientWidgetProps): React$Element<React$FragmentType> => {
    const [modal, setModal] = useState(false);

    // Show/hide the modal
    const toggle = () => {
        setModal(!modal);
    };

    return (
        <>
            {(clientDetails || []).map((client, i) => {
                return (
                    <Col key={i}>
                        <Card>
                            <Card.Body>
                                <CardTitle
                                    containerClass="d-flex"
                                    title={
                                        <>
                                            <div className="flex-shrink-0">
                                                <img src={client.avatar} alt="" className="rounded-circle avatar-sm" />
                                            </div>
                                            <div className="flex-grow-1 ms-2">
                                                <Link to="#" className="text-secondary">
                                                    <h5 className="my-1">{client.name}</h5>
                                                </Link>
                                                <p className="text-muted mb-0">{client.companyName}</p>
                                            </div>
                                        </>
                                    }
                                    icon="mdi mdi-dots-horizontal"
                                    menuItems={[
                                        { label: 'Visite Profile', icon: 'mdi mdi-account' },
                                        { label: 'Block', icon: 'mdi mdi-block-helper' },
                                        {
                                            label: 'Remove',
                                            icon: 'mdi mdi-trash-can-outline',
                                            variant: 'text-danger',
                                            hasDivider: true,
                                        },
                                    ]}
                                />
                            </Card.Body>
                            <div className="d-flex justify-content-between align-items-center card-body py-2 border-top border-light">
                                <h5 className="my-0 font-13 fw-semibold text-muted">
                                    <i className="mdi mdi-calendar me-1"></i>
                                    Jan 05 2022
                                </h5>
                                <Link to="#" className="text-muted" onClick={toggle}>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Chat</Tooltip>}>
                                        <i className="uil uil-comment-alt-lines font-18"></i>
                                    </OverlayTrigger>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                );
            })}

            <Modal show={modal} onHide={toggle}>
                <Modal.Header onHide={toggle} closeButton>
                    <h5 className="modal-title" id="exampleModalLabel">
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img className="rounded-circle" src={clientImg} height="40" alt="AvtarImage" />
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <Link to="#" className="text-secondary">
                                    Kevin Snowden
                                </Link>
                                <p className="text-muted fw-normal font-14 mb-0">
                                    <i className="mdi mdi-circle text-success font-12 me-1"></i>
                                    Online
                                </p>
                            </div>
                        </div>
                    </h5>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <ChatList messages={chatMessages}></ChatList>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ClientWidget;
