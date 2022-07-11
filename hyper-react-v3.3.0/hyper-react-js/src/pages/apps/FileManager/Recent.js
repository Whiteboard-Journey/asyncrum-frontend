// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup, Table, OverlayTrigger, Tooltip } from 'react-bootstrap';

type MemberItems = {
    image: string,
    name: string,
};

type RecentFilesItems = {
    name: string,
    modifiedDate: string,
    modifiedBy: string,
    size: string,
    owner: string,
    members: Array<MemberItems>,
};

type RecentProps = {
    recentFiles: Array<RecentFilesItems>,
};

const Recent = ({ recentFiles }: RecentProps): React$Element<React$FragmentType> => {
    return (
        <>
            <div className="mt-3">
                <h5 className="mb-3">Recent</h5>

                <Table responsive className="table table-centered table-nowrap mb-0">
                    <thead className="table-light">
                        <tr>
                            <th className="border-0">Name</th>
                            <th className="border-0">Last Modified</th>
                            <th className="border-0">Size</th>
                            <th className="border-0">Owner</th>
                            <th className="border-0">Members</th>
                            <th className="border-0" style={{ width: '80px' }}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentFiles.map((file, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <span className="ms-2 fw-semibold">
                                            <Link to="#" className="text-reset">
                                                {file.name}
                                            </Link>
                                        </span>
                                    </td>
                                    <td>
                                        <p className="mb-0">{file.modifiedDate}</p>
                                        <span className="font-12">by {file.modifiedBy}</span>
                                    </td>
                                    <td>{file.size}</td>
                                    <td>{file.owner}</td>
                                    <td id="tooltip-container">
                                        <div className="avatar-group">
                                            {file.members.map((item, index) => {
                                                return (
                                                    <OverlayTrigger
                                                        key={index}
                                                        placement="top"
                                                        overlay={<Tooltip>{item.name}</Tooltip>}>
                                                        <Link to="#" className="avatar-group-item mb-0 me-1">
                                                            <img
                                                                src={item.image}
                                                                className="rounded-circle avatar-xs"
                                                                alt="friend"
                                                            />
                                                        </Link>
                                                    </OverlayTrigger>
                                                );
                                            })}
                                        </div>
                                    </td>
                                    <td>
                                        <ButtonGroup className="d-block">
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    align="end"
                                                    className="table-action-btn dropdown-toggle arrow-none btn btn-light btn-xs">
                                                    <i className="mdi mdi-dots-horizontal"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-share-variant me-2 text-muted vertical-middle"></i>
                                                        Share
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-link me-2 text-muted vertical-middle"></i>
                                                        Get Sharable Link
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-pencil me-2 text-muted vertical-middle"></i>
                                                        Rename
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-download me-2 text-muted vertical-middle"></i>
                                                        Download
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <i className="mdi mdi-delete me-2 text-muted vertical-middle"></i>
                                                        Remove
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default Recent;
