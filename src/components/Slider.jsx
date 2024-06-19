import React from 'react';
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';

export default function Slider() {
//     const [{ token }] = useStateProvider();

//   const setSlider = async () => {
//     const response = await axios.get( // Fetch user playlists from Spotify API
//         "https://api.spotify.com/v1/audio-analysis/11dFghVXANMlKmJXsNCbNl",
//         {
//           headers: {
//             Authorization: "Bearer " + token, // Include authorization token in headers
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("hi :",response.data)

//     //   dispatch({ type: reducerCases.SET_PLAYLISTS, playlists }); // Update playlists in global state
//   }
  

  return (
    <Container>
      <StyledProgress className="progress is-small" value="20" max="100" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Changed from align-content to align-items for centering */
`;

const StyledProgress = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  width: 36rem;
  height: 0.2rem;
  margin-top: 0.5rem;

  /* Adjust height to match the "is-small" appearance */
  
  /* Styling for the progress bar color */
  &::-webkit-progress-bar {
    background-color: #b3b3b3;
  }
  
  &::-webkit-progress-value {
    background-color: #e1e1e1; /* Adjust color as per your design */
  }
  
  &::-moz-progress-bar {
    background-color: #e1e1e1; /* Adjust color as per your design */
  }
`;
