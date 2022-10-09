import Routes from 'routes/Routes';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'assets/scss/Saas.scss';

const App = () => {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: '',
        button: {
          bg: 'white',
          border: 'none',
        },
        textarea: {
          color: 'white',
        },
      }),
    },
  });

  return (
    <ChakraProvider resetCSS={false} theme={theme}>
      <Routes />
    </ChakraProvider>
  );
};

export default App;
