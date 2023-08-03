import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import TableSong from './TableSong';

import songs from './song';

function Home() {
  return (
    <Box p="3" overflowY="auto" maxH="100%">
      <Heading as="h1" size="md" mb="4">
        All the song
      </Heading>

      <TableSong songs={songs} />
    </Box>
  );
}

export default Home;
