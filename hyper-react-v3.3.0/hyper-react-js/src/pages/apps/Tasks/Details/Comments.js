// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// images
import avatar3 from '../../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../../assets/images/users/avatar-5.jpg';

const Comments = (): React$Element<any> => {
    return (
        <Card>
            <Card.Header>
                <h4 className="my-1">Comments (51)</h4>
            </Card.Header>
            <Card.Body>
                <div className="d-flex">
                    <img className="me-2 rounded-circle" src={avatar3} alt="" height="32" />
                    <div className="w-100">
                        <h5 className="mt-0">
                            Jeremy Tomlinson <small className="text-muted float-end">5 hours ago</small>
                        </h5>
                        Nice work, makes me think of The Money Pit.
                        <br />
                        <Link to="#" className="text-muted font-13 d-inline-block mt-2">
                            <i className="mdi mdi-reply"></i> Reply
                        </Link>
                        <div className="d-flex mt-3">
                            <Link className="pe-2" to="#">
                                <img src={avatar4} className="rounded-circle" alt="" height="32" />
                            </Link>
                            <div className="w-100">
                                <h5 className="mt-0">
                                    Thelma Fridley <small className="text-muted float-end">3 hours ago</small>
                                </h5>
                                i'm in the middle of a timelapse animation myself! (Very different though.) Awesome
                                stuff.
                                <br />
                                <Link to="#" className="text-muted font-13 d-inline-block mt-2">
                                    <i className="mdi mdi-reply"></i> Reply
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex mt-3">
                    <img className="me-2 rounded-circle" src={avatar5} alt="" height="32" />
                    <div className="w-100">
                        <h5 className="mt-0">
                            Kevin Martinez <small className="text-muted float-end">1 day ago</small>
                        </h5>
                        It would be very nice to have.
                        <br />
                        <Link to="#" className="text-muted font-13 d-inline-block mt-2">
                            <i className="mdi mdi-reply"></i> Reply
                        </Link>
                    </div>
                </div>

                <div className="text-center mt-2">
                    <Link to="#" className="text-danger">
                        <i className="mdi mdi-spin mdi-loading me-1"></i> Load more
                    </Link>
                </div>

                <div className="border rounded mt-4">
                    <form className="comment-area-box">
                        <textarea
                            rows="3"
                            className="form-control border-0 resize-none"
                            placeholder="Your comment..."
                        />
                        <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                            <div>
                                <Link to="#" className="btn btn-sm px-1 btn-light">
                                    <i className="uil uil-cloud-upload"></i>
                                </Link>
                                <Link to="#" className="btn btn-sm px-1 btn-light">
                                    <i className="uil uil-at"></i>
                                </Link>
                            </div>
                            <button type="submit" className="btn btn-sm btn-success">
                                <i className="uil uil-message me-1"></i>Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Comments;
