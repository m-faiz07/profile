import React from 'react';
import { Box, Flex, Button, Stack } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Box
      px={4}
      position="fixed"
      width="100%"
      bg="gray.900"
      boxShadow="dark-lg"
      zIndex="999"
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box fontWeight="bold" fontSize="xl" color="green.400">ARCHER NAME</Box>
        <Stack direction="row" spacing={4}>
          <Button variant="ghost" _hover={{ bg: 'green.700' }}>Home</Button>
          <Button variant="ghost" _hover={{ bg: 'green.700' }}>Achievements</Button>
          <Button variant="ghost" _hover={{ bg: 'green.700' }}>Gallery</Button>
          <Button variant="ghost" _hover={{ bg: 'green.700' }}>Contact</Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar; 