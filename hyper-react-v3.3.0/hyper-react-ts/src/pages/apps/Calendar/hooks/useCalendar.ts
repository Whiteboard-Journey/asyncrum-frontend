import { useEffect, useState } from 'react';
import { DateClickArg, Draggable, DropArg } from '@fullcalendar/interaction';
import { DateInput, EventClickArg, EventDropArg, EventInput } from '@fullcalendar/react';
import { useToggle } from 'hooks';
import { Event } from '../types';
import { defaultEvents } from '../data';

export default function useCalendar() {
    /*
     * modal handling
     */
    const [isOpen, , show, hide] = useToggle();
    const onCloseModal = () => {
        hide();
        setEventData({});
        setDateInfo({} as DateClickArg);
    };
    const onOpenModal = () => show();
    const [isEditable, setIsEditable] = useState<boolean>(false);

    /*
     * event data
     */
    const [events, setEvents] = useState<EventInput[]>([...defaultEvents]);
    const [eventData, setEventData] = useState<EventInput>({});
    const [dateInfo, setDateInfo] = useState<DateClickArg>({} as DateClickArg);

    useEffect(() => {
        // create dragable events
        let draggableEl = document.getElementById('external-events');
        new Draggable(draggableEl!, {
            itemSelector: '.external-event',
        });
    }, []);

    /*
    calendar events
    */

    // on date click
    const onDateClick = (arg: DateClickArg) => {
        setDateInfo(arg);
        onOpenModal();
        setIsEditable(false);
    };

    // on event click
    const onEventClick = (arg: EventClickArg) => {
        const event = {
            id: String(arg.event.id),
            title: arg.event.title,
            className: arg.event.classNames[0],
        };
        setEventData(event);
        onOpenModal();
        setIsEditable(true);
    };

    // on drop
    const onDrop = (arg: DropArg) => {
        const dropEventData = arg;
        const title = dropEventData.draggedEl.title;
        if (title == null) {
        } else {
            let newEvent = {
                id: String(events.length + 1),
                title: title,
                start: dropEventData ? dropEventData.dateStr : new Date(),
                className: dropEventData.draggedEl.attributes.getNamedItem('data-class')?.value,
            };
            const modifiedEvents = [...events];
            modifiedEvents.push(newEvent);

            setEvents(modifiedEvents);
        }
    };

    // on add event
    const onAddEvent = (data: Event) => {
        let modifiedEvents = [...events];
        const event = {
            id: String(modifiedEvents.length + 1),
            title: data.title,
            start: Object.keys(dateInfo).length !== 0 ? dateInfo.date : new Date(),
            className: data.className,
        };
        modifiedEvents = [...modifiedEvents, event];
        setEvents(modifiedEvents);
        onCloseModal();
    };

    //  on update event
    const onUpdateEvent = (data: Event) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id);
        modifiedEvents[idx]['title'] = data.title;
        modifiedEvents[idx]['className'] = data.className;
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // on remove event
    const onRemoveEvent = () => {
        var modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === eventData.id);
        modifiedEvents.splice(idx, 1);
        setEvents(modifiedEvents);
        onCloseModal();
    };

    // on event drop
    const onEventDrop = (arg: EventDropArg) => {
        const modifiedEvents = [...events];
        const idx = modifiedEvents.findIndex((e) => e['id'] === String(arg.event.id!));
        modifiedEvents[idx]['title'] = arg.event.title;
        modifiedEvents[idx]['className'] = arg.event.classNames;
        modifiedEvents[idx]['start'] = arg.event.start as DateInput;
        modifiedEvents[idx]['end'] = arg.event.end as DateInput;
        setEvents(modifiedEvents);
        setIsEditable(false);
    };

    return {
        isOpen,
        onOpenModal,
        onCloseModal,
        isEditable,
        eventData,
        events,
        onDateClick,
        onEventClick,
        onDrop,
        onEventDrop,
        onUpdateEvent,
        onRemoveEvent,
        onAddEvent,
    };
}
