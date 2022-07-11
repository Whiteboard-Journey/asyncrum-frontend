// @flow
import React from 'react';
import { Row, Col, Card, ProgressBar } from 'react-bootstrap';

// components
import PageTitle from '../../components/PageTitle';

const Basic = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Examples</h4>
                <p className="text-muted font-14">
                    A progressBar bar can be used to show a user how far along he/she is in a process.
                </p>

                <ProgressBar />
                <ProgressBar now="25" className="mt-2" />
                <ProgressBar now={50} className="mt-2" />
                <ProgressBar now={75} className="mt-2" />
                <ProgressBar now="100" className="mt-2" />
            </Card.Body>
        </Card>
    );
};

const WithLabels = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Labels</h4>
                <p className="text-muted font-14">
                    Add a <code>label</code> prop to show a visible percentage. For low percentages, consider adding a
                    min-width to ensure the label's text is fully visible.
                </p>

                <ProgressBar now={25} label={`25%`} />
            </Card.Body>
        </Card>
    );
};

const ScreenreaderOnlyLabel = () => {
    const now = 60;
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Screenreader only label</h4>
                <p className="text-muted font-14">
                    Add a <code>visuallyHidden</code> prop to hide the label visually.
                </p>

                <ProgressBar now={now} label={`${now}%`} visuallyHidden />
            </Card.Body>
        </Card>
    );
};

const ContextualAlternatives = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Contextual alternatives</h4>
                <p className="text-muted font-14">
                    Progress bars use some of the same button and alert classes for consistent styles.
                </p>

                <ProgressBar now={25} className="mt-2" variant="success" />
                <ProgressBar now={50} className="mt-2" variant="info" />
                <ProgressBar now={75} className="mt-2" variant="warning" />
                <ProgressBar now={100} className="mt-2" variant="danger" />
                <ProgressBar now={65} className="mt-2" variant="dark" />
                <ProgressBar now={50} className="mt-2" variant="secondary" />
            </Card.Body>
        </Card>
    );
};

const Height = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Height</h4>
                <p className="text-muted font-14">
                    We only set a <code>height</code> value on the <code>ProgressBar</code>, so if you change that value
                    the inner <code>.progress-bar</code> will automatically resize accordingly. Use{' '}
                    <code>.progress-sm</code>,<code>.progress-md</code>,<code>.progress-lg</code>,
                    <code>.progress-xl</code> classes.
                </p>

                <ProgressBar now="25" variant="danger" style={{ height: 1 }} />
                <ProgressBar now="25" className="mt-2" style={{ height: 3 }} />
                <ProgressBar now={25} className="mt-2 progress-sm" variant="success" />
                <ProgressBar now={50} className="mt-2 progress-md" variant="info" />
                <ProgressBar now="75" className="mt-2 progress-lg" variant="warning" />
                <ProgressBar now="38" className="mt-2 progress-xl" variant="success" />
            </Card.Body>
        </Card>
    );
};

const Striped = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Striped</h4>
                <p className="text-muted font-14">
                    Add <code>striped</code> to any <code>ProgressBar</code> to apply a stripe via CSS gradient over the
                    progressBar bar’s background color.
                </p>

                <ProgressBar now={10} striped />
                <ProgressBar now="25" className="mt-2" variant="success" striped />
                <ProgressBar now={50} className="mt-2" variant="info" striped />
                <ProgressBar now={75} className="mt-2" variant="warning" striped />
                <ProgressBar now="100" className="mt-2" variant="danger" striped />
            </Card.Body>
        </Card>
    );
};

const Animated = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Animated stripes</h4>
                <p className="text-muted font-14">
                    The striped gradient can also be animated. Add <code>animated</code> to <code>ProgressBar</code> to
                    animate the stripes right to left via CSS3 animations.
                </p>

                <ProgressBar now={45} variant="primary" animated></ProgressBar>
            </Card.Body>
        </Card>
    );
};

const Stacked = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Stacked</h4>
                <p className="text-muted font-14">
                    Nest <code>&lt;ProgressBar /&gt;</code>s to stack them.
                </p>
                <ProgressBar>
                    <ProgressBar striped variant="success" now={35} key={1} />
                    <ProgressBar variant="warning" now={20} key={2} />
                    <ProgressBar striped variant="danger" now={10} key={3} />
                </ProgressBar>
            </Card.Body>
        </Card>
    );
};

const ProgressBarExamples = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Base UI', path: '/ui/progressBar' },
                    { label: 'ProgressBar', path: '/ui/progressBar', active: true },
                ]}
                title={'ProgressBar'}
            />

            <Row>
                <Col xl={6}>
                    <Basic />
                    <ScreenreaderOnlyLabel />
                    <Height />
                    <Animated />
                </Col>
                <Col xl={6}>
                    <WithLabels />
                    <ContextualAlternatives />
                    <Striped />
                    <Stacked />
                </Col>
            </Row>
        </>
    );
};

export default ProgressBarExamples;
