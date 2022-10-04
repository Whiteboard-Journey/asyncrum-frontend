import Routes from 'routes/Routes';
import { ChakraProvider } from '@chakra-ui/react';
import 'assets/scss/Saas.scss';

const App = () => {
  return (
    <ChakraProvider>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
