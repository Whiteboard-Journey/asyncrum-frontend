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
    let location = useLocation();
    const api = new APICore();

    if (api.isUserAuthenticated() === false) {
        return <Navigate to={'/account/login'} state={{ from: location }} replace />;
    }

    return <RouteComponent />;
};

export default PrivateRoute;
