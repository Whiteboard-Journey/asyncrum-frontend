import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './index';

const Routes = () => {
    return (
        <BrowserRouter>
            <AllRoutes />
        </BrowserRouter>
    );
};

export default Routes;
