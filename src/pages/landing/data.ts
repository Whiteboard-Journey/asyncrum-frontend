import { FAQItem, PricingPlan } from 'components';
import { Feature, LayoutDemo, Service } from './types';
import layout1 from 'assets/images/layouts/layout-1.png';
import layout2 from 'assets/images/layouts/layout-2.png';
import layout3 from 'assets/images/layouts/layout-3.png';
import layout4 from 'assets/images/layouts/layout-4.png';
import layout5 from 'assets/images/layouts/layout-5.png';
import layout6 from 'assets/images/layouts/layout-6.png';
import dashboard_image from 'assets/images/dashboard.png';
import daily_scrum from 'assets/images/daily_scrum.png';
import review_video from 'assets/images/review_video.png';
import whiteboard from 'assets/images/whiteboard.png';
import meeting from 'assets/images/meeting.png';
import team_setting from 'assets/images/team_setting.png';


const services: Service[] = [
  {
    icon: 'uil uil-desktop',
    title: 'Team Dashboard',
    description: 'Team workspace for organizing team daily standups, meetings, and whiteboards.',
  },
  {
    icon: 'uil uil-sun',
    title: 'Asynchrous Daily Standups',
    description: 'V-log based recording for asynchrous daily scrum.',
  },
  {
    icon: 'uil uil-video',
    title: 'Review Video Player',
    description: 'Review video player for bookmarking, drawing, and starting thread in recordings.',
  },
  {
    icon: 'uil uil-clapper-board',
    title: 'Real-time Collaboration Whiteboard',
    description: 'Real-time Collaboration whiteboard for edit various objects simultaneously with your team.',
  },
  {
    icon: 'uil uil-meeting-board',
    title: 'Real-time Meeting',
    description: 'Real-time meeting for full-scale video conference that can support up to 35 participants.',
  },
  {
    icon: 'uil uil-building',
    title: 'Team Management',
    description: 'Team management for managing team.',
  },
];

const layouts: LayoutDemo[] = [
  {
    image: layout1,
    layout: 'Vertical Layout',
  },
  {
    image: layout2,
    layout: 'Horizontal Layout',
  },
  {
    image: layout3,
    layout: 'Detached Layout',
  },
  {
    image: layout5,
    layout: 'Light Sidenav Layout',
  },
  {
    image: layout6,
    layout: 'Boxed Layout',
  },
  {
    image: layout4,
    layout: 'Semi Dark Layout',
  },
];

const features: Feature[] = [
  {
    id: 1,
    title: 'Team Dashboard',
    desc: 'Team workspace for organizing team daily standups, meetings, and whiteboards',
    image: dashboard_image,
    features: ['Daily Scrum List', 'Meeting List', 'Whiteboard List', 'Mention Notification', 'Member Timezone Indicator'],
  },
  {
    id: 2,
    title: 'Asynchrous Daily Standups',
    desc: 'V-log based recording for asynchrous daily scrum.',
    image: daily_scrum,
    features: [
      'Record Daily',
      'Record both Screen and Face',
      'Check team member\'s daily standups daily',
    ],
  },
  {
    id: 3,
    title: 'Review Video Player',
    desc: 'Review video player for bookmarking, drawing, and starting thread in recordings',
    image: review_video,
    features: ['Video Bookmark', 'Emoji reaction on bookmark', 'Draw on bookmarked video', 'Video-based thread on bookmark'],
  },
  {
    id: 4,
    title: 'Real-time Collaboration Whiteboard',
    desc: 'Real-time Collaboration whiteboard for edit various objects simultaneously with your team',
    image: whiteboard,
    features: ['Draw various objects', 'Edit objects in real-time with others', 'Video/Image upload', 'Export/Import'],
  },
  {
    id: 5,
    title: 'Real-time Meeting',
    desc: 'Real-time meeting for full-scale video conference that can support up to 35 participants',
    image: meeting,
    features: ['Video Conference', 'Screen Sharing', 'Reaction', 'Chat'],
  },
  {
    id: 6,
    title: 'Team Management',
    desc: 'Team management for managing team',
    image: team_setting,
    features: ['Team Inivte', 'Team profile update', 'Personal profile update'],
  },
];

const plans: PricingPlan[] = [
  {
    id: 1,
    name: 'Free',
    icon: 'dripicons-user',
    price: '$0',
    duration: 'Per User',
    features: ['Up to 5 Users', 'Up to 10 Whiteboards', 'Recording up to 2 Mins', 'Up to 10 Thread Recordings', 'Up to 10 Participants in Meeting', 'Email Support', '24x7 Support'],
    isRecommended: false,
  },
  {
    id: 2,
    name: 'Standard',
    icon: 'dripicons-briefcase',
    price: '$2.5~3.5',
    duration: 'Per User',
    features: ['Up to 50 Users', 'Unlimited Whiteboards', 'Recording up to 5 Mins', 'Unlimited Thread Recordings', 'Up to 35 Participants in Meeting', 'Email Support', '24x7 Support'],
    isRecommended: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    icon: 'dripicons-store',
    price: 'On-Demand',
    duration: '',
    features: ['Unlimited Users', 'Unlimited Whiteboards', 'Recording up to 10 Mins', 'Unlimited Thread Recordings', 'On-Premise Support', 'Email Support', '24x7 Support'],
    isRecommended: false,
  },
];

const rawFaqs: FAQItem[] = [
  {
    id: 1,
    question: 'Can I use this template for my client?',
    answer:
      'Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere here.',
    titleClass: 'text-body',
    textClass: 'pb-1 text-muted',
  },
  {
    id: 2,
    question: 'Can this theme work with Wordpress?',
    answer:
      "No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme.",
    titleClass: 'text-body',
    textClass: 'pb-1 text-muted',
  },
  {
    id: 3,
    question: 'How do I get help with the theme?',
    answer:
      'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.',
    titleClass: 'text-body',
    textClass: 'pb-1 text-muted',
  },
  {
    id: 4,
    question: 'Will you regularly give updates of Hyper?',
    answer: 'Yes, We will update the Hyper regularly. All the future updates would be available without any cost.',
    titleClass: 'text-body',
    textClass: 'pb-1 text-muted',
  },
];

export { services, layouts, features, plans, rawFaqs };
