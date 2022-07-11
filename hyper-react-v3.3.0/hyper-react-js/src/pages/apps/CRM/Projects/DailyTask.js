// @flow
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';

// component
import { FormInput } from '../../../../components';

type DailyTaskItems = {
    title: string,
    shortDesc: string,
    time: string,
    assignPeople: string,
};

type DailyTaskProps = {
    taskData: Array<DailyTaskItems>,
};

const DailyTask = ({ taskData }: DailyTaskProps): React$Element<React$FragmentType> => {
    return (
        <Card>
            <Card.Body className="pb-0">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="header-title">Daily Task</h4>
                    <FormInput name="select" type="select" className="form-select form-select-sm" key="select">
                        <option>Today</option>
                        <option>Yesterday</option>
                        <option>Tomorrow</option>
                    </FormInput>
                </div>
            </Card.Body>
            <SimpleBar className="card-body py-0" style={{ maxHeight: '319px' }}>
                {(taskData || []).map((task, i) => {
                    return (
                        <div className="border rounded p-2 mb-2" key={i}>
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item font-16 fw-semibold">
                                    <Link to="#" className="text-secondary">
                                        {task.title}
                                    </Link>
                                </li>
                                <li className="list-inline-item text-muted">
                                    <i className="mdi mdi-circle-small"></i>
                                </li>
                                <li className="list-inline-item font-13 fw-semibold text-muted">{task.time}</li>
                            </ul>
                            <p className="text-muted mb-0">{task.shortDesc}</p>
                            <p className="text-muted mb-0">
                                <i className="mdi mdi-account-group me-1"></i>
                                <b>{task.assignPeople}</b>People
                            </p>
                        </div>
                    );
                })}
                <div className="text-center">
                    <i className="mdi mdi-dots-circle mdi-spin font-20 text-muted"></i>
                </div>
            </SimpleBar>
        </Card>
    );
};

export default DailyTask;
