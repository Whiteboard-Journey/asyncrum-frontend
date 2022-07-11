import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { messages } from '../data';
import { ChatMessage, ChatUser } from '../types';
import avatar from 'assets/images/users/avatar-1.jpg';

export default function useChatArea(selectedUser: ChatUser) {
    const [loading, setLoading] = useState<boolean>(false);
    const [userMessages, setUserMessages] = useState<ChatMessage[]>([]);
    const [toUser] = useState<ChatUser>({
        id: 9,
        name: 'Shreyu N',
        avatar: avatar,
        email: 'support@coderthemes.com',
        phone: '+1 456 9595 9594',
        location: 'California, USA',
        languages: 'English, German, Spanish',
        groups: 'Work, Friends',
    });
    const timeoutRef = useRef<NodeJS.Timeout>();

    /*
     *  Fetches the messages for selected user
     */
    const getMessagesForUser = useCallback(() => {
        if (selectedUser) {
            setLoading(true);
            const timeoutId = setTimeout(() => {
                setUserMessages([
                    ...messages.filter(
                        (m) =>
                            (m.to.id === toUser.id && m.from.id === selectedUser.id) ||
                            (toUser.id === m.from.id && m.to.id === selectedUser.id)
                    ),
                ]);
                setLoading(false);
            }, 750);
            timeoutRef.current = timeoutId;
        }
    }, [selectedUser, toUser]);

    useEffect(() => {
        getMessagesForUser();
        return () => {
            clearTimeout(timeoutRef.current!);
        };
    }, [getMessagesForUser, timeoutRef]);

    /*
     * form validation schema
     */
    const schemaResolver = yupResolver(
        yup.object().shape({
            newMessage: yup.string().required('Please enter your messsage'),
        })
    );

    /*
     * form methods
     */
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
        reset,
    } = methods;

    /**
     * sends the chat message
     */
    const sendChatMessage = (value: Record<string, string>) => {
        let newUserMessages = [...userMessages];
        newUserMessages.push({
            id: userMessages.length + 1,
            from: toUser,
            to: selectedUser,
            message: { type: 'text', value: { text: value['newMessage'] } },
            sendOn: new Date().getHours() + ':' + new Date().getMinutes(),
        });
        setUserMessages(newUserMessages);
        reset();
    };
    return {
        loading,
        toUser,
        userMessages,
        handleSubmit,
        register,
        control,
        errors,
        sendChatMessage,
    };
}
