import { Container, Row, Col } from 'react-bootstrap';
import { LayoutDemo } from './types';

type LayoutsProps = {
    layouts: LayoutDemo[];
};

const Layouts = ({ layouts }: LayoutsProps) => {
    return (
        <section className="py-5 bg-light-lighten border-top border-bottom border-light">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="text-center">
                            <h3>
                                Flexible <span className="text-primary">Layouts</span>
                            </h3>
                            <p className="text-muted mt-2">
                                There are three different layout options available to cater need for any <br /> modern
                                web application.
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-1">
                    {layouts.map((item, index) => {
                        return (
                            <Col lg={4} md={6} key={index.toString()}>
                                <div className="demo-box text-center mt-3">
                                    <img src={item.image} alt="" className="img-fluid shadow-sm rounded" />
                                    <h5 className="mt-3 f-17">{item.layout}</h5>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Layouts;
