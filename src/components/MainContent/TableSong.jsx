import {
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Song from '../Song/Song';

function TableSong({ songs }) {
  return (
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
                <Text fontWeight="normal" noOfLines={2}>
                  {song.album}
                </Text>
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
  );
}

export default TableSong;
