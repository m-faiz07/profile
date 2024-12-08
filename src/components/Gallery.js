import React from 'react';
import { Box, Container, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';

const Gallery = () => {
  // Ganti URL gambar sesuai dengan foto atlet
  const images = [
    {
      url: "https://via.placeholder.com/400x300",
      caption: "Latihan di Pelatnas"
    },
    {
      url: "https://via.placeholder.com/400x300",
      caption: "Kompetisi Nasional 2023"
    },
    {
      url: "https://via.placeholder.com/400x300",
      caption: "Podium PON Junior"
    },
    {
      url: "https://via.placeholder.com/400x300",
      caption: "Sesi Latihan"
    },
    {
      url: "https://via.placeholder.com/400x300",
      caption: "Tim Nasional Junior"
    },
    {
      url: "https://via.placeholder.com/400x300",
      caption: "Persiapan Kompetisi"
    }
  ];

  return (
    <Box py={20} bg="gray.900">
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={12} color="white">Galeri</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {images.map((image, index) => (
            <Box 
              key={index} 
              position="relative" 
              overflow="hidden" 
              borderRadius="lg"
              boxShadow="dark-lg"
              _hover={{ transform: 'scale(1.02)', transition: '0.3s' }}
            >
              <Image
                src={image.url}
                alt={image.caption}
                w="100%"
                h="300px"
                objectFit="cover"
                transition="0.3s"
              />
              <Text
                position="absolute"
                bottom="0"
                w="100%"
                bg="rgba(0,0,0,0.8)"
                color="white"
                p={3}
                textAlign="center"
                borderTop="2px"
                borderTopColor="green.400"
              >
                {image.caption}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Gallery; 