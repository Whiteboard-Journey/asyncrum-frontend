import { useState } from 'react';
import { ChatUser } from '../types';
import { users } from '../data';

export default function useChatApp() {
    const [selectedUser, setSelectedUser] = useState<ChatUser>(users[1]);

    /**
     * On user change
     */
    const onUserChange = (user: ChatUser) => {
        setSelectedUser(user);
    };

    return { selectedUser, onUserChange };
}
