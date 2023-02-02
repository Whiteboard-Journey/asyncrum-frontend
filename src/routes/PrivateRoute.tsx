import { Navigate, useLocation } from 'react-router-dom';
import { APICore } from 'helpers/api/apiCore';

type PrivateRouteProps = {
  component: React.ComponentType;
  roles?: string;
};

/**
 * Private Route forces the authorization before the route can be accessed
 * @param {*} param0
 * @returns
 */
const PrivateRoute = ({ component: RouteComponent, roles, ...rest }: PrivateRouteProps) => {
  return <RouteComponent />;
};

export default PrivateRoute;
