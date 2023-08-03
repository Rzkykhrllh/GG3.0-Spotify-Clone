import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  GridItem,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Logo } from '../Logo';

import '../App.css';
import HomeAndSearch from '../components/HomeAndSearch';
import FavSong from '../components/FavSong/FavSong';
import MainContent from '../components/MainContent/MainContent';

import { getTokenFromUrl } from '../spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function Main() {
  const [spotifyToken, setSpotifyToken] = useState('');

  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    console.log('what we get after login', getTokenFromUrl());

    const _spotifyToken = getTokenFromUrl().access_token;

    window.location.hash = '';

    console.log('Spotify access token', _spotifyToken);

    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);
      spotify.setAccessToken(_spotifyToken);

      spotify.getMe().then(user => {
        console.log(`Im the`, user);
      });
    }

    return () => {};
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"header main"
                  "nav main"
                  "footer footer"`}
        gridTemplateRows={'max-content 1fr 30px'}
        gridTemplateColumns={'25% 1fr'}
        h="100vh"
        gap="3"
        color="white"
        fontWeight="bold"
        bg="black"
      >
        <GridItem ml="3" mt="3" area={'header'} bg="gray.700" borderRadius={4}>
          <HomeAndSearch setIsHome={setIsHome} />
        </GridItem>
        <GridItem ml="3" bg="gray.700" borderRadius={4} area={'nav'}>
          <FavSong />
        </GridItem>
        <GridItem
          pl="2"
          mt="3"
          mr="3"
          bg="gray.700"
          borderRadius={4}
          area={'main'}
        >
          <MainContent isHome={isHome} />
        </GridItem>
        <GridItem pl="2" bg="gray.700" borderRadius={4} area={'footer'}>
          Footer
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default Main;
