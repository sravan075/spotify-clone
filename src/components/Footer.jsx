import React from "react";
import styled from "styled-components";
import Currenttrack from "./CurrentTrack"; // Import the CurrentTrack component
import PlayerControls from "./PlayerControls"; // Import the PlayerControls component
import Volume from "./Volume"; // Import the Volume component
import Slider from "./Slider";
// import {CiVolumeMute} from "react-icons/ci"
// import {LuVolume,LuVolume1,LuVolume2} from "react-icons/lu"

// Footer component that renders the current track, player controls, and volume control
export default function Footer() {
  return (
    <Container>
      <div className="controllers">
      <Currenttrack /> {/* Component to display the currently playing track */}
      <PlayerControls /> {/* Component to control playback (play, pause, next, etc.) */}
      <div className="vol">
      <Volume /> {/* Component to control the volume */}
      </div>
      
      </div>
      <div />
      <div className="progress">
      <Slider />
      </div>
    </Container>
  );
}

// Styled component for the container of the footer
const Container = styled.div`
  height: 100%; // Full height
  width: 100%; // Full width
  background-color: #181818; // Background color of the footer
  border-top: 1px solid #282828; // Top border for separation
  .controllers{
  height: 60%;
  display: grid; // Use grid layout
  grid-template-columns: 1fr 2fr 1fr; // Define three columns with different widths
  align-items: center; // Center items vertically
  justify-content: center; // Center items horizontally
  padding: 0 1rem; // Padding on left and right  */
  progress{
    justify-content: center;
  }
  }

`;
