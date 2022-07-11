import { Client } from './types';
import avatar1 from 'assets/images/users/avatar-1.jpg';
import avatar2 from 'assets/images/users/avatar-2.jpg';
import avatar3 from 'assets/images/users/avatar-3.jpg';
import avatar4 from 'assets/images/users/avatar-4.jpg';
import avatar5 from 'assets/images/users/avatar-5.jpg';
import avatar6 from 'assets/images/users/avatar-6.jpg';
import avatar7 from 'assets/images/users/avatar-7.jpg';
import avatar8 from 'assets/images/users/avatar-8.jpg';

const clients: Client[] = [
    {
        avatar: avatar1,
        verifiedClient: true,
        name: 'Louise Coleman',
        emailId: 'LouiseMColeman@dayrep.com',
        completedProject: 18,
    },
    {
        avatar: avatar2,
        verifiedClient: true,
        name: 'Robert Kent',
        emailId: 'RobertSKent@jourrapide.com',
        completedProject: 24,
    },
    {
        avatar: avatar3,
        name: 'Arthur Childress',
        emailId: 'ArthurEChildress@teleworm.us',
        completedProject: 11,
    },
    {
        avatar: avatar4,
        verifiedClient: true,
        name: 'Ronald McGehee',
        emailId: 'MartinDJordan@armyspy.com',
        completedProject: 6,
    },
    {
        avatar: avatar5,
        verifiedClient: true,
        name: 'Martin Jordan',
        emailId: 'artinDJordan@armyspy.com',
        completedProject: 12,
    },
    {
        avatar: avatar6,
        name: 'Dewayne Murphy',
        emailId: 'DewayneBMurphy@armyspy.com',
        completedProject: 15,
    },
    {
        avatar: avatar7,
        verifiedClient: true,
        name: 'Russel Sanchez',
        emailId: 'RusselHSanchez@rhyta.com',
        completedProject: 22,
    },
    {
        avatar: avatar8,
        name: 'Alvin Middleton',
        emailId: 'AlvinSMiddleton@armyspy.com',
        completedProject: 7,
    },
];

export { clients };
