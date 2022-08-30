import { NotificationItem, ProfileOption, SearchOption } from '../types';

// get the notifications
const notifications: NotificationItem[] = [
    {
        day: 'Today',
        messages: [
            {
                id: 1,
                title: 'Datacorp',
                subText: 'Caleb Flakelar commented on Admin',
                time: '1 min ago',
                icon: 'mdi mdi-comment-account-outline',
                variant: 'primary',
                isRead: false,
            },
            {
                id: 2,
                title: 'Admin',
                subText: 'New user registered.',
                time: '1 hours ago',
                icon: 'mdi mdi-account-plus',
                variant: 'info',
                isRead: true,
            },
        ],
    },
    {
        day: 'Yesterday',
        messages: [
            {
                id: 1,
                title: 'Cristina Pride',
                subText: 'Hi, How are you? What about our next meeting',
                time: '1 day ago',
                avatar: '',
                isRead: true,
            },
        ],
    },
    {
        day: '30 Dec 2021',
        messages: [
            {
                id: 1,
                title: 'Datacorp',
                subText: 'Caleb Flakelar commented on Admin',
                icon: 'mdi mdi-comment-account-outline',
                variant: 'primary',
                isRead: true,
            },
            {
                id: 2,
                title: 'Karen Robinson',
                subText: 'Wow ! this admin looks good and awesome design',
                avatar: '',
                isRead: true,
            },
        ],
    },
];

// get the profilemenu
const profileMenus: ProfileOption[] = [
    {
        label: 'Settings',
        icon: 'mdi mdi-cog',
        redirectTo: 'settings/user',
    },
    {
        label: 'Support',
        icon: 'mdi mdi-lifebuoy',
        redirectTo: '#',
    },
    {
        label: 'Logout',
        icon: 'mdi mdi-logout',
        redirectTo: '/account/logout',
    },
];

const searchOptions: SearchOption[] = [
    { value: '1', label: 'Analytics Report', icon: 'uil-notes', type: 'report' },
    { value: '2', label: 'How can I help you?', icon: 'uil-life-ring', type: 'help' },
    { value: '3', label: 'User profile settings', icon: 'uil-cog', type: 'settings' },
    {
        label: 'Erwin Brown',
        value: 'users1',
        type: 'users',
        userDetails: {
            firstname: 'Erwin',
            lastname: 'Brown',
            position: 'UI Designer',
            avatar: '',
        },
    },
    {
        label: 'Jacob Deo',
        value: 'users2',
        type: 'users',
        userDetails: {
            firstname: 'Jacob',
            lastname: 'Deo',
            position: 'Developer',
            avatar: '',
        },
    },
];

export { notifications, profileMenus, searchOptions };
