import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'white'
      }
    }
  },
  colors: {
    brand: {
      primary: '#48BB78',
      secondary: '#38A169'
    }
  }
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Navbar />
        <Hero />
        <Achievements />
        <Gallery />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
