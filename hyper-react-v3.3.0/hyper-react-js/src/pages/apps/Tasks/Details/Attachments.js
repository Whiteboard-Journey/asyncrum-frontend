// @flow
import React, { useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import FileUploader from '../../../../components/FileUploader';

// images
import projectImg1 from '../../../../assets/images/projects/project-1.jpg';

type AttachmentsState = {
    attachments?: any,
};

const Attachments = (state: AttachmentsState): React$Element<React$FragmentType> => {
    const [, setAttachments] = useState();

    /*
     * handle file upload
     */
    const handleAttachments = (files) => {
        setAttachments(files);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h5 className="card-title mb-3">Attachments</h5>
                    <FileUploader
                        onFileUpload={(files) => {
                            handleAttachments(files);
                        }}
                    />

                    {/* Files */}
                    <Card className="my-1 shadow-none border">
                        <div className="p-2">
                            <Row className="align-items-center">
                                <div className="col-auto">
                                    <div className="avatar-sm">
                                        <span className="avatar-title rounded">.ZIP</span>
                                    </div>
                                </div>
                                <div className="col ps-0">
                                    <Link to="#" className="text-muted fw-bold">
                                        Hyper-admin-design.zip
                                    </Link>
                                    <p className="mb-0">2.3 MB</p>
                                </div>
                                <div className="col-auto">
                                    <Link to="#" className="btn btn-link btn-lg text-muted">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                </div>
                            </Row>
                        </div>
                    </Card>

                    <Card className="mb-1 shadow-none border">
                        <div className="p-2">
                            <Row className="align-items-center">
                                <div className="col-auto">
                                    <img src={projectImg1} className="avatar-sm rounded" alt="" />
                                </div>
                                <div className="col ps-0">
                                    <Link to="#" className="text-muted fw-bold">
                                        Dashboard-design.jpg
                                    </Link>
                                    <p className="mb-0">3.5 MB</p>
                                </div>
                                <div className="col-auto">
                                    <Link to="#" className="btn btn-link btn-lg text-muted">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                </div>
                            </Row>
                        </div>
                    </Card>

                    <Card className="mb-0 shadow-none border">
                        <div className="p-2">
                            <Row className="align-items-center">
                                <div className="col-auto">
                                    <div className="avatar-sm">
                                        <span className="avatar-title bg-secondary rounded">.MP4</span>
                                    </div>
                                </div>
                                <div className="col ps-0">
                                    <Link to="#" className="text-muted fw-bold">
                                        Admin-bug-report.mp4
                                    </Link>
                                    <p className="mb-0">7.05 MB</p>
                                </div>
                                <div className="col-auto">
                                    <Link to="#" className="btn btn-link btn-lg text-muted">
                                        <i className="dripicons-download"></i>
                                    </Link>
                                </div>
                            </Row>
                        </div>
                    </Card>
                </Card.Body>
            </Card>
        </>
    );
};

export default Attachments;
