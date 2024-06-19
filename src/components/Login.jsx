import React from 'react';
import styled from 'styled-components'; // Import styled-components for CSS-in-JS styling.

export default function Login() {
  // Handle the button click to redirect the user to Spotify's authorization page
  const handleClick = () => {
    // Steps to get started:
    // 1. Create or sign in to your Spotify account and navigate to Developer Dashboard at https://developer.spotify.com/dashboard/applications.
    // 2. If you have a Premium Spotify account, you can utilize track skipping features(previous and next track).
    // 2. Create a new application and agree to the terms and conditions
    // 4. Set the Redirect URI to 'http://localhost:3000/' in your Spotify application settings
    // 5. Replace the clientID variable below with your actual Client ID obtained from Spotify Developer Dashboard

    const clientID = 'f5190efe04be418698a8f07794c6c609';                                               // Spotify application client ID
    const redirectURL = 'http://localhost:3000/';                      // Redirect URL after authorization
    const apiURL = 'https://accounts.spotify.com/authorize';           // Spotify authorization endpoint

    // List of permissions the application is requesting
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played',
      'playlist-read-private',
      'playlist-read-collaborative',
      'playlist-modify-private',
      'playlist-modify-public',
    ];

    // Redirect to Spotify's authorization page with necessary query parameters
    window.location.href = `${apiURL}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scope.join(
      ' '
    )}&response_type=token&show_dialogue=true`;
  };

  return (
    <Container>
      <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black.png" alt="Spotify Logo" />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

// Styled component for the container
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;

  // Style for the logo image
  img {
    height: 20vh;
  }

  // Style for the connect button
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #49f585;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;
