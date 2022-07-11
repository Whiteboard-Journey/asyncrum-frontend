import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

type LeftSideProps = {
    totalUnreadEmails: number;
    showAllEmails?: () => void;
    showStarredEmails?: () => void;
    toggleComposeModal: () => void;
};
const LeftSide = ({ totalUnreadEmails, showAllEmails, showStarredEmails, toggleComposeModal }: LeftSideProps) => {
    return (
        <>
            <div className="d-grid">
                <button type="button" className="btn btn-danger" onClick={toggleComposeModal}>
                    Compose
                </button>
            </div>

            <div className="email-menu-list mt-3">
                <Link to="/apps/email/inbox" className="text-danger fw-bold" onClick={showAllEmails}>
                    <i className="dripicons-inbox me-2"></i>Inbox
                    <span className="badge badge-danger-lighten float-end ms-2">{totalUnreadEmails}</span>
                </Link>
                <Link to="/apps/email/inbox" onClick={showStarredEmails}>
                    <i className="dripicons-star me-2"></i>Starred
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-clock me-2"></i>Snoozed
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-document me-2"></i>Draft
                    <span className="badge badge-info-lighten float-end ms-2">32</span>
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-exit me-2"></i>Sent Mail
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-trash me-2"></i>Trash
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-tag me-2"></i>Important
                </Link>
                <Link to="/apps/email/inbox">
                    <i className="dripicons-warning me-2"></i>Spam
                </Link>
            </div>

            <div className="mt-4">
                <h6 className="text-uppercase">Labels</h6>
                <div className="email-menu-list labels-list mt-2">
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-info me-2"></i>Updates
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-warning me-2"></i>Friends
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-success me-2"></i>Family
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-primary me-2"></i>Social
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-danger me-2"></i>Important
                    </Link>
                    <Link to="/apps/email/inbox">
                        <i className="mdi mdi-circle font-13 text-secondary me-2"></i>
                        Promotions
                    </Link>
                </div>
            </div>

            <div className="mt-5">
                <h4>
                    <span className="badge rounded-pill p-1 px-2 badge-secondary-lighten">FREE</span>
                </h4>
                <h6 className="text-uppercase mt-3">Storage</h6>
                <ProgressBar variant="success" now={46} className="my-2 progress-sm" />
                <p className="text-muted font-13 mb-0">7.02 GB (46%) of 15 GB used</p>
            </div>
        </>
    );
};

export default LeftSide;
