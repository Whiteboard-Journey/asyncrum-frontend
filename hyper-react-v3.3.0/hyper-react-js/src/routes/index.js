import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import Root from './Root';
import * as layoutConstants from '../constants/layout';

// All layouts/containers
import DefaultLayout from '../layouts/Default';
import VerticalLayout from '../layouts/Vertical';
import DetachedLayout from '../layouts/Detached';
import HorizontalLayout from '../layouts/Horizontal';
import FullLayout from '../layouts/Full';

// lazy load all the views

// auth
const Login = React.lazy(() => import('../pages/account/Login'));
const Logout = React.lazy(() => import('../pages/account/Logout'));
const Register = React.lazy(() => import('../pages/account/Register'));
const Confirm = React.lazy(() => import('../pages/account/Confirm'));
const ForgetPassword = React.lazy(() => import('../pages/account/ForgetPassword'));
const LockScreen = React.lazy(() => import('../pages/account/LockScreen'));

const Login2 = React.lazy(() => import('../pages/account2/Login2'));
const Logout2 = React.lazy(() => import('../pages/account2/Logout2'));
const Register2 = React.lazy(() => import('../pages/account2/Register2'));
const Confirm2 = React.lazy(() => import('../pages/account2/Confirm2'));
const ForgetPassword2 = React.lazy(() => import('../pages/account2/ForgetPassword2'));
const LockScreen2 = React.lazy(() => import('../pages/account2/LockScreen2'));

// dashboard
const AnalyticsDashboard = React.lazy(() => import('../pages/dashboard/Analytics'));
const EcommerceDashboard = React.lazy(() => import('../pages/dashboard/Ecommerce'));
const ProjectDashboard = React.lazy(() => import('../pages/dashboard/Project'));
const EWalletDashboard = React.lazy(() => import('../pages/dashboard/E-Wallet'));

// apps
const CalendarApp = React.lazy(() => import('../pages/apps/Calendar'));
const Projects = React.lazy(() => import('../pages/apps/Projects'));
const ProjectDetail = React.lazy(() => import('../pages/apps/Projects/Detail'));
const ProjectGannt = React.lazy(() => import('../pages/apps/Projects/Gantt'));
const ProjectForm = React.lazy(() => import('../pages/apps/Projects/ProjectForm'));

// - chat
const ChatApp = React.lazy(() => import('../pages/apps/Chat'));

// -crm
const CRMDashboard = React.lazy(() => import('../pages/apps/CRM/Dashboard'));
const CRMProjects = React.lazy(() => import('../pages/apps/CRM/Projects'));
const CRMManagement = React.lazy(() => import('../pages/apps/CRM/Management'));
const CRMClients = React.lazy(() => import('../pages/apps/CRM/Clients'));
const CRMOrderList = React.lazy(() => import('../pages/apps/CRM/OrderList'));

// - ecommece pages
const EcommerceProducts = React.lazy(() => import('../pages/apps/Ecommerce/Products'));
const ProductDetails = React.lazy(() => import('../pages/apps/Ecommerce/ProductDetails'));
const Orders = React.lazy(() => import('../pages/apps/Ecommerce/Orders'));
const OrderDetails = React.lazy(() => import('../pages/apps/Ecommerce/OrderDetails'));
const Customers = React.lazy(() => import('../pages/apps/Ecommerce/Customers'));
const Cart = React.lazy(() => import('../pages/apps/Ecommerce/Cart'));
const Checkout = React.lazy(() => import('../pages/apps/Ecommerce/Checkout'));
const Sellers = React.lazy(() => import('../pages/apps/Ecommerce/Sellers'));

// - email
const Inbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));

// - social
const SocialFeed = React.lazy(() => import('../pages/apps/SocialFeed'));

// - tasks
const TaskList = React.lazy(() => import('../pages/apps/Tasks/List'));
const TaskDetails = React.lazy(() => import('../pages/apps/Tasks/Details'));
const Kanban = React.lazy(() => import('../pages/apps/Tasks/Board'));
// - file
const FileManager = React.lazy(() => import('../pages/apps/FileManager'));

