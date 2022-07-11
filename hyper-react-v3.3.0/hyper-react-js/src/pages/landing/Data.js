// images
import layout1 from '../../assets/images/layouts/layout-1.png';
import layout2 from '../../assets/images/layouts/layout-2.png';
import layout3 from '../../assets/images/layouts/layout-3.png';
import layout4 from '../../assets/images/layouts/layout-4.png';
import layout5 from '../../assets/images/layouts/layout-5.png';
import layout6 from '../../assets/images/layouts/layout-6.png';

import image1 from '../../assets/images/features-1.svg';
import image2 from '../../assets/images/features-2.svg';

const services = [
    {
        icon: 'uil uil-desktop',
        title: 'Responsive Layouts',
        description: 'Et harum quidem rerum as expedita distinctio nam libero tempore cum soluta nobis est cumque quo.',
    },
    {
        icon: 'uil uil-vector-square',
        title: 'Based on Bootstrap UI',
        description: 'Temporibus autem quibusdam et aut officiis necessitatibus saepe eveniet ut sit et recusandae.',
    },
    {
        icon: 'uil uil-presentation',
        title: 'Creative Design',
        description:
            'Nam libero tempore, cum soluta a est eligendi minus id quod maxime placeate facere assumenda est.',
    },
    {
        icon: 'uil uil-apps',
        title: 'Multiple Applications',
        description: 'Et harum quidem rerum as expedita distinctio nam libero tempore cum soluta nobis est cumque quo.',
    },
    {
        icon: 'uil uil-shopping-cart-alt',
        title: 'Ecommerce Pages',
        description: 'Temporibus autem quibusdam et aut officiis necessitatibus saepe eveniet ut sit et recusandae.',
    },
    {
        icon: 'uil uil-grids',
        title: 'Multiple Layouts',
        description:
            'Nam libero tempore, cum soluta a est eligendi minus id quod maxime placeate facere assumenda est.',
    },
];

const layouts = [
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

const features = [
    {
        id: 1,
        title: 'Inbuilt applications and pages',
        desc: 'Hyper comes with a variety of ready-to-use applications and pages that help to speed up the development',
        image: image1,
        features: [
            'Projects & Tasks',
            'Ecommerce Application Pages',
            'Profile, pricing, invoice',
            'Login, signup, forget password',
        ],
    },
    {
        id: 2,
        title: 'Simply beautiful design',
        desc: 'The simplest and fastest way to build dashboard or admin panel. Hyper is built using the latest tech and tools and provide an easy way to customize anything, including an overall color schemes, layout, etc.',
        image: image2,
        features: [
            'Built with latest Bootstrap',
            'Extensive use of SCSS variables',
            ' Well documented and structured code',
            'Detailed Documentation',
        ],
    },
];

const plans = [
    {
        id: 1,
        name: 'Standard License',
        icon: 'dripicons-user',
        price: '$49',
        duration: 'License',
        features: ['10 GB Storage', '500 GB Bandwidth', 'No Domain', '1 User', 'Email Support', '24x7 Support'],
        isRecommended: false,
    },
    {
        id: 2,
        name: 'Multiple License',
        icon: 'dripicons-briefcase',
        price: '$99',
        duration: 'License',
        features: ['50 GB Storage', '900 GB Bandwidth', '2 Domain', '10 User', 'Email Support', '24x7 Support'],
        isRecommended: true,
    },
    {
        id: 3,
        name: 'Extended License',
        icon: 'dripicons-store',
        price: '$599',
        duration: 'License',
        features: [
            '100 GB Storage',
            'Unlimited Bandwidth',
            '10 Domain',
            'Unlimited Users',
            'Email Support',
            '24x7 Support',
        ],
        isRecommended: false,
    },
];

const rawFaqs = [
    {
        id: 1,
        question: 'Can I use this template for my client?',
        answer: 'Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere here.',
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
    },
    {
        id: 2,
        question: 'Can this theme work with Wordpress?',
        answer: "No. This is a HTML template. It won't directly with wordpress, though you can convert this into wordpress compatible theme.",
        titleClass: 'text-body',
        textClass: 'pb-1 text-muted',
    },
    {
        id: 3,
        question: 'How do I get help with the theme?',
        answer: 'Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime.',
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
