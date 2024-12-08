import React from 'react';
import { Box, Container, Heading, SimpleGrid, Text, VStack, Icon } from '@chakra-ui/react';
import { GiTrophyCup, GiTargetPrize, GiPodium } from 'react-icons/gi';

const Achievement = ({ title, description, icon }) => {
  return (
    <VStack
      bg="gray.700"
      p={8}
      borderRadius="lg"
      boxShadow="dark-lg"
      _hover={{ transform: 'translateY(-5px)', transition: '0.3s', bg: 'gray.600' }}
    >
      <Icon as={icon} w={10} h={10} color="green.400" />
      <Text fontWeight="bold" fontSize="xl" color="white">{title}</Text>
      <Text color="gray.300" align="center">{description}</Text>
    </VStack>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Juara 1 PON Junior",
      description: "Medali emas kategori recurve pada PON Junior 2023",
      icon: GiTrophyCup
    },
    {
      title: "Rekor Nasional",
      description: "Pemegang rekor nasional junior jarak 70 meter",
      icon: GiTargetPrize
    },
    {
      title: "Prestasi Internasional",
      description: "Finalis ASEAN School Games 2023",
      icon: GiPodium
    }
  ];

  return (
    <Box py={20} bg="gray.800">
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={12} color="white">Prestasi</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {achievements.map((achievement, index) => (
            <Achievement key={index} {...achievement} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Achievements; 