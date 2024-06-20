import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState
import styled from 'styled-components'; // Importing styled-components for styling
import { useStateProvider } from '../utils/StateProvider'; // Importing the state provider for managing global state
import axios from 'axios'; // Importing axios for making HTTP requests

// Function to convert milliseconds to minutes and seconds
const msToMinutesAndSeconds = (ms) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

// Slider component for displaying a styled progress bar and making an API request
export default function Slider() {
  // Using the global state provider to get the token
  const [{ token }] = useStateProvider();
  const [progress, setProgress] = useState(0);
  const [progressMs, setProgressMs] = useState(0);
  const [durationMs, setDurationMs] = useState(0);

  // Function to set the slider and fetch audio analysis data from Spotify API
  const setSlider = async () => {
    try {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing", // Spotify API endpoint for currently playing track
        {
          headers: {
            Authorization: "Bearer " + token, // Include authorization token in headers
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response); // Log the entire response to see its structure

      // Extract progress_ms and duration_ms from the API response
      const progressMs = response.data?.progress_ms;
      const durationMs = response.data?.item?.duration_ms; // Accessing duration_ms from the item object

      console.log({ progressMs, durationMs }); // Log progressMs and durationMs

      if (progressMs && durationMs) {
        const calculatedProgress = (progressMs / durationMs) * 100;
        setProgress(calculatedProgress);
        setProgressMs(progressMs);
        setDurationMs(durationMs);
        console.log(calculatedProgress);
      }
    } catch (error) {
      console.error("Error fetching currently playing track data:", error);
    }
  };
  
  // useEffect hook to call setSlider on component mount
  useEffect(() => {
    if (token) {
      setSlider(); // Call setSlider when the component mounts or when token changes
    }
  }, [token]);

  return (
    <Container>
      {/* Timestamp showing current progress */}
      <TimeStamp1>{msToMinutesAndSeconds(progressMs)}</TimeStamp1>
      {/* Styled progress bar */}
      <StyledProgress className="progress is-small" value={progress} max="100" />
      {/* Timestamp showing total duration */}
      <TimeStamp2>{msToMinutesAndSeconds(durationMs)}</TimeStamp2>
    </Container>
  );
}

// Styled component for the container
const Container = styled.div`
  display: grid; // Use grid layout for better control over positioning
  grid-template-columns: auto 1fr auto; // Three columns: left timestamp, progress bar, right timestamp
  align-items: center; // Center items vertically
  margin-left: 18rem; // Adjusted margin for positioning
`;

// Styled component for the progress bar
const StyledProgress = styled.progress`
  -webkit-appearance: none; // Remove default appearance for WebKit browsers
  appearance: none; // Remove default appearance
  background: transparent; // Transparent background
  border-radius: 5rem; // Rounded corners
  cursor: pointer; // Pointer cursor on hover
  width: 36rem; // Width of the progress bar
  height: 0.2rem; // Height of the progress bar
  margin-top: 0.5rem; // Margin at the top

  /* Styling for the progress bar color */
  &::-webkit-progress-bar {
    background-color: #969696; // Background color for the progress bar
  }
  
  &::-webkit-progress-value {
    background-color: white; // Color for the filled part of the progress bar
  }
  
  &::-moz-progress-bar {
    background-color: white; // Color for the filled part of the progress bar in Firefox
  }
`;

// Styled component for the timestamps
const TimeStamp1 = styled.p`
  margin: 0; // Remove default margin
  padding: 0 1rem; // Padding for spacing
  margin-left: 9rem; // Adjusted margin for positioning
  font-size: 0.9rem; // Font size
  color: white; // Text color
`;

const TimeStamp2 = styled.p`
  margin: 0; // Remove default margin
  padding: 0 1rem; // Padding for spacing
  margin-right: 26rem; // Adjusted margin for positioning
  font-size: 0.9rem; // Font size
  color: white; // Text color
`;
