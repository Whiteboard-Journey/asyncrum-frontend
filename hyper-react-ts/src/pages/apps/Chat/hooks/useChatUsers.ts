import { useState } from 'react';
import { ChatUser } from '../types';
import { users } from '../data';

export default function useChatUsers(onUserSelect: (value: ChatUser) => void) {
    const [user, setUser] = useState<ChatUser[]>([...users]);
    const [selectedUser, setSelectedUser] = useState<ChatUser>(users[1]);
    const [selectedGroup, setSelectedGroup] = useState<string>('All');

    /**
     * Filter users
     */
    const filterUsers = (group: string) => {
        setSelectedGroup(group);
        setUser(
            group !== 'All'
                ? [...users].filter((u) => u.groups.toLowerCase().indexOf(group.toLowerCase()) >= 0)
                : [...users]
        );
    };

    /**
     * Search the user
     * @param {*} text
     */
    const search = (text: string) => {
        setUser(text ? [...users].filter((u) => u.name.toLowerCase().indexOf(text.toLowerCase()) >= 0) : [...users]);
    };

    /**
     * Activates the user
     * @param {*} user
     */
    const activateUser = (user: ChatUser) => {
        setSelectedUser(user);
        if (onUserSelect) {
            onUserSelect(user);
        }
    };

    return {
        user,
        selectedUser,
        selectedGroup,
        filterUsers,
        search,
        activateUser,
    };
}
