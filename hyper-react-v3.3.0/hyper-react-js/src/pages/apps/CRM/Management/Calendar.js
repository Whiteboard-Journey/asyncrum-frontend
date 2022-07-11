// @flow
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

// component
import CardTitle from '../../../../components/CardTitle';

// component
import HyperDatepicker from '../../../../components/Datepicker';

const Calendar = (): React$Element<any> => {
    const [date, setDate] = useState(new Date());

    return (
        <Card>
            <Card.Body className="pb-1">
                <CardTitle
                    containerClass="d-flex align-items-center justify-content-between"
                    title="Calendar"
                    menuItems={[
                        { label: 'Today' },
                        { label: 'Yesterday' },
                        { label: 'Last Week' },
                        { label: 'Last Month' },
                    ]}
                />
            </Card.Body>
            <Card.Body className="calendar-widget px-2 pb-2 pt-0">
                <HyperDatepicker value={date} onChange={(date) => setDate(date)} inline />
            </Card.Body>
        </Card>
    );
};

export default Calendar;
