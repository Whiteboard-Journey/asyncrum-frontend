// @flow
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../components/PageTitle';

// images
import small1 from '../../assets/images/small/small-1.jpg';
import small2 from '../../assets/images/small/small-2.jpg';
import small3 from '../../assets/images/small/small-3.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';

// Timeline component
const Timeline = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Pages', path: '/pages/timeline' },
                    { label: 'Timeline', path: '/pages/timeline', active: true },
                ]}
                title={'Timeline'}
            />

            <Row className="justify-content-center">
                <Col>
                    <div className="timeline">
                        <div className="timeline-show mb-3 text-center">
                            <h5 className="m-0 time-show-name">Today</h5>
                        </div>

                        <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">Completed UX design project for our client</h4>
                                    <p className="text-muted">
                                        <small>22 July, 2019</small>
                                    </p>
                                    <p>
                                        Dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad
                                        debitis unde?{' '}
                                    </p>

                                    <Link to="#" className="btn btn-sm btn-light me-1">
                                        <span role="img" aria-label="thumbs-up">
                                            👍
                                        </span>{' '}
                                        17
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-light me-1">
                                        <span role="img" aria-label="heart">
                                            ❤️
                                        </span>{' '}
                                        89
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-lg-item">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">
                                        Yay! We are celebrating our first admin release.
                                    </h4>
                                    <p className="text-muted">
                                        <small>22 July, 2019</small>
                                    </p>
                                    <p>
                                        Consectetur adipisicing elit. Iusto, optio, dolorum{' '}
                                        <Link to="#">John deon</Link> provident rerum aut hic quasi placeat iure tempora
                                        laudantium{' '}
                                    </p>

                                    <Link to="#" className="btn btn-sm btn-light">
                                        <span role="img" aria-label="celebration">
                                            🎉
                                        </span>{' '}
                                        148
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-show my-3 text-center">
                            <h5 className="m-0 time-show-name">Yesterday</h5>
                        </div>

                        <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">We released new version of our theme Ubold.</h4>
                                    <p className="text-muted">
                                        <small>21 July, 2019</small>
                                    </p>
                                    <p>3 new photo Uploaded on facebook fan page</p>

                                    <div className="timeline-album mb-3">
                                        <Link to="#">
                                            <img alt="" src={small1} />
                                        </Link>
                                        <Link to="#">
                                            <img alt="" src={small2} />
                                        </Link>
                                        <Link to="#">
                                            <img alt="" src={small3} />
                                        </Link>
                                    </div>

                                    <Link to="#" className="btn btn-sm btn-light">
                                        <span role="img" aria-label="cup">
                                            🏆
                                        </span>{' '}
                                        94
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-lg-item">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">We have archieved 25k sales in our themes.</h4>
                                    <p className="text-muted">
                                        <small>21 July, 2019</small>
                                    </p>
                                    <p>
                                        Outdoor visit at California State Route 85 with John Boltana & Harry Piterson
                                        regarding to setup a new show room.
                                    </p>

                                    <Link to="#" className="btn btn-sm btn-light me-1">
                                        <span role="img" aria-label="thumbs-up">
                                            👍
                                        </span>{' '}
                                        1.4k
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-light me-1">
                                        <span role="img" aria-label="celebration">
                                            🎉
                                        </span>{' '}
                                        2k
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">Conference call with UX team</h4>
                                    <p className="text-muted">
                                        <small>21 July, 2019</small>
                                    </p>
                                    <p>
                                        Jonatha Smith added new milestone{' '}
                                        <span>
                                            <Link to="#">Pathek</Link>
                                        </span>
                                        Lorem ipsum dolor sit amet consiquest dio
                                    </p>

                                    <Link to="#" className="btn btn-sm btn-light">
                                        <span role="img" aria-label="heart">
                                            ❤️
                                        </span>{' '}
                                        89
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-show my-3 text-center">
                            <h5 className="m-0 time-show-name">2018</h5>
                        </div>

                        <div className="timeline-lg-item">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">Join new team member Alex Smith</h4>
                                    <p className="text-muted">
                                        <small>10 December, 2018</small>
                                    </p>
                                    <p>
                                        Alex Smith is a Senior Software (Full Stack) engineer with a deep passion for
                                        building usable, functional & pretty web applications.{' '}
                                    </p>
                                    <div className="d-flex">
                                        <img src={avatar3} alt="Arya S" className="rounded-circle me-2" height="24" />
                                        <div>
                                            <h5 className="mt-1 font-14 mb-0">
                                                Alex Smith <small>- Senior Software (Full Stack)</small>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-lg-item timeline-item-left">
                            <div className="timeline-desk">
                                <div className="timeline-box">
                                    <span className="arrow-alt"></span>
                                    <span className="timeline-icon">
                                        <i className="mdi mdi-adjust"></i>
                                    </span>
                                    <h4 className="mt-0 mb-1 font-16">
                                        First release of Hyper admin dashboard template
                                    </h4>
                                    <p className="text-muted">
                                        <small>16 July, 2018</small>
                                    </p>
                                    <p>
                                        Outdoor visit at California State Route 85 with John Boltana & Harry Piterson
                                        regarding to setup a new show room.
                                    </p>

                                    <Link to="#" className="btn btn-sm btn-light me-1">
                                        <span role="img" aria-label="celebration">
                                            🎉
                                        </span>{' '}
                                        10k
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-light me-1">
                                        <span role="img" aria-label="thumbs-up">
                                            👍
                                        </span>{' '}
                                        3.2k
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-light me-1">
                                        <span role="img" aria-label="heart">
                                            ❤️
                                        </span>{' '}
                                        7.1k
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Timeline;
