// @flow
import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Select from 'react-select';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import MaskedInput from 'react-text-mask';

// components
import PageTitle from '../../components/PageTitle';
import HyperDatepicker from '../../components/Datepicker';

const ReactSelect = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">
                    <a rel="noreferrer" href="https://github.com/JedWatson/react-select" target="_blank">
                        React select
                    </a>
                </h4>
                <p className="mb-1 mt-3 fw-bold text-muted">Single Selection</p>
                <p className="text-muted font-14">React-Select based Select element</p>
                <Select
                    className="react-select"
                    classNamePrefix="react-select"
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}></Select>

                <p className="mb-1 mt-3 fw-bold text-muted">Multiple Selection</p>
                <p className="text-muted font-14">React-Select based Select (Multiple) element</p>
                <Select
                    isMulti={true}
                    options={[
                        { value: 'chocolate', label: 'Chocolate' },
                        { value: 'strawberry', label: 'Strawberry' },
                        { value: 'vanilla', label: 'Vanilla' },
                    ]}
                    className="react-select"
                    classNamePrefix="react-select"></Select>
            </Card.Body>
        </Card>
    );
};

const Typeaheads = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">
                    <a rel="noreferrer" href="http://ericgio.github.io/react-bootstrap-typeahead/" target="_blank">
                        Typeahead
                    </a>
                </h4>
                <p className="mb-1 mt-3 fw-bold text-muted">Single Selection</p>
                <p className="text-muted font-14">Typeahead based Select element</p>
                <Typeahead
                    id="select2"
                    labelKey="label"
                    multiple={false}
                    onChange={setSingleSelections}
                    options={[
                        { id: 1, value: 'chocolate', label: 'Chocolate' },
                        { id: 2, value: 'strawberry', label: 'Strawberry' },
                        { id: 3, value: 'vanilla', label: 'Vanilla' },
                    ]}
                    placeholder="Choose a state..."
                    selected={singleSelections}
                />

                <p className="mb-1 mt-3 fw-bold text-muted">Multiple Selection</p>
                <p className="text-muted font-14">Typeahead based Select (Multiple) element</p>
                <Typeahead
                    id="select3"
                    labelKey="label"
                    multiple
                    onChange={setMultiSelections}
                    options={[
                        { id: 1, value: 'chocolate', label: 'Chocolate' },
                        { id: 2, value: 'strawberry', label: 'Strawberry' },
                        { id: 3, value: 'vanilla', label: 'Vanilla' },
                    ]}
                    placeholder="Choose a state..."
                    selected={multiSelections}
                />
            </Card.Body>
        </Card>
    );
};

const DatePickers = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    /*
     * handle date change
     */
    const onDateChange = (date) => {
        if (date) {
            setSelectedDate(date);
        }
    };
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Date &amp; Time Picker</h4>
                <p className="text-muted font-14">
                    A simple date picker using{' '}
                    <a rel="noreferrer" href="https://reactdatepicker.com/" target="_blank">
                        ReactJS Datepicker
                    </a>
                </p>

                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <label>Single Date</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                value={selectedDate}
                                onChange={(date) => {
                                    onDateChange(date);
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <label>Single Date with multiple months</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                monthsShown={2}
                                value={selectedDate}
                                onChange={(date) => {
                                    onDateChange(date);
                                }}
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <div className="form-group mb-3">
                            <label className="form-label">Custom date format</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                dateFormat="yyyy-MM-dd"
                                value={selectedDate}
                                onChange={(date) => {
                                    onDateChange(date);
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <label>Specific date range</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                minDate={new Date()}
                                maxDate={new Date(new Date().setDate(new Date().getDate() + 7))}
                                value={selectedDate}
                                onChange={(date) => {
                                    onDateChange(date);
                                }}
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <div className="mb-3">
                            <label>Select Time</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                showTimeSelect
                                timeFormat="HH:mm"
                                tI={60}
                                dateFormat="MMMM d, yyyy h:mm aa"
                                timeCaption="time"
                                value={selectedDate}
                                onChange={(date) => {
                                    onDateChange(date);
                                }}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="mb-3">
                            <label>Time only</label> <br />
                            <HyperDatepicker
                                hideAddon={true}
                                showTimeSelect
                                showTimeSelectOnly
                                tI={60}
                                dateFormat="h:mm aa"
                                timeCaption="Time"
                                value={selectedDate}
                                onChange={(date) => {
                                    onDateChange(date);
                                }}
                            />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const InputMasks = () => {
    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Input Masks</h4>
                <p className="text-muted font-14">
                    Input masks by{' '}
                    <a
                        rel="noreferrer"
                        href="https://github.com/text-mask/text-mask/tree/master/react#readme"
                        target="_blank">
                        react-text-mask
                    </a>
                </p>

                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Phone Number with Area Code</label> <br />
                            <MaskedInput
                                mask={[
                                    '(',
                                    /[1-9]/,
                                    /\d/,
                                    ')',
                                    ' ',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                ]}
                                placeholder="(__) ____-____"
                                className="form-control"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>US Phone Number</label> <br />
                            <MaskedInput
                                mask={[
                                    '(',
                                    /[1-9]/,
                                    /\d/,
                                    /\d/,
                                    ')',
                                    ' ',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    '-',
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                    /\d/,
                                ]}
                                placeholder="(___) ___-____"
                                className="form-control"
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Date</label> <br />
                            <MaskedInput
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                placeholder="__/__/____"
                                className="form-control"
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="form-group">
                            <label>Time</label> <br />
                            <MaskedInput
                                mask={[/\d/, /\d/, ':', /\d/, /\d/, ':', /\d/, /\d/]}
                                placeholder="__:__:__"
                                className="form-control"
                            />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

const FormAdvanced = (): React$Element<React$FragmentType> => {
    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Forms', path: '/forms/advanced' },
                    { label: 'Form Advanced', path: '/forms/advanced', active: true },
                ]}
                title={'Form Advanced'}
            />

            <Row>
                <Col lg={6}>
                    <ReactSelect />
                </Col>
                <Col lg={6}>
                    <Typeaheads />
                </Col>
            </Row>

            <Row>
                <Col>
                    <DatePickers />
                </Col>
            </Row>

            <Row>
                <Col>
                    <InputMasks />
                </Col>
            </Row>
        </>
    );
};

export default FormAdvanced;
