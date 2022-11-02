import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { DefaultLayout, VerticalLayout, HorizontalLayout, DetachedLayout, FullLayout } from 'layouts';
import PrivateRoute from './PrivateRoute';
import Root from './Root';
import { LayoutTypes } from 'appConstants';
import { useRedux } from 'hooks';

// lazy load all the views

// auth
const Login = React.lazy(() => import('pages/account/Login'));
const OAuth = React.lazy(() => import('pages/account/OAuth'));
const Logout = React.lazy(() => import('pages/account/Logout'));
const Register = React.lazy(() => import('pages/account/Register'));
const Confirm = React.lazy(() => import('pages/account/Confirm'));
const ForgetPassword = React.lazy(() => import('pages/account/ForgetPassword'));
// dashboard
const Dashboard = React.lazy(() => import('pages/docs/Dashboard'));

// apps
const Whiteboard = React.lazy(() => import('pages/apps/Whiteboard'));
// const Meeting = React.lazy(() => import('pages/apps/Meeting'));

// settings
const PersonalSettings = React.lazy(() => import('pages/settings/PersonalSettings'));
const TeamSettings = React.lazy(() => import('pages/settings/TeamSettings'));
const CreateTeam = React.lazy(() => import('pages/settings/CreateTeam'));

// pages
const ErrorPageNotFound = React.lazy(() => import('pages/error/PageNotFound'));
const ErrorPageNotFoundAlt = React.lazy(() => import('pages/error/PageNotFoundAlt'));
const ServerError = React.lazy(() => import('pages/error/ServerError'));
const Landing = React.lazy(() => import('pages/landing/'));

// uikit
const Notifications = React.lazy(() => import('pages/uikit/Notifications'));

const loading = () => <div className=""></div>;

type LoadComponentProps = {
  component: React.LazyExoticComponent<() => JSX.Element>;
};

const LoadComponent = ({ component: Component }: LoadComponentProps) => (
  <Suspense fallback={loading()}>
    <Component />
  </Suspense>
);

const AllRoutes = () => {
  const { appSelector } = useRedux();

  const { layout } = appSelector((state) => ({
    layout: state.Layout,
  }));

  const getLayout = () => {
    let layoutCls: React.ComponentType = VerticalLayout;

    switch (layout.layoutType) {
      case LayoutTypes.LAYOUT_HORIZONTAL:
        layoutCls = HorizontalLayout;
        break;
      case LayoutTypes.LAYOUT_DETACHED:
        layoutCls = DetachedLayout;
        break;
      case LayoutTypes.LAYOUT_FULL:
        layoutCls = FullLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  };
  const Layout = getLayout();

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
            { path: 'oauth', element: <LoadComponent component={OAuth} /> },
            { path: 'register', element: <LoadComponent component={Register} /> },
            { path: 'confirm', element: <LoadComponent component={Confirm} /> },
            { path: 'forget-password', element: <LoadComponent component={ForgetPassword} /> },
            { path: 'logout', element: <LoadComponent component={Logout} /> },
          ],
        },
        {
          path: 'whiteboard',
          element: <LoadComponent component={Whiteboard} />,
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
          path: 'whiteboard',
          element: <LoadComponent component={Whiteboard} />,
        },
        // {
        //   path: 'meeting',
        //   element: <LoadComponent component={Meeting} />,
        // },
        {
          path: 'dashboard',
          element: <LoadComponent component={Dashboard} />,
        },
        {
          path: 'settings',
          children: [
            {
              path: 'user',
              element: <LoadComponent component={PersonalSettings} />,
            },
            {
              path: 'team',
              element: <LoadComponent component={TeamSettings} />,
            },
            {
              path: 'create-team',
              element: <LoadComponent component={CreateTeam} />,
            },
            {
              path: 'error-404-alt',
              element: <LoadComponent component={ErrorPageNotFoundAlt} />,
            },
            {
              path: 'ui',
              children: [
                {
                  path: 'base-ui',
                  children: [
                    {
                      path: 'notifications',
                      element: <LoadComponent component={Notifications} />,
                    },
                  ],
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
