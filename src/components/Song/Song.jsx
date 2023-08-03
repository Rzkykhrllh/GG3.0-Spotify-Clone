import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function Song({ thumbnail, title, artist, haveHover = false }) {
  const style = {
    gap: '3',

    mx: '-3',
    px: '3',
    py: '3',
  };

  if (haveHover) {
    style._hover = {
      bg: 'green.600',
    };
  }

  return (
    <Flex {...style}>
      <Image src={thumbnail} w="12" h="12" borderRadius="3" />
      <Flex direction="column" alignContent="center" justifyContent="end">
        <Text as="b">{title}</Text>
        <Text fontWeight="normal">{artist}</Text>
      </Flex>
    </Flex>
  );
}

export default Song;
