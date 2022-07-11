// @flow
import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import '@fullcalendar/react';
import { Draggable } from '@fullcalendar/interaction';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';

import Calendar from './Calendar';
import AddEditEvent from './AddEditEvent';

// dummy data
import { defaultEvents } from './data';

const SidePanel = () => {
    // external events
    const externalEvents = [
        {
            id: 1,
            textClass: 'text-success',
            className: 'bg-success',
            title: 'New Theme Release',
        },
        {
            id: 2,
            textClass: 'text-info',
            className: 'bg-info',
            title: 'My Event',
        },
        {
            id: 3,
            textClass: 'text-warning',
            className: 'bg-warning',
            title: 'Meet manager',
        },
        {
            id: 4,
            textClass: 'text-danger',
            className: 'bg-danger',
            title: 'Create New theme',
        },
    ];

    return (
        <>
            <div id="external-events" className="m-t-20">
                <br />
                <p className="text-muted">Drag and drop your event or click in the calendar</p>
                {/* external events */}
                {externalEvents.map((event, index) => {
                    return (
                        <div
                            key={index}
                            className={classNames('external-event', event.className + '-lighten', event.textClass)}
                            title={event.title}
                            data={event.className}>
                            <i className="mdi mdi-checkbox-blank-circle me-2 vertical-middle"></i>
                            {event.title}
                        </div>
                    );
                })}
            </div>

            <div className="mt-5 d-none d-xl-block">
                <h5 className="text-center">How It Works ?</h5>

                <ul className="ps-3">
                    <li className="text-muted mb-3">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </li>
                    <li className="text-muted mb-3">
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
                        the more obscure Latin words, consectetur, from a Lorem Ipsum passage.
                    </li>
                    <li className="text-muted mb-3">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </li>
                </ul>
            </div>
        </>
    );
};

type CalendarAppState = {
    show?: boolean,
    isEditable?: boolean,
    events?: Array<any>,
    eventData?: any,
    dateInfo?: any,
};

const CalendarApp = (state: CalendarAppState): React$Element<React$FragmentType> => {
    /*
     * modal handeling
     */
    const [show, setShow] = useState(false);
    const onCloseModal = () => {
        setShow(false);
        setEventData({});
        setDateInfo({});
    };
    const onOpenModal = () => setShow(true);
    const [isEditable, setIsEditable] = useState(false);

    /*
     * event data
     */
    const [events, setEvents] = useState([...defaultEvents]);
    const [eventData, setEventData] = useState({});
    const [dateInfo, setDateInfo] = useState({});

    useEffect(() => {
        // create dragable events
        let draggableEl = document.getElementById('external-events');
        new Draggable(draggableEl, {
            itemSelector: '.external-event',
        });
    }, []);

    /*
    calendar events
    */
    // on date click
    const onDateClick = (arg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };

    // on event click
    const onEventClick = (arg) => {
        const event = {
            id: parseInt(arg.event.id),
            title: arg.event.title,
            start: arg.event.start,
            className: arg.event.classNames[0],
        };
        setEventData(event);
        onOpenModal();
        setIsEditable(true);
    };

    // on drop
    const onDrop = (arg) => {
        const dropEventData = arg;
        const title = dropEventData.draggedEl.title;
        if (title == null) {
        } else {
            let newEvent = {
                id: events.length + 1,
                title: title,
                start: dropEventData ? dropEventData.dateStr : new Date(),
                className: dropEventData.draggedEl.attributes.data.value,
            };
            const modifiedEvents = [...events];
            modifiedEvents.push(newEvent);

            setEvents(modifiedEvents);
        }
    };

    /*
    on add event 
    */
    const onAddEvent = (data) => {
        let modifiedEvents = [...events];
        const event = {
            id: modifiedEvents.length + 1,
            title: data.title,
            start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
            className: data.className,
        };
        modifiedEvents = [...modifiedEvents, event];
        setEvents(modifiedEvents);
        onCloseModal();
    };

    /*
    on update event
    */
    const onUpdateEvent = (data) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id);
        modifiedEvents[idx]['title'] = data.title;
        modifiedEvents[idx]['className'] = data.className;
        setEvents(modifiedEvents);
        onCloseModal();
    };

    /*
    on remove event
    */
    const onRemoveEvent = () => {
        var modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id);
        modifiedEvents.splice(idx, 1);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    /**
     * on event drop
     */
    const onEventDrop = (arg) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === Number(arg.event.id));
        modifiedEvents[idx]['title'] = arg.event.title;
        modifiedEvents[idx]['className'] = arg.event.classNames;
        modifiedEvents[idx]['start'] = arg.event.start;
        modifiedEvents[idx]['end'] = arg.event.end;
        setEvents(modifiedEvents);
        setIsEditable(false);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'Apps', path: '/apps/calendar' },
                    { label: 'Calendar', path: '/apps/calendar', active: true },
                ]}
                title={'Calendar'}
            />

            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col xl={3}>
                                    <div className="d-grid">
                                        {/* add events */}
                                        <Button
                                            className="btn btn-lg font-16 btn-danger"
                                            id="btn-new-event"
                                            onClick={onOpenModal}>
                                            <i className="mdi mdi-plus-circle-outline"></i> Create New Event
                                        </Button>
                                    </div>

                                    <SidePanel />
                                </Col>
                                <Col xl={9}>
                                    {/* fullcalendar control */}
                                    <Calendar
                                        onDateClick={onDateClick}
                                        onEventClick={onEventClick}
                                        onDrop={onDrop}
                                        onEventDrop={onEventDrop}
                                        events={events}
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* add new event modal */}
            {show ? (
                <AddEditEvent
                    isOpen={show}
                    onClose={onCloseModal}
                    isEditable={isEditable}
                    eventData={eventData}
                    onUpdateEvent={onUpdateEvent}
                    onRemoveEvent={onRemoveEvent}
                    onAddEvent={onAddEvent}
                />
            ) : null}
        </>
    );
};

export default CalendarApp;
