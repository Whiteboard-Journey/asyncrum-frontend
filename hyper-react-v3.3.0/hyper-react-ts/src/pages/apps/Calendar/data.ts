import { EventInput } from '@fullcalendar/react';

const defaultEvents: EventInput[] = [
    {
        id: '1',
        title: 'Interview - Backend Engineer',
        start: new Date(),
        className: 'bg-success',
    },
    {
        id: '2',
        title: 'Phone Screen - Frontend Engineer',
        start: new Date().setDate(new Date().getDate() + 2),
        className: 'bg-info',
    },
    {
        id: '3',
        title: 'Meeting with John Deo',
        start: new Date().setDate(new Date().getDate() + 2),
        end: new Date().setDate(new Date().getDate() + 4),
        className: 'bg-warning',
    },
    {
        id: '4',
        title: 'Buy a Theme',
        start: new Date().setDate(new Date().getDate() + 4),
        end: new Date().setDate(new Date().getDate() + 5),
        className: 'bg-primary',
    },
];

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

export { defaultEvents, externalEvents };
