import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewTeamContainer = () => {
  return (
    <div className="containter pt-5">
      <Row className="pt-5">
        <Col>
          <div className="text-center">
            <h3 className="">Start by creating a team!</h3>
            <p className="text-muted mt-3">You can also join another team after receiving invitations.</p>

            <Link to="/settings/create-team">
              <button type="button" className="btn btn-primary btn-sm mt-2">
                <i className="mdi mdi-plus font-18 align-middle me-2"></i>Create Team
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewTeamContainer;
