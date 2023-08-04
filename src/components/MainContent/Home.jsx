import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  ScrollView,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import TableSong from './TableSong';
import axios from 'axios';

function Home() {
  const [recomendationSongs, setrecomendationSongs] = useState([]);
  const [topSongs, setTopSongs] = useState([]);

  const getUserTopTracks = async access_token => {
    try {
      const url = 'https://api.spotify.com/v1/me/top/tracks';
      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          Authorization: `Bearer ${access_token}`,
        },
      });

      const row_songs = response.data.items;
      console.log(row_songs);

      const formatted_topSongs = row_songs.map(track => ({
        title: track.name,
        duration: track.duration_ms,
        artist: track.artists[0].name,
        album: track.album.name,
        thumbnail: track.album.images[0]?.url,
      }));

      setTopSongs(formatted_topSongs);

      const seed_tracks = row_songs.slice(0, 5).map(track => track.id);

      return seed_tracks;
    } catch (error) {
      console.error(error.response.data);
      return null;
    }
  };

  const getRecommendations = async (access_token, formatted_seed) => {
    try {
      const url = `https://api.spotify.com/v1/recommendations?&seed_tracks=${formatted_seed}`;
      const response = await axios.get(url, {
        headers: {
          Accept: 'application/json, text/plain, */*',
          Authorization: `Bearer ${access_token}`,
        },
      });

      return response.data.tracks;
    } catch (error) {
      console.error(error.response.data);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const access_token = localStorage.getItem('access_token');
        const seedTracks = await getUserTopTracks(access_token);

        if (seedTracks) {
          const formatted_seed = seedTracks.join(',');
          const recomendation_raw = await getRecommendations(
            access_token,
            formatted_seed
          );

          const formatted_recomendation = recomendation_raw.map(track => ({
            title: track.name,
            duration: track.duration_ms,
            artist: track.artists[0].name,
            album: track.album.name,
            thumbnail: track.album.images[0]?.url,
          }));

          setrecomendationSongs(formatted_recomendation);
        }
      } catch (error) {
        // Handle the error here if needed
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box p="3" overflowY="auto" maxHeight="100%">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Static</Tab>
          <Tab>For You!</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <TableSong songs={topSongs} />
          </TabPanel>
          <TabPanel>
            <TableSong songs={recomendationSongs} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Home;