// pages
const Profile = React.lazy(() => import('../pages/profile'));
const Profile2 = React.lazy(() => import('../pages/profile2'));
const ErrorPageNotFound = React.lazy(() => import('../pages/error/PageNotFound'));
const ErrorPageNotFoundAlt = React.lazy(() => import('../pages/error/PageNotFoundAlt'));
const ServerError = React.lazy(() => import('../pages/error/ServerError'));

// - other
const Invoice = React.lazy(() => import('../pages/other/Invoice'));
const FAQ = React.lazy(() => import('../pages/other/FAQ'));
const Pricing = React.lazy(() => import('../pages/other/Pricing'));
const Maintenance = React.lazy(() => import('../pages/other/Maintenance'));
const Starter = React.lazy(() => import('../pages/other/Starter'));
const PreLoader = React.lazy(() => import('../pages/other/PreLoader'));
const Timeline = React.lazy(() => import('../pages/other/Timeline'));

const Landing = React.lazy(() => import('../pages/landing'));

// uikit
const Accordions = React.lazy(() => import('../pages/uikit/Accordions'));
const Alerts = React.lazy(() => import('../pages/uikit/Alerts'));
const Avatars = React.lazy(() => import('../pages/uikit/Avatars'));
const Badges = React.lazy(() => import('../pages/uikit/Badges'));
const Breadcrumbs = React.lazy(() => import('../pages/uikit/Breadcrumb'));
const Buttons = React.lazy(() => import('../pages/uikit/Buttons'));
const Cards = React.lazy(() => import('../pages/uikit/Cards'));
const Carousels = React.lazy(() => import('../pages/uikit/Carousel'));
const Dropdowns = React.lazy(() => import('../pages/uikit/Dropdowns'));
const EmbedVideo = React.lazy(() => import('../pages/uikit/EmbedVideo'));
const Grid = React.lazy(() => import('../pages/uikit/Grid'));
const ListGroups = React.lazy(() => import('../pages/uikit/ListGroups'));
const Modals = React.lazy(() => import('../pages/uikit/Modals'));
const Notifications = React.lazy(() => import('../pages/uikit/Notifications'));
const Offcanvases = React.lazy(() => import('../pages/uikit/Offcanvas'));
const Paginations = React.lazy(() => import('../pages/uikit/Paginations'));
const Popovers = React.lazy(() => import('../pages/uikit/Popovers'));
const Progress = React.lazy(() => import('../pages/uikit/Progress'));
const Ribbons = React.lazy(() => import('../pages/uikit/Ribbons'));
const Spinners = React.lazy(() => import('../pages/uikit/Spinners'));
const Tabs = React.lazy(() => import('../pages/uikit/Tabs'));
const Tooltips = React.lazy(() => import('../pages/uikit/Tooltips'));
const Typography = React.lazy(() => import('../pages/uikit/Typography'));
const DragDrop = React.lazy(() => import('../pages/uikit/DragDrop'));
const RangeSliders = React.lazy(() => import('../pages/uikit/RangeSliders'));
const Ratings = React.lazy(() => import('../pages/uikit/Ratings'));

// icons
const Dripicons = React.lazy(() => import('../pages/icons/Dripicons'));
const MDIIcons = React.lazy(() => import('../pages/icons/MDIIcons'));
const Unicons = React.lazy(() => import('../pages/icons/Unicons'));

// forms
const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
const Editors = React.lazy(() => import('../pages/forms/Editors'));

// charts
const ApexChart = React.lazy(() => import('../pages/charts/Apex'));
const BriteChart = React.lazy(() => import('../pages/charts/Brite'));
const ChartJs = React.lazy(() => import('../pages/charts/ChartJs'));

// tables
const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

// widgets
const Widgets = React.lazy(() => import('../pages/uikit/Widgets'));

