import { Box } from '@chakra-ui/react';
import React from 'react';
import { loginUrl } from '../spotify/spotify';

function Login() {
  return (
    <Box>
      <a href={loginUrl} id="signButton">
        Login Spotify
      </a>
    </Box>
  );
}

export default Login;
