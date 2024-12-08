import React from 'react';
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box py={20} bg="gray.800">
      <Container maxW="container.xl">
        <VStack spacing={8}>
          <Heading textAlign="center" color="white">Hubungi Saya</Heading>
          <Text color="gray.300" textAlign="center" maxW="600px">
            Untuk kolaborasi, sponsorship, atau informasi lebih lanjut, silakan hubungi melalui:
          </Text>
          
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            <VStack
              bg="gray.700"
              p={8}
              borderRadius="lg"
              boxShadow="dark-lg"
              align="flex-start"
              spacing={4}
              _hover={{ bg: 'gray.600', transition: '0.3s' }}
            >
              <Heading size="md" color="white">Kontak Langsung</Heading>
              <HStack>
                <Icon as={FaPhone} color="green.400" />
                <Text color="gray.200">+62 123-4567-8900</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} color="green.400" />
                <Text color="gray.200">athlete@email.com</Text>
              </HStack>
            </VStack>

            <VStack
              bg="gray.700"
              p={8}
              borderRadius="lg"
              boxShadow="dark-lg"
              align="flex-start"
              spacing={4}
              _hover={{ bg: 'gray.600', transition: '0.3s' }}
            >
              <Heading size="md" color="white">Media Sosial</Heading>
              <Button
                leftIcon={<FaInstagram />}
                colorScheme="pink"
                variant="outline"
                w="100%"
                _hover={{ bg: 'pink.900' }}
              >
                @archer_username
              </Button>
              <Button
                leftIcon={<FaTwitter />}
                colorScheme="twitter"
                variant="outline"
                w="100%"
                _hover={{ bg: 'blue.900' }}
              >
                @archer_username
              </Button>
            </VStack>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact; 