import { Row, Col, Card } from 'react-bootstrap';
import LeftPanel from './LeftPanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PersonalInfoForm from './PersonalInfoForm';
import PersonalImageForm from './PersonalImageForm';

const PersonalSettings = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="page-title-box">
            <h4 className="page-title">Settings</h4>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <div className="page-aside-left">
                <LeftPanel selected="personal" />
              </div>

              <div className="page-aside-right">
                <h4 className="mb-3">Change Personal Information</h4>
                <Row>
                  <Col md={7}>
                    <PersonalInfoForm />
                  </Col>
                  <Col md={{ span: 3, offset: 2 }}>
                    <PersonalImageForm />
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default PersonalSettings;
