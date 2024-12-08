import React from 'react';
import { Box, Heading, Container, Text, Button, Stack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Container maxW="container.xl" pt={32}>
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          National Junior Archer <br />
          <Text as="span" color="green.400">
            Championship Medalist
          </Text>
        </Heading>
        <Text color="gray.500">
          Dedicated archer with passion for precision and excellence. 
          Representing Indonesia in national junior archery competitions.
        </Text>
        <Stack
          direction="column"
          spacing={3}
          align="center"
          alignSelf="center"
          position="relative"
        >
          <Button
            colorScheme="green"
            bg="green.400"
            rounded="full"
            px={6}
            _hover={{
              bg: 'green.500',
            }}
          >
            View Achievements
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Hero; 