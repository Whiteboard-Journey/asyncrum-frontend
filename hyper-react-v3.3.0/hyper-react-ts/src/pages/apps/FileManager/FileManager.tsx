import { Row, Col, Card } from 'react-bootstrap';
import { PageTitle } from 'components';
import LeftPanel from './LeftPanel';
import QuickAccess from './QuickAccess';
import Recent from './Recent';
import { quickAccessFiles, recentFiles } from './data';

const FileManager = () => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/file' },
                    { label: 'File Manager', path: '/apps/file', active: true },
                ]}
                title={'File Manager'}
            />
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="page-aside-left">
                                <LeftPanel />
                            </div>

                            <div className="page-aside-right">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="app-search">
                                        <form>
                                            <div className="mb-2 position-relative">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Search files..."
                                                />
                                                <span className="mdi mdi-magnify search-icon"></span>
                                            </div>
                                        </form>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-sm btn-light">
                                            <i className="mdi mdi-format-list-bulleted"></i>
                                        </button>
                                        <button type="submit" className="btn btn-sm">
                                            <i className="mdi mdi-view-grid"></i>
                                        </button>
                                        <button type="submit" className="btn btn-sm">
                                            <i className="mdi mdi-information-outline"></i>
                                        </button>
                                    </div>
                                </div>

                                <QuickAccess quickAccessFiles={quickAccessFiles} />

                                <Recent recentFiles={recentFiles} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export { FileManager };
