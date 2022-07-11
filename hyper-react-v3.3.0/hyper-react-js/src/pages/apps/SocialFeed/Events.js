// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Events = (): React$Element<React$FragmentType> => {
    return (
        <>
            <Card>
                <Card.Body className="p-2">
                    <div className="list-group list-group-flush my-2">
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-calendar-alt me-1"></i> 3 events this week
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-calender me-1"></i> Eva's birthday today
                        </Link>
                        <Link to="#" className="list-group-item list-group-item-action border-0">
                            <i className="uil uil-bookmark me-1"></i> Jenny's wedding tomorrow
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default Events;
