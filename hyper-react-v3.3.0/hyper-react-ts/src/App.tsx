import Routes from 'routes/Routes';
import { configureFakeBackend } from 'helpers';

// For Default import Saas.scss
import 'assets/scss/Saas.scss';
// import 'assets/scss/Creative.scss';
// import 'assets/scss/Modern.scss';

const App = () => {
    configureFakeBackend();
    return <Routes />;
};

export default App;
