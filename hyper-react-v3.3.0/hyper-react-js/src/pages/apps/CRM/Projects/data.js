// images
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-4.jpg';
import avatar4 from '../../../../assets/images/users/avatar-5.jpg';
import avatar5 from '../../../../assets/images/users/avatar-6.jpg';
import avatar6 from '../../../../assets/images/users/avatar-7.jpg';

const projectList = [
    {
        title: 'Project Dashboard',
        task: 'New Task Assign',
        created_on: '4 Hrs ago',
        members: [avatar1, avatar2],
    },
    {
        title: 'Admin Template',
        task: 'New Task Assign',
        created_on: '7 Hrs ago',
        members: [avatar3, avatar4],
    },
    {
        title: 'Client Project',
        task: 'New Task Assign',
        created_on: '1 Day ago',
        members: [avatar5, avatar6],
    },
];

const statisticsData = [
    {
        icon: 'mdi mdi-file-document-edit',
        variant: 'primary',
        title: 'Active Project',
        noOfProject: 85,
    },
    {
        icon: 'mdi mdi-account-group',
        variant: 'success',
        title: 'Total Employees',
        noOfProject: 32,
    },
    {
        icon: 'mdi mdi-account-star',
        variant: 'info',
        title: 'Project Review',
        noOfProject: 40,
    },
    {
        icon: 'mdi mdi-folder-plus',
        variant: 'warning',
        title: 'New Project',
        noOfProject: 25,
    },
];

const tasksData = [
    {
        title: 'Landing Page Design',
        shortDesc: 'Create a new landing page (Saas Product)',
        time: '2 Hrs ago',
        assignPeople: 5,
    },
    {
        title: 'Admin Dashboard',
        shortDesc: 'Create a new Admin dashboard',
        time: '3 Hrs ago',
        assignPeople: 2,
    },
    {
        title: 'Client Work',
        shortDesc: 'Create a new Power Project (Sktech design)',
        time: '5 Hrs ago',
        assignPeople: 2,
    },
    {
        title: 'UI/UX Design',
        shortDesc: 'Create a new UI Kit in figma',
        time: '6 Hrs ago',
        assignPeople: 3,
    },
];

const members = [
    {
        avatar: avatar1,
        name: 'Risa Pearson',
        designation: 'UI/UX Designer',
        experience: '2.5 Year',
    },
    {
        avatar: avatar2,
        name: 'Margaret D. Evans',
        designation: 'PHP Developer',
        experience: '2 Year',
    },
    {
        avatar: avatar3,
        name: 'Bryan J. Luellen',
        designation: 'Front end Developer',
        experience: '1 Year',
    },
    {
        avatar: avatar4,
        name: 'Kathryn S. Collier',
        designation: 'UI/UX Designer',
        experience: '3 Year',
    },
    {
        avatar: avatar5,
        name: 'Timothy Kauper',
        designation: 'Backend Developer',
        experience: '2 Year',
    },
    {
        avatar: avatar6,
        name: 'Zara Raws',
        designation: 'Python Developer',
        experience: '1 Year',
    },
];
export { projectList, statisticsData, tasksData, members };
