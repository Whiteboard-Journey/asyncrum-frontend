// images
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../../assets/images/users/avatar-6.jpg';

const projectsData = [
    {
        icon: 'mdi mdi-shopping-outline',
        variant: 'primary',
        title: 'Ecommerce App Design',
        subTitle: 'Dashboard, Pages & Auth Pages',
        hours: 145,
        task: 16,
        assignTo: [
            {
                avatar: avatar1,
            },
            {
                avatar: avatar2,
            },
            {
                avatar: avatar3,
            },
        ],
    },
    {
        icon: 'mdi mdi-account-network',
        variant: 'success',
        title: 'Client Power System',
        subTitle: 'Dashboard, Power System Pages',
        hours: 260,
        task: 24,
        assignTo: [
            {
                avatar: avatar4,
            },
            {
                avatar: avatar3,
            },
        ],
    },
    {
        icon: 'mdi mdi-page-layout-header',
        variant: 'info',
        title: 'Landing Pages Design',
        subTitle: 'Business Landing with Auth Pages',
        hours: 48,
        task: 5,
        assignTo: [
            {
                avatar: avatar5,
            },
            {
                avatar: avatar6,
            },
        ],
    },
    {
        icon: 'mdi mdi-monitor-dashboard',
        variant: 'danger',
        title: 'Business Dashboard Design',
        subTitle: 'Dashboard, Components Pages',
        hours: 24,
        task: 8,
        assignTo: [
            {
                avatar: avatar5,
            },
            {
                avatar: avatar6,
            },
            {
                avatar: avatar1,
            },
            {
                avatar: avatar2,
            },
        ],
    },
];

const clientDetails = [
    {
        avatar: avatar1,
        name: 'Kevin Snowden',
        companyName: 'Simple Solutions LLC',
        date: 'Jan 05 2022',
    },
    {
        avatar: avatar2,
        name: 'Steven Embry',
        companyName: 'Flipside Records LLC',
        date: 'Jan 10 2022',
    },
    {
        avatar: avatar3,
        name: 'James McDonald',
        companyName: 'Vision Clinics LLC',
        date: 'Jan 12 2022',
    },
    {
        avatar: avatar4,
        name: 'Ralph Wolford',
        companyName: 'Merry-Go-Round LLC',
        date: 'Jan 18 2022',
    },
    {
        avatar: avatar5,
        name: 'Tomas Cooper',
        companyName: 'Museum LLC',
        date: 'Feb 02 2022',
    },
];

const progressDetails = [
    {
        avatar: avatar1,
        name: 'Adam Baldwin',
        emailId: 'AdamNBaldwin@dayrep.com',
        projectName: 'Admin Dashboard',
        status: 'In Progress',
    },
    {
        avatar: avatar2,
        name: 'Peter Wallace',
        emailId: 'PeterGWallace@dayrep.com',
        projectName: 'Landing Page',
        status: 'Completed',
    },
    {
        avatar: avatar3,
        name: 'Jacob Dunn',
        emailId: 'JacobEDunn@dayrep.com',
        projectName: 'Logo Design',
        status: 'Pending',
    },
    {
        avatar: avatar4,
        name: 'Terry Adams',
        emailId: 'TerryCAdams@dayrep.com',
        projectName: 'Client Project',
        status: 'In Progress',
    },
    {
        avatar: avatar5,
        name: 'Jason Stovall',
        emailId: 'JasonJStovall@armyspy.com',
        projectName: 'Figma Work',
        status: 'Pending',
    },
];

const taskDetails = [
    {
        icon: 'mdi mdi-file-edit',
        variant: 'primary',
        title: 'Running Project',
        totalTask: 160,
        completedTask: 145,
        progressValue: 91,
    },
    {
        icon: 'mdi mdi-account-multiple',
        variant: 'success',
        title: 'Active Clients',
        totalTask: 85,
        completedTask: 40,
        progressValue: 47,
    },
    {
        icon: 'mdi mdi-account-multiple-plus',
        variant: 'danger',
        title: 'New Request',
        progressValue: 68,
    },
    {
        icon: 'mdi mdi-emoticon-happy',
        variant: 'info',
        title: 'Happy Clients',
        totalTask: 50,
        completedTask: 48,
        progressValue: 90,
    },
];

const chatMessages = [
    {
        id: 1,
        userPic: avatar1,
        userName: 'Geneva',
        text: 'Hello!',
        postedOn: '10:00',
    },
    {
        id: 2,
        userPic: avatar5,
        userName: 'Dominic',
        text: 'Hi, How are you? What about our next meeting?',
        postedOn: '10:01',
    },
    {
        id: 3,
        userPic: avatar1,
        userName: 'Geneva',
        text: 'Yeah everything is fine',
        postedOn: '10:02',
    },
    {
        id: 4,
        userPic: avatar5,
        userName: 'Dominic',
        text: "Wow that's great!",
        postedOn: '10:03',
    },
    {
        id: 5,
        userPic: avatar1,
        userName: 'Dominic',
        text: 'Cool!',
        postedOn: '10:03',
    },
];
export { projectsData, clientDetails, progressDetails, taskDetails, chatMessages };
