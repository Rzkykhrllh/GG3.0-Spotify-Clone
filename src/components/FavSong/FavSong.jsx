import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import songs from './mostPlayedSong';
import Song from '../Song/Song';

function FavSong() {
  return (
    <Box p="3">
      <Heading as="h1" size="md" mb="4">
        Your Favorite Song
      </Heading>

      <Flex direction="column">
        {songs.map((song, idx) => (
          <Song
            haveHover
            title={song.title}
            thumbnail={song.thumbnail}
            artist={song.artist}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default FavSong;
