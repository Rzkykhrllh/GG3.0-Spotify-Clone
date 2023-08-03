import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const data = [
  {
    text: 'Home',
    icon: '',
  },
  {
    text: 'Search',
    icon: 'SearchIcon',
  },
];

function HomeAndSearch() {
  return (
    <div>
      {data.map((item, index) => (
        <Button
          justifyContent="flex-start"
          color={'white'}
          w="full"
          key={index}
          bg="transparent"
          leftIcon={<Icon as={item.icon} />}
          _hover={{ bg: 'green.400' }}
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
}

export default HomeAndSearch;
