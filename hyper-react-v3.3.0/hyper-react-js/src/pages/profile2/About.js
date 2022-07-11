// @flow
import React from 'react';
import { Table } from 'react-bootstrap';
import classNames from 'classnames';

type AboutProps = {
    projectDetails: {
        id: number,
        clientProfile: string,
        client: string,
        name: string,
        startDate: string,
        dueDate: string,
        status: string,
    }[],
};

const About = ({ projectDetails }: AboutProps): React$Element<React$FragmentType> => {
    return (
        <>
            <h5 className="text-uppercase">
                <i className="mdi mdi-briefcase me-1"></i> Experience
            </h5>

            {/* timeline */}
            <div className="timeline-alt pb-0">
                <div className="timeline-item">
                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon"></i>
                    <div className="timeline-item-info">
                        <h5 className="mt-0 mb-1">Lead designer / Developer</h5>
                        <p className="font-14">
                            websitename.com <span className="ms-2 font-12">Year: 2015 - 18</span>
                        </p>
                        <p className="text-muted mt-2 mb-0 pb-3">
                            Everyone realizes why a new common language would be desirable: one could refuse to pay
                            expensive translators. To achieve this, it would be necessary to have uniform grammar,
                            pronunciation and more common words.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <i className="mdi mdi-circle bg-primary-lighten text-primary timeline-icon"></i>
                    <div className="timeline-item-info">
                        <h5 className="mt-0 mb-1">Senior Graphic Designer</h5>
                        <p className="font-14">
                            Software Inc. <span className="ms-2 font-12">Year: 2012 - 15</span>
                        </p>
                        <p className="text-muted mt-2 mb-0 pb-3">
                            If several languages coalesce, the grammar of the resulting language is more simple and
                            regular than that of the individual languages. The new common language will be more simple
                            and regular than the existing European languages.
                        </p>
                    </div>
                </div>

                <div className="timeline-item">
                    <i className="mdi mdi-circle bg-info-lighten text-info timeline-icon"></i>
                    <div className="timeline-item-info">
                        <h5 className="mt-0 mb-1">Graphic Designer</h5>
                        <p className="font-14">
                            Coderthemes Design LLP <span className="ms-2 font-12">Year: 2010 - 12</span>
                        </p>
                        <p className="text-muted mt-2 mb-0 pb-2">
                            The European languages are members of the same family. Their separate existence is a myth.
                            For science music sport etc, Europe uses the same vocabulary. The languages only differ in
                            their grammar their pronunciation.
                        </p>
                    </div>
                </div>
            </div>

            <h5 className="mb-3 mt-4 text-uppercase">
                <i className="mdi mdi-cards-variant me-1"></i> Projects
            </h5>

            <Table responsive className="table table-borderless table-nowrap mb-0">
                <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>Clients</th>
                        <th>Project Name</th>
                        <th>Start Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {projectDetails.map((project, index) => {
                        return (
                            <tr key={index}>
                                <td>{project.id}</td>
                                <td>
                                    <img
                                        src={project.clientProfile}
                                        alt=""
                                        className="me-2 rounded-circle"
                                        height="24"
                                    />{' '}
                                    {project.client}
                                </td>
                                <td>{project.name}</td>
                                <td>{project.startDate}</td>
                                <td>{project.dueDate}</td>
                                <td>
                                    <span
                                        className={classNames('badge', {
                                            'badge-info-lighten': project.status === 'Work in Progress',
                                            'badge-danger-lighten': project.status === 'Pending',
                                            'badge-success-lighten': project.status === 'Done',
                                            'badge-warning-lighten': project.status === 'Coming soon',
                                        })}>
                                        {project.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default About;
