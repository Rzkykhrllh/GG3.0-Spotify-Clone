import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import songs from './mostPlayedSong';

function FavSong() {
  return (
    <Box p="3">
      <Heading as="h1" size="md" mb="4">
        Your Favorite Song
      </Heading>

      <Flex direction="column">
        {songs.map((song, idx) => (
          <Flex
            gap={3}
            _hover={{
              bg: 'green.600',
            }}
            mx="-3"
            px="3"
            py="3"
          >
            <Image src={song.thumbnail} w="12" h="12" borderRadius="3" />
            <Flex
              direction="column"
              // bg="red.200"
              alignContent="center"
              justifyContent="end"
            >
              <Text as="b">{song.title}</Text>
              <Text fontWeight="normal">{song.artist}</Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export default FavSong;
