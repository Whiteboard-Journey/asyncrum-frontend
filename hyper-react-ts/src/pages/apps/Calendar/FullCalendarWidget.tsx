import FullCalendar, { EventClickArg, EventDropArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg, DropArg } from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import BootstrapTheme from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';

type FullCalendarWidgetProps = {
    onDateClick: (value: DateClickArg) => void;
    onEventClick: (value: EventClickArg) => void;
    onEventDrop: (value: EventDropArg) => void;
    onDrop: (value: DropArg) => void;
    events: Array<EventInput>;
};

const FullCalendarWidget = ({ onDateClick, onEventClick, onDrop, onEventDrop, events }: FullCalendarWidgetProps) => {
    return (
        <>
            {/* full calendar control */}
            <div id="calendar">
                <FullCalendar
                    initialView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, BootstrapTheme]}
                    handleWindowResize={true}
                    themeSystem="bootstrap"
                    buttonText={{
                        today: 'Today',
                        month: 'Month',
                        week: 'Week',
                        day: 'Day',
                        list: 'List',
                        prev: 'Prev',
                        next: 'Next',
                    }}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
                    }}
                    editable={true}
                    selectable={true}
                    droppable={true}
                    events={events}
                    dateClick={(arg: DateClickArg) => onDateClick(arg)}
                    eventClick={(arg: EventClickArg) => onEventClick(arg)}
                    drop={(arg: DropArg) => onDrop(arg)}
                    eventDrop={(arg: EventDropArg) => onEventDrop(arg)}
                />
            </div>
        </>
    );
};

export default FullCalendarWidget;
