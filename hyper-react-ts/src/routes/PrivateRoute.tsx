import { Navigate, useLocation } from 'react-router-dom';
import { APICore } from 'helpers/api/apiCore';
import { useUser } from 'hooks';

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
    const [loggedInUser] = useUser();

    const api = new APICore();

    /**
     * not logged in so redirect to login page with the return url
     */
    if (api.isUserAuthenticated() === false) {
        return <Navigate to={'/account/login'} state={{ from: location }} replace />;
    }

    // check if route is restricted by role
    if (roles && roles.indexOf(loggedInUser.role) === -1) {
        // role not authorised so redirect to home page
        return <Navigate to={{ pathname: '/' }} />;
    }

    return <RouteComponent />;
};

export default PrivateRoute;
