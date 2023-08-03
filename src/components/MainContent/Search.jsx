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

function Search() {
  const [input, setInput] = useState();

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log(input);
  };

  return (
    <Box p="3">
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

      {/* <TableSong songs={songs} /> */}
    </Box>
  );
}

export default Search;
