import { Box, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import TableSong from './TableSong';
import axios from 'axios';

function Home() {
  const [songs, setSongs] = useState([]);

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

          setSongs(formatted_recomendation);
        }
      } catch (error) {
        // Handle the error here if needed
        console.error(error);
      }
    };

    fetchData();
  }, []);

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
