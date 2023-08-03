import {
  Box,
  Heading,
  Table,
  TableContainer,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
  Flex,
  Image,
  Text,
  Icon,
} from '@chakra-ui/react';
import React from 'react';

import songs from './song';
import Song from '../Song/Song';

import { AiOutlineHeart } from 'react-icons/ai';

function MainContent() {
  return (
    <Box p="3">
      <Heading as="h1" size="md" mb="4">
        All the song
      </Heading>

      <TableContainer>
        <Table variant="simple" colorScheme="green.600">
          <Thead>
            <Tr>
              <Th width="3%" p="0">
                #
              </Th>
              <Th width="40%" px="0">
                Title
              </Th>
              <Th width="30%" px="0">
                Album
              </Th>
              <Th width="20%" px="0">
                Duration
              </Th>
              <Th width="3%" px="0">
                {/* <Icon as="AiOutlineHeart" /> */}
                <AiOutlineHeart />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, idx) => (
              <tr>
                <td>
                  <Text fontWeight="normal">{idx + 1}</Text>
                </td>
                <td>
                  <Song
                    title={song.title}
                    thumbnail={song.thumbnail}
                    artist={song.artist}
                  />
                </td>
                <td>
                  <Text fontWeight="normal">{song.album}</Text>
                </td>
                <td>
                  <Text fontWeight="normal">{song.duration}</Text>
                </td>
                <td>
                  <AiOutlineHeart />
                </td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MainContent;
