export type MenuItemType = {
    key: string;
    label: string;
    isTitle?: boolean;
    icon?: string;
    url?: string;
    badge?: {
        variant: string;
        text: string;
    };
    parentKey?: string;
    target?: string;
    children?: MenuItemType[];
};

const MENU_ITEMS: MenuItemType[] = [
    { key: 'navigation', label: 'Navigation', isTitle: true },
    {
        key: 'dashboards',
        label: 'Dashboards',
        isTitle: false,
        icon: 'uil-home-alt',
        badge: { variant: 'success', text: '4' },
        children: [
            {
                key: 'ds-analytics',
                label: 'Analytics',
                url: '/dashboard/analytics',
                parentKey: 'dashboards',
            },
            {
                key: 'ds-ecommerce',
                label: 'Ecommerce',
                url: '/dashboard/ecommerce',
                parentKey: 'dashboards',
            },
            {
                key: 'ds-project',
                label: 'Projects',
                url: '/dashboard/project',
                parentKey: 'dashboards',
            },
            {
                key: 'ds-ewallet',
                label: 'E-Wallet',
                url: '/dashboard/e-wallet',
                parentKey: 'dashboards',
                badge: { variant: 'danger', text: 'New' },
            },
        ],
    },
    { key: 'apps', label: 'Apps', isTitle: true },
    {
        key: 'apps-calendar',
        label: 'Calendar',
        isTitle: false,
        icon: 'uil-calender',
        url: '/apps/calendar',
    },
    {
        key: 'apps-chat',
        label: 'Chat',
        isTitle: false,
        icon: 'uil-comments-alt',
        url: '/apps/chat',
    },
    {
        key: 'apps-crm',
        label: 'CRM',
        isTitle: false,
        badge: { variant: 'danger', text: 'New' },
        icon: 'uil-tachometer-fast',
        children: [
            {
                key: 'crm-products',
                label: 'Dashboard',
                url: '/apps/crm/dashboard',
                parentKey: 'apps-crm',
            },
            {
                key: 'crm-projects',
                label: 'Project',
                url: '/apps/crm/projects',
                parentKey: 'apps-crm',
            },
            {
                key: 'crm-orders',
                label: 'Orders List',
                url: '/apps/crm/orders',
                parentKey: 'apps-crm',
            },
            {
                key: 'crm-clients',
                label: 'Clients',
                url: '/apps/crm/clients',
                parentKey: 'apps-crm',
            },
            {
                key: 'crm-management',
                label: 'Management',
                url: '/apps/crm/management',
                parentKey: 'apps-crm',
            },
        ],
    },
    {
        key: 'apps-ecommerce',
        label: 'Ecommerce',
        isTitle: false,
        icon: 'uil-store',
        children: [
            {
                key: 'ecommerce-products',
                label: 'Products',
                url: '/apps/ecommerce/products',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-details',
                label: 'Products Details',
                url: '/apps/ecommerce/details',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-orders',
                label: 'Orders',
                url: '/apps/ecommerce/orders',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-order-details',
                label: 'Order Details',
                url: '/apps/ecommerce/order/details',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-customers',
                label: 'Customers',
                url: '/apps/ecommerce/customers',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-shopping-cart',
                label: 'Shopping Cart',
                url: '/apps/ecommerce/shopping-cart',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-checkout',
                label: 'Checkout',
                url: '/apps/ecommerce/checkout',
                parentKey: 'apps-ecommerce',
            },
            {
                key: 'ecommerce-sellers',
                label: 'Sellers',
                url: '/apps/ecommerce/sellers',
                parentKey: 'apps-ecommerce',
            },
        ],
    },
    {
        key: 'apps-email',
        label: 'Email',
        isTitle: false,
        icon: 'uil-envelope',
        children: [
            {
                key: 'email-inbox',
                label: 'Inbox',
                url: '/apps/email/inbox',
                parentKey: 'apps-email',
            },
            {
                key: 'email-read-email',
                label: 'Read Email',
                url: '/apps/email/details',
                parentKey: 'apps-email',
            },
        ],
    },
    {
        key: 'apps-projects',
        label: 'Projects',
        isTitle: false,
        icon: 'uil-briefcase',
        children: [
            {
                key: 'project-list',
                label: 'List',
                url: '/apps/projects/list',
                parentKey: 'apps-projects',
            },
            {
                key: 'project-details',
                label: 'Details',
                url: '/apps/projects/details',
                parentKey: 'apps-projects',
            },
            {
                key: 'project-gantt',
                label: 'Gantt',
                url: '/apps/projects/gantt',
                badge: { variant: 'light', text: 'New' },
                parentKey: 'apps-projects',
            },
            {
                key: 'project-create-project',
                label: 'Create Project',
                url: '/apps/projects/new',
                parentKey: 'apps-projects',
            },
        ],
    },
    {
        key: 'apps-social',
        label: 'Social Feed',
        isTitle: false,
        icon: 'uil-rss',
        url: '/apps/social',
    },
    {
        key: 'apps-tasks',
        label: 'Tasks',
        isTitle: false,
        icon: 'uil-clipboard-alt',
        children: [
            {
                key: 'task-list',
                label: 'List',
                url: '/apps/tasks/list',
                parentKey: 'apps-tasks',
            },
            {
                key: 'task-details',
                label: 'Details',
                url: '/apps/tasks/details',
                parentKey: 'apps-tasks',
            },
            {
                key: 'task-kanban',
                label: 'Kanban Board',
                url: '/apps/tasks/kanban',
                parentKey: 'apps-tasks',
            },
        ],
    },
    {
        key: 'apps-file-manager',
        label: 'File Manager',
        isTitle: false,
        icon: 'uil-folder-plus',
        url: '/apps/file',
    },

    { key: 'custom', label: 'Custom', isTitle: true },
    {
        key: 'pages',
        label: 'Pages',
        isTitle: false,
        icon: 'uil-copy-alt',
        children: [
            {
                key: 'page-profile',
                label: 'Profile',
                url: '/pages/profile',
                parentKey: 'pages',
            },
            {
                key: 'page-profile2',
                label: 'Profile 2',
                url: '/pages/profile2',
                parentKey: 'pages',
            },
            {
                key: 'page-invoice',
                label: 'Invoice',
                url: '/pages/invoice',
                parentKey: 'pages',
            },
            { key: 'page-faq', label: 'FAQ', url: '/pages/faq', parentKey: 'pages' },
            {
                key: 'page-pricing',
                label: 'Pricing',
                url: '/pages/pricing',
                parentKey: 'pages',
            },
            {
                key: 'page-maintenance',
                label: 'Maintenance',
                url: '/maintenance',
                target: '_blank',
                parentKey: 'pages',
            },
            {
                key: 'page-error-404',
                label: 'Error - 404',
                url: '/error-404',
                parentKey: 'pages',
            },
            {
                key: 'page-error-404-alt',
                label: 'Error - 404-alt',
                url: '/pages/error-404-alt',
                parentKey: 'pages',
            },
            {
                key: 'page-error-500',
                label: 'Error - 500',
                url: '/error-500',
                parentKey: 'pages',
            },
            {
                key: 'page-starter',
                label: 'Starter Page',
                url: '/pages/starter',
                parentKey: 'pages',
            },
            {
                key: 'page-preloader',
                label: 'With Preloader',
                url: '/pages/preloader',
                parentKey: 'pages',
            },
            {
                key: 'page-timeline',
                label: 'Timeline',
                url: '/pages/timeline',
                parentKey: 'pages',
            },
        ],
    },
    {
        key: 'landing',
        label: 'Landing',
        isTitle: false,
        icon: 'uil-globe',
        url: '/landing',
        target: '_blank',
        badge: { variant: 'secondary', text: 'New' },
    },

    { key: 'components', label: 'Components', isTitle: true },
    {
        key: 'base-ui',
        label: 'Base UI',
        isTitle: false,
        icon: 'uil-box',
        children: [
            {
                key: 'base-ui-accordions',
                label: 'Accordions',
                url: '/ui/base-ui/accordions',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-alerts',
                label: 'Alerts',
                url: '/ui/base-ui/alerts',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-avatars',
                label: 'Avatars',
                url: '/ui/base-ui/avatars',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-badges',
                label: 'Badges',
                url: '/ui/base-ui/badges',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-breadcrumb',
                label: 'Breadcrumb',
                url: '/ui/base-ui/breadcrumb',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-buttons',
                label: 'Buttons',
                url: '/ui/base-ui/buttons',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-cards',
                label: 'Cards',
                url: '/ui/base-ui/cards',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-carousel',
                label: 'Carousel',
                url: '/ui/base-ui/carousel',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-dropdown',
                label: 'Dropdowns',
                url: '/ui/base-ui/dropdowns',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-embedvideo',
                label: 'Embed Video',
                url: '/ui/base-ui/embedvideo',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-grid',
                label: 'Grid',
                url: '/ui/base-ui/grid',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-listgroups',
                label: 'List Groups',
                url: '/ui/base-ui/listgroups',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-modals',
                label: 'Modals',
                url: '/ui/base-ui/modals',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-notifications',
                label: 'Notifications',
                url: '/ui/base-ui/notifications',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-offcanvas',
                label: 'Offcanvas',
                url: '/ui/base-ui/offcanvas',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-placeholders',
                label: 'Placeholders',
                url: '/ui/base-ui/placeholders',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-paginations',
                label: 'Paginations',
                url: '/ui/base-ui/paginations',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-popovers',
                label: 'Popovers',
                url: '/ui/base-ui/popovers',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-progress',
                label: 'Progress',
                url: '/ui/base-ui/progress',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-ribbons',
                label: 'Ribbons',
                url: '/ui/base-ui/ribbons',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-spinners',
                label: 'Spinners',
                url: '/ui/base-ui/spinners',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-tabs',
                label: 'Tabs',
                url: '/ui/base-ui/tabs',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-tooltips',
                label: 'Tooltips',
                url: '/ui/base-ui/tooltips',
                parentKey: 'base-ui',
            },
            {
                key: 'base-ui-typography',
                label: 'Typography',
                url: '/ui/base-ui/typography',
                parentKey: 'base-ui',
            },
        ],
    },
    {
        key: 'extended-ui',
        label: 'Extended UI',
        isTitle: false,
        icon: 'uil-package',
        children: [
            {
                key: 'extended-ui-dragdrop',
                label: 'Drag and Drop',
                url: '/ui/extended/dragdrop',
                parentKey: 'extended-ui',
            },
            {
                key: 'extended-ui-rangesliders',
                label: 'Range Sliders',
                url: '/ui/extended/rangesliders',
                parentKey: 'extended-ui',
            },
            {
                key: 'extended-ui-ratings',
                label: 'Ratings',
                url: '/ui/extended/ratings',
                parentKey: 'extended-ui',
            },
        ],
    },
    {
        key: 'widgets',
        label: 'Widgets',
        isTitle: false,
        icon: 'uil-layer-group',
        url: '/ui/widgets',
    },
    {
        key: 'icons',
        label: 'Icons',
        isTitle: false,
        icon: 'uil-streering',
        children: [
            {
                key: 'icon-dripicons',
                label: 'Dripicons',
                url: '/ui/icons/dripicons',
                parentKey: 'icons',
            },
            {
                key: 'icon-mdiicons',
                label: 'Material Design',
                url: '/ui/icons/mdi',
                parentKey: 'icons',
            },
            {
                key: 'icon-unicons',
                label: 'Unicons',
                url: '/ui/icons/unicons',
                parentKey: 'icons',
            },
        ],
    },
    {
        key: 'forms',
        label: 'Forms',
        isTitle: false,
        icon: 'uil-document-layout-center',
        children: [
            {
                key: 'form-basic',
                label: 'Basic Elements',
                url: '/ui/forms/basic',
                parentKey: 'forms',
            },
            {
                key: 'form-advanced',
                label: 'Form Advanced',
                url: '/ui/forms/advanced',
                parentKey: 'forms',
            },
            {
                key: 'form-validation',
                label: 'Validation',
                url: '/ui/forms/validation',
                parentKey: 'forms',
            },
            {
                key: 'form-wizard',
                label: 'Wizard',
                url: '/ui/forms/wizard',
                parentKey: 'forms',
            },
            {
                key: 'form-upload',
                label: 'File Upload',
                url: '/ui/forms/upload',
                parentKey: 'forms',
            },
            {
                key: 'form-editors',
                label: 'Editors',
                url: '/ui/forms/editors',
                parentKey: 'forms',
            },
        ],
    },
    {
        key: 'charts',
        label: 'Charts',
        isTitle: false,
        icon: 'uil-chart',
        children: [
            {
                key: 'chart-apex',
                label: 'Apex Charts',
                url: '/ui/charts/apex',
                parentKey: 'charts',
            },
            {
                key: 'chart-chartjs',
                label: 'Chartjs',
                url: '/ui/charts/chartjs',
                parentKey: 'charts',
            },
        ],
    },
    {
        key: 'tables',
        label: 'Tables',
        isTitle: false,
        icon: 'uil-table',
        children: [
            {
                key: 'table-basic',
                label: 'Basic Tables',
                url: '/ui/tables/basic',
                parentKey: 'tables',
            },
            {
                key: 'table-advanced',
                label: 'Advanced Tables',
                url: '/ui/tables/advanced',
                parentKey: 'tables',
            },
        ],
    },
    {
        key: 'maps',
        label: 'Maps',
        isTitle: false,
        icon: 'uil-location-point',
        children: [
            {
                key: 'maps-googlemaps',
                label: 'Google Maps',
                url: '/ui/maps/googlemaps',
                parentKey: 'maps',
            },
            {
                key: 'maps-vectormaps',
                label: 'Vector Maps',
                url: '/ui/maps/vectormaps',
                parentKey: 'maps',
            },
        ],
    },
    {
        key: 'menu-levels',
        label: 'Menu Levels',
        isTitle: false,
        icon: 'uil-folder-plus',
        children: [
            {
                key: 'menu-levels-1-1',
                label: 'Level 1.1',
                url: '/',
                parentKey: 'menu-levels',
                children: [
                    {
                        key: 'menu-levels-2-1',
                        label: 'Level 2.1',
                        url: '/',
                        parentKey: 'menu-levels-1-1',
                        children: [
                            {
                                key: 'menu-levels-3-1',
                                label: 'Level 3.1',
                                url: '/',
                                parentKey: 'menu-levels-2-1',
                            },
                            {
                                key: 'menu-levels-3-2',
                                label: 'Level 3.2',
                                url: '/',
                                parentKey: 'menu-levels-2-1',
                            },
                        ],
                    },
                    {
                        key: 'menu-levels-2-2',
                        label: 'Level 2.2',
                        url: '/',
                        parentKey: 'menu-levels-1-1',
                    },
                ],
            },
            {
                key: 'menu-levels-1-2',
                label: 'Level 1.2',
                url: '/',
                parentKey: 'menu-levels',
            },
        ],
    },
];

export { MENU_ITEMS };
