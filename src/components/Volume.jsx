import { useStateProvider } from '../utils/StateProvider'; // Importing the state provider for managing global state
import styled from 'styled-components'; // Importing styled-components for styling
import axios from 'axios'; // Importing axios for making HTTP requests
import React from 'react'; // Importing React

export default function Volume() {
  // Using the global state provider to get the token
  const [{ token }] = useStateProvider();

  // Function to handle volume change
  const handleVolumeChange = async (e) => {
    // Making a PUT request to Spotify API to change the volume
    await axios.put(
      "https://api.spotify.com/v1/me/player/volume", // URL for the Spotify API endpoint
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value), // Setting the volume percentage from the input value
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token, // Authorization header with the token
        },
      }
    );
  };

  return (
    <Container>
      {/* Input slider for volume control */}
      <input type="range" onMouseUp={(e) => handleVolumeChange(e)} min={0} max={100} />
    </Container>
  );
}

// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: flex-end; // Align items to the end of the container
  align-content: center; // Center align content
  margin-right: 5rem; // Margin on the right

  // Styles for the input range slider
  input[type="range"] {
    height: 1rem;  // Height of the slider
    -webkit-appearance: none; // Removing default appearance for better styling
    margin: 0.625rem 0; // Margin for the slider
    width: 8rem; // Width of the slider
    background: none; // No background
  }

  // Removing outline on focus
  input[type="range"]:focus {
    outline: none;
  }

  // Styles for the slider track in WebKit browsers
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%; // Full width
    height: 0.375rem; // Track height
    cursor: pointer;
    animate: 0.2s; // Animation duration
    box-shadow: 0px 0px 0px #000000; // No box shadow
    background: #b3b3b3; // Background color
    border-radius: 50rem; // Rounded corners
    border: 0px solid #000000; // No border
  }

  // Styles for the slider thumb in WebKit browsers
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000; // No box shadow
    border: 0px solid #b3b3b3; // No border
    height: 1.125rem; // Thumb height
    width: 1.125rem; // Thumb width
    border-radius: 1.125rem; // Fully rounded corners
    background: #b3b3b3; // Background color
    cursor: pointer; // Cursor pointer
    -webkit-appearance: none; // Removing default appearance
    margin-top: -0.375rem; // Adjusting position
  }

  // Styles for the slider track on focus in WebKit browsers
  input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #b3b3b3; // Background color
  }

  // Styles for the slider track in Mozilla browsers
  input[type="range"]::-moz-range-track {
    width: 100%; // Full width
    height: 0.375rem; // Track height
    cursor: pointer;
    animate: 0.2s; // Animation duration
    box-shadow: 0px 0px 0px #000000; // No box shadow
    background: #b3b3b3; // Background color
    border-radius: 0px; // No border radius
    border: 0px solid #000000; // No border
  }

  // Styles for the slider thumb in Mozilla browsers
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000; // No box shadow
    border: 0px solid #b3b3b3; // No border
    height: 1.125rem; // Thumb height
    width: 1.125rem; // Thumb width
    border-radius: 1.125rem; // Fully rounded corners
    background: #b3b3b3; // Background color
    cursor: pointer; // Cursor pointer
  }

  // Styles for the slider track in MS browsers
  input[type="range"]::-ms-track {
    width: 100%; // Full width
    height: 0.375rem;  // Track height
    cursor: pointer;
    animate: 0.2s; // Animation duration
    background: transparent; // Transparent background
    border-color: transparent; // Transparent border
    color: transparent; // Transparent color
  }

  // Styles for the lower fill of the slider in MS browsers
  input[type="range"]::-ms-fill-lower {
    background: #b3b3b3; // Background color
    border: 0px solid #000000; // No border
    border-radius: 0px; // No border radius
    box-shadow: 0px 0px 0px #000000; // No box shadow
  }

  // Styles for the upper fill of the slider in MS browsers
  input[type="range"]::-ms-fill-upper {
    background: #b3b3b3; // Background color
    border: 0px solid #000000; // No border
    border-radius: 0px; // No border radius
    box-shadow: 0px 0px 0px #000000; // No box shadow
  }

  // Styles for the slider thumb in MS browsers
  input[type="range"]::-ms-thumb {
    margin-top: 0.0625rem; // Adjusting position
    box-shadow: 0px 0px 0px #000000; // No box shadow
    border: 0px solid #b3b3b3; // No border
    height: 1.125rem; // Thumb height
    width: 1.125rem; // Thumb width
    border-radius: 1.125rem; // Fully rounded corners
    background: #b3b3b3; // Background color
    cursor: pointer; // Cursor pointer
  }

  // Styles for the lower fill on focus in MS browsers
  input[type="range"]:focus::-ms-fill-lower {
    background: #b3b3b3; // Background color
  }

  // Styles for the upper fill on focus in MS browsers
  input[type="range"]:focus::-ms-fill-upper {
    background: #b3b3b3; // Background color
  }
`;
