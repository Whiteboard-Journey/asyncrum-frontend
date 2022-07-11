import { useState } from 'react';
import { Message } from '../index';

export default function useChatList(chatMessages: Message[]) {
    const [messages, setMessages] = useState<Message[]>(chatMessages);

    /**
     * Handle new message posted
     */
    const handleNewMessagePosted = (message: string) => {
        setMessages(
            messages.concat({
                id: messages.length + 1,
                userName: 'Geneva',
                text: message,
                postedOn: new Date().getHours() + ':' + new Date().getMinutes(),
            })
        );
    };

    return {
        messages,
        handleNewMessagePosted,
    };
}