// maps
const GoogleMaps = React.lazy(() => import('../pages/maps/GoogleMaps'));
const VectorMaps = React.lazy(() => import('../pages/maps/VectorMaps'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
    component: React.LazyExoticComponent<() => JSX.Element>,
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
    <Suspense fallback={loading()}>
        <Component />
    </Suspense>
);

const AllRoutes = () => {
    const { layout } = useSelector((state) => ({
        layout: state.Layout,
    }));

    const getLayout = () => {
        let layoutCls = VerticalLayout;

        switch (layout.layoutType) {
            case layoutConstants.LAYOUT_HORIZONTAL:
                layoutCls = HorizontalLayout;
                break;
            case layoutConstants.LAYOUT_DETACHED:
                layoutCls = DetachedLayout;
                break;
            case layoutConstants.LAYOUT_FULL:
                layoutCls = FullLayout;
                break;
            default:
                layoutCls = VerticalLayout;
                break;
        }
        return layoutCls;
    };
    let Layout = getLayout();

    return useRoutes([
        { path: '/', element: <Root /> },
        {
            // public routes
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    path: 'account',
                    children: [
                        { path: 'login', element: <LoadComponent component={Login} /> },
                        { path: 'register', element: <LoadComponent component={Register} /> },
                        { path: 'confirm', element: <LoadComponent component={Confirm} /> },
                        { path: 'forget-password', element: <LoadComponent component={ForgetPassword} /> },
                        { path: 'lock-screen', element: <LoadComponent component={LockScreen} /> },
                        { path: 'logout', element: <LoadComponent component={Logout} /> },
                        { path: 'login2', element: <LoadComponent component={Login2} /> },
                        { path: 'register2', element: <LoadComponent component={Register2} /> },
                        { path: 'confirm2', element: <LoadComponent component={Confirm2} /> },
                        { path: 'forget-password2', element: <LoadComponent component={ForgetPassword2} /> },
                        { path: 'lock-screen2', element: <LoadComponent component={LockScreen2} /> },
                        { path: 'logout2', element: <LoadComponent component={Logout2} /> },
                    ],
                },
                {
                    path: 'error-404',
                    element: <LoadComponent component={ErrorPageNotFound} />,
                },
                {
                    path: 'error-500',
                    element: <LoadComponent component={ServerError} />,
                },
                {
                    path: 'maintenance',
                    element: <LoadComponent component={Maintenance} />,
                },
                {
                    path: 'landing',
                    element: <LoadComponent component={Landing} />,
                },
            ],
        },
        {
            // auth protected routes
            path: '/',
            element: <PrivateRoute roles={'Admin'} component={Layout} />,
            children: [
                {
                    path: 'dashboard',
                    children: [
                        {
                            path: 'analytics',
                            element: <LoadComponent component={AnalyticsDashboard} />,
                        },
                        {
                            path: 'ecommerce',
                            element: <LoadComponent component={EcommerceDashboard} />,
                        },
                        {
                            path: 'project',
                            element: <LoadComponent component={ProjectDashboard} />,
                        },
                        {
                            path: 'e-wallet',
                            element: <LoadComponent component={EWalletDashboard} />,
                        },
                    ],
                },
                {
                    path: 'apps',
                    children: [
                        {
                            path: 'calendar',
                            element: <LoadComponent component={CalendarApp} />,
                        },
                        {
                            path: 'chat',
                            element: <LoadComponent component={ChatApp} />,
                        },
                        {
                            path: 'crm',
                            children: [
                                {
                                    path: 'dashboard',
                                    element: <LoadComponent component={CRMDashboard} />,
                                },
                                {
                                    path: 'projects',
                                    element: <LoadComponent component={CRMProjects} />,
                                },
                                {
                                    path: 'management',
                                    element: <LoadComponent component={CRMManagement} />,
                                },
                                {
                                    path: 'clients',
                                    element: <LoadComponent component={CRMClients} />,
                                },
                                {
                                    path: 'orders',
                                    element: <LoadComponent component={CRMOrderList} />,
                                },
                            ],
                        },
                        {
                            path: 'ecommerce',
                            children: [
                                {
                                    path: 'products',
                                    element: <LoadComponent component={EcommerceProducts} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={ProductDetails} />,
                                },
                                {
                                    path: 'orders',
                                    element: <LoadComponent component={Orders} />,
                                },
                                {
                                    path: 'order/details',
                                    element: <LoadComponent component={OrderDetails} />,
                                },
                                {
                                    path: 'customers',
                                    element: <LoadComponent component={Customers} />,
                                },
                                {
                                    path: 'shopping-cart',
                                    element: <LoadComponent component={Cart} />,
                                },
                                {
                                    path: 'checkout',
                                    element: <LoadComponent component={Checkout} />,
                                },
                                {
                                    path: 'sellers',
                                    element: <LoadComponent component={Sellers} />,
                                },
                            ],
                        },
                        {
                            path: 'email',
                            children: [
                                {
                                    path: 'inbox',
                                    element: <LoadComponent component={Inbox} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={EmailDetail} />,
                                },
                            ],
                        },
                        {
                            path: 'tasks',
                            children: [
                                {
                                    path: 'list',
                                    element: <LoadComponent component={TaskList} />,
                                },
                                {
                                    path: 'kanban',
                                    element: <LoadComponent component={Kanban} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={TaskDetails} />,
                                },
                            ],
                        },

                        {
                            path: 'projects',
                            children: [
                                {
                                    path: 'list',
                                    element: <LoadComponent component={Projects} />,
                                },
                                {
                                    path: 'details',
                                    element: <LoadComponent component={ProjectDetail} />,
                                },
                                {
                                    path: 'gantt',
                                    element: <LoadComponent component={ProjectGannt} />,
                                },
                                {
                                    path: 'new',
                                    element: <LoadComponent component={ProjectForm} />,
                                },
                            ],
                        },
                        {
                            path: 'social',
                            element: <LoadComponent component={SocialFeed} />,
                        },
                        {
                            path: 'file',
                            element: <LoadComponent component={FileManager} />,
                        },
                    ],
                },
                {
                    path: 'pages',
                    children: [
                        {
                            path: 'starter',
                            element: <LoadComponent component={Starter} />,
                        },
                        {
                            path: 'profile',
                            element: <LoadComponent component={Profile} />,
                        },
                        {
                            path: 'profile2',
                            element: <LoadComponent component={Profile2} />,
                        },
                        {
                            path: 'pricing',
                            element: <LoadComponent component={Pricing} />,
                        },
                        {
                            path: 'error-404-alt',
                            element: <LoadComponent component={ErrorPageNotFoundAlt} />,
                        },
                        {
                            path: 'timeline',
                            element: <LoadComponent component={Timeline} />,
                        },
                        {
                            path: 'invoice',
                            element: <LoadComponent component={Invoice} />,
                        },
                        {
                            path: 'faq',
                            element: <LoadComponent component={FAQ} />,
                        },
                        {
                            path: 'preloader',
                            element: <LoadComponent component={PreLoader} />,
                        },
                    ],
                },
                {
                    path: 'ui',
                    children: [
                        {
                            path: 'base-ui',
                            children: [
                                {
                                    path: 'accordions',
                                    element: <LoadComponent component={Accordions} />,
                                },
                                {
                                    path: 'alerts',
                                    element: <LoadComponent component={Alerts} />,
                                },
                                {
                                    path: 'avatars',
                                    element: <LoadComponent component={Avatars} />,
                                },
                                {
                                    path: 'badges',
                                    element: <LoadComponent component={Badges} />,
                                },
                                {
                                    path: 'breadcrumb',
                                    element: <LoadComponent component={Breadcrumbs} />,
                                },
                                {
                                    path: 'buttons',
                                    element: <LoadComponent component={Buttons} />,
                                },
                                {
                                    path: 'cards',
                                    element: <LoadComponent component={Cards} />,
                                },
                                {
                                    path: 'carousel',
                                    element: <LoadComponent component={Carousels} />,
                                },
                                {
                                    path: 'dropdowns',
                                    element: <LoadComponent component={Dropdowns} />,
                                },
                                {
                                    path: 'embedvideo',
                                    element: <LoadComponent component={EmbedVideo} />,
                                },
                                {
                                    path: 'grid',
                                    element: <LoadComponent component={Grid} />,
                                },
                                {
                                    path: 'listgroups',
                                    element: <LoadComponent component={ListGroups} />,
                                },
                                {
                                    path: 'modals',
                                    element: <LoadComponent component={Modals} />,
                                },
                                {
                                    path: 'notifications',
                                    element: <LoadComponent component={Notifications} />,
                                },
                                {
                                    path: 'offcanvas',
                                    element: <LoadComponent component={Offcanvases} />,
                                },
                                {
                                    path: 'paginations',
                                    element: <LoadComponent component={Paginations} />,
                                },
                                // {
                                //     path: 'placeholders',
                                //     element: <LoadComponent component={Placeholders} />,
                                // },
                                {
                                    path: 'popovers',
                                    element: <LoadComponent component={Popovers} />,
                                },
                                {
                                    path: 'progress',
                                    element: <LoadComponent component={Progress} />,
                                },
                                {
                                    path: 'ribbons',
                                    element: <LoadComponent component={Ribbons} />,
                                },
                                {
                                    path: 'spinners',
                                    element: <LoadComponent component={Spinners} />,
                                },
                                {
                                    path: 'tabs',
                                    element: <LoadComponent component={Tabs} />,
                                },
                                {
                                    path: 'tooltips',
                                    element: <LoadComponent component={Tooltips} />,
                                },
                                {
                                    path: 'typography',
                                    element: <LoadComponent component={Typography} />,
                                },
                            ],
                        },
                        {
                            path: 'widgets',
                            element: <LoadComponent component={Widgets} />,
                        },
                        {
                            path: 'extended',
                            children: [
                                {
                                    path: 'dragdrop',
                                    element: <LoadComponent component={DragDrop} />,
                                },
                                {
                                    path: 'rangesliders',
                                    element: <LoadComponent component={RangeSliders} />,
                                },
                                {
                                    path: 'ratings',
                                    element: <LoadComponent component={Ratings} />,
                                },
                            ],
                        },
                        {
                            path: 'icons',
                            children: [
                                {
                                    path: 'unicons',
                                    element: <LoadComponent component={Unicons} />,
                                },
                                {
                                    path: 'mdi',
                                    element: <LoadComponent component={MDIIcons} />,
                                },
                                {
                                    path: 'dripicons',
                                    element: <LoadComponent component={Dripicons} />,
                                },
                            ],
                        },
                        {
                            path: 'forms',
                            children: [
                                {
                                    path: 'basic',
                                    element: <LoadComponent component={BasicForms} />,
                                },
                                {
                                    path: 'advanced',
                                    element: <LoadComponent component={FormAdvanced} />,
                                },
                                {
                                    path: 'validation',
                                    element: <LoadComponent component={FormValidation} />,
                                },
                                {
                                    path: 'wizard',
                                    element: <LoadComponent component={FormWizard} />,
                                },
                                {
                                    path: 'upload',
                                    element: <LoadComponent component={FileUpload} />,
                                },
                                {
                                    path: 'editors',
                                    element: <LoadComponent component={Editors} />,
                                },
                            ],
                        },
                        {
                            path: 'tables',
                            children: [
                                {
                                    path: 'basic',
                                    element: <LoadComponent component={BasicTables} />,
                                },
                                {
                                    path: 'advanced',
                                    element: <LoadComponent component={AdvancedTables} />,
                                },
                            ],
                        },
                        {
                            path: 'charts',
                            children: [
                                {
                                    path: 'apex',
                                    element: <LoadComponent component={ApexChart} />,
                                },
                                {
                                    path: 'brite',
                                    element: <LoadComponent component={BriteChart} />,
                                },
                                {
                                    path: 'chartjs',
                                    element: <LoadComponent component={ChartJs} />,
                                },
                            ],
                        },
                        {
                            path: 'maps',
                            children: [
                                {
                                    path: 'googlemaps',
                                    element: <LoadComponent component={GoogleMaps} />,
                                },
                                {
                                    path: 'vectormaps',
                                    element: <LoadComponent component={VectorMaps} />,
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ]);
};

export { AllRoutes };
