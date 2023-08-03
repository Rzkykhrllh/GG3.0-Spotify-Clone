import { PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TableSong from './TableSong';
import axios from 'axios';

function Search() {
  const [input, setInput] = useState();
  const [songs, setSongs] = useState([]);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    try {
      let url = 'https://api.spotify.com/v1/search?q=' + input + '&type=track';

      const access_token = localStorage.getItem('access_token');

      console.log(access_token, input);
      console.log(input);

      axios
        .get(url, {
          headers: {
            Accept: 'application/json, text/plain, */*',
            Authorization: `Bearer ${access_token}`,
          },
        })
        .then(response => {
          // Handle the successful response here

          const row_songs = response.data.tracks.items;
          const formatted_songs = [];

          for (let i = 0; i < row_songs.length; i++) {
            formatted_songs.push({
              title: row_songs[i].name,
              duration: row_songs[i].duration_ms,
              artist: row_songs[i].artists[0].name,
              album: row_songs[i].album.name,
              thumbnail: row_songs[i].album.images[0]?.url,
            });
          }

          console.log(formatted_songs);
          setSongs(formatted_songs);
        })
        .catch(error => {
          // Handle the error here
          console.error(error.response.data);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box p="3" overflowY="auto" maxH="100%">
      <Heading as="h1" size="md" mb="4">
        Search Guys
      </Heading>

      <form onSubmit={handleSubmit}>
        <Flex alignItems="center">
          <Input
            flex="1"
            mr={4}
            placeholder="Enter text..."
            value={input}
            onChange={handleInputChange}
          />
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Flex>
      </form>

      <TableSong songs={songs} />
    </Box>
  );
}

export default Search;
