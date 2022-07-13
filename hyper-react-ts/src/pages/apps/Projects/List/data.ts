import { Project } from '../types';
import projectImg1 from 'assets/images/projects/project-1.jpg';
import projectImg2 from 'assets/images/projects/project-2.jpg';
import projectImg3 from 'assets/images/projects/project-3.jpg';
import projectImg4 from 'assets/images/projects/project-4.jpg';

const projects: Project[] = [
    {
        id: 1,
        title: 'Ubold v3.0 - Redesign',
        state: 'Finished',
        shortDesc: 'With supporting text below as a natural lead-in to additional contenposuere erat a ante',
        totalTasks: 21,
        totalComments: 741,
        totalMembers: 10,
        progress: 100,
    },
    {
        id: 2,
        title: 'Minton v3.0 - Redesign',
        state: 'Ongoing',
        shortDesc:
            'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
        totalTasks: 81,
        totalComments: 103,
        totalMembers: 6,
        progress: 21,
    },
    {
        id: 3,
        title: 'Hyper v2.1 - Angular and Django',
        state: 'Ongoing',
        shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid',
        totalTasks: 12,
        totalComments: 48,
        totalMembers: 2,
        progress: 66,
    },
    {
        id: 4,
        title: 'Hyper v2.1 - React, Webpack',
        state: 'Finished',
        shortDesc: "Some quick example text to build on the card title and make up the bulk of the card's content",
        totalTasks: 50,
        totalComments: 1024,
        totalMembers: 5,
        progress: 100,
    },
    {
        id: 5,
        title: 'Hyper 2.2 - Vue.Js and Laravel',
        state: 'Ongoing',
        image: projectImg1,
        totalTasks: 3,
        totalComments: 104,
        totalMembers: 3,
        progress: 45,
    },
    {
        id: 6,
        title: 'Hyper 2.3 - Rails, NodeJs, Mean',
        state: 'Planned',
        image: projectImg2,
        totalTasks: 11,
        totalComments: 201,
        totalMembers: 5,
        progress: 100,
    },
    {
        id: 7,
        title: 'Hyper - Landing page and UI Kit',
        state: 'Planned',
        image: projectImg3,
        totalTasks: 3,
        totalComments: 104,
        totalMembers: 3,
        progress: 45,
    },
    {
        id: 8,
        title: 'Hyper 3.0 - Scoping',
        state: 'Finished',
        image: projectImg4,
        totalTasks: 3,
        totalComments: 104,
        totalMembers: 3,
        progress: 45,
    },
];

export { projects };
