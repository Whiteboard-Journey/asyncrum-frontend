import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { EventInput } from '@fullcalendar/react';
import { Event } from '../types';

export default function useAddEditEvent(
    eventData: EventInput | undefined,
    isEditable: boolean,
    onUpdateEvent: (value: Event) => void,
    onAddEvent: (value: Event) => void
) {
    // event state
    const [event] = useState<Event>({
        title: eventData?.title || '',
        className: eventData?.className || '',
    });

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            title: yup.string().required('Please enter event name'),
            className: yup.string().required('Please select category'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ defaultValues: event, resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    /*
     * handle form submission
     */
    const onSubmitEvent = (data: Event) => {
        isEditable ? onUpdateEvent(data) : onAddEvent(data);
    };

    return {
        handleSubmit,
        register,
        control,
        errors,
        onSubmitEvent,
    };
}
