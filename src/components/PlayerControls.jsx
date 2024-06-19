import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BsShuffle } from 'react-icons/bs';
import { IoPlayCircleSharp, IoPauseCircleSharp } from 'react-icons/io5';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants';

export default function PlayerControls() {
  const [{ token, playerState }, dispatch] = useStateProvider(); // Destructure state and dispatch function from custom state provider

  // Function to change track (previous or next)
  const changeTrack = async (type) => {
    try {
      // Send a POST request to change the current track to previous or next
      await axios.post(
        `https://api.spotify.com/v1/me/player/${type}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include authorization token in headers
            'Content-Type': 'application/json',
          },
        }
      );

      // Fetch currently playing track after changing track
      const response = await axios.get(
        'https://api.spotify.com/v1/me/player/currently-playing',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // If there is a currently playing track, update it in the global state
      if (response.data !== '') {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };

        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      } else {
        // If no track is playing, set current playing to null in the global state
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    } catch (error) {
      console.error('Error fetching data:', error); // Log any errors fetching data
    }
  };

  // Function to change player state (play/pause)
  const changeState = async () => {
    try {
      // Determine whether to play or pause based on current player state
      const state = playerState ? 'pause' : 'play';
      
      // Send a PUT request to change player state (play or pause)
      await axios.put(
        `https://api.spotify.com/v1/me/player/${state}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include authorization token in headers
            'Content-Type': 'application/json',
          },
        }
      );

      // Toggle player state in the global state
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState });
    } catch (error) {
      console.error('Error changing state:', error); // Log any errors changing player state
    }
  };

  return (
    <Container>
      {/* Shuffle button */}
      <div className="shuffle">
        <BsShuffle />
      </div>
      {/* Previous track button */}
      <div className="previous">
        <CgPlayTrackPrev onClick={() => changeTrack('previous')} />
      </div>
      {/* Play/pause button */}
      <div className="state" onClick={changeState}>
        {playerState ? (
          // Pause icon when player is playing
          <IoPauseCircleSharp style={{ fontSize: '3rem' }} />
        ) : (
          // Play icon when player is paused
          <IoPlayCircleSharp style={{ fontSize: '3rem' }} />
        )}
      </div>
      {/* Next track button */}
      <div className="next">
        <CgPlayTrackNext onClick={() => changeTrack('next')} />
      </div>
      {/* Repeat button */}
      <div className="repeat">
        <FiRepeat />
      </div>
    </Container>
  );
}

// Styled component for the player controls container
const Container = styled.div`
  display: flex; // Use flexbox for layout
  align-items: center; // Align items vertically
  justify-content: center; // Center items horizontally
  gap: 1rem; // Gap between items

  svg {
    color: #b3b3b3; // Default icon color
    transition: 0.2s ease-in-out; // Smooth transition effect for icon color change
  }

  svg:hover {
    color: white; // Change icon color to white on hover
  }

  .state svg {
    color: white; // Icon color for play/pause button
  }

  .previous,
  .next,
  .state {
    font-size: 2rem; // Font size for previous, next, and state icons
  }
`;
