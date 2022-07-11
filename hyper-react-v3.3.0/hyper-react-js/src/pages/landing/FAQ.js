// @flow
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// components
import FAQs from '../../components/FAQs';

type FAQProps = {
    rawFaqs: {
        id: number,
        question: string,
        answer: string,
        titleClass?: string,
        textClass?: string,
    }[],
};

const FAQ = ({ rawFaqs }: FAQProps): React$Element<React$FragmentType> => {
    return (
        <>
            <section className="py-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h1 className="mt-0">
                                    <i className="mdi mdi-frequently-asked-questions"></i>
                                </h1>
                                <h3 className="">Frequently Asked Questions</h3>
                                <p className="text-muted mt-3">
                                    {' '}
                                    Nisi praesentium similique totam odio obcaecati, reprehenderit, dignissimos rem
                                    temporibus ea inventore alias!
                                    <br /> Beatae animi nemo ea tempora, temporibus laborum facilis ut!
                                </p>

                                <button type="button" className="btn btn-success btn-sm mt-2">
                                    <i className="mdi mdi-email-outline me-1"></i> Email us your question
                                </button>
                                <button type="button" className="btn btn-info btn-sm mt-2 ms-1">
                                    <i className="mdi mdi-twitter me-1"></i> Send us a tweet
                                </button>
                            </div>
                        </Col>
                    </Row>

                    {/* question/answer */}
                    <FAQs rawFaqs={rawFaqs} />
                </Container>
            </section>
        </>
    );
};

export default FAQ;
