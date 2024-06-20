import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";

export default function Currenttrack() {
  // Destructure state and dispatch from the context provider
  const [{ token, currentPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    // Function to get the currently playing track from the Spotify API
    const getCurrentTrack = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );

      // If there is a currently playing track, update the state
      if (response.data !== "") {
        const currentPlaying = {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map((artist) => artist.name),
          image: response.data.item.album.images[2].url,
        };
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
    
      } else {
        // If there is no currently playing track, set the currentPlaying state to null
        dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
      }
    };

    // Call the function to get the current track
    getCurrentTrack();
  }, [token, dispatch]);

  // Log the current playing track for debugging


  return (
    <Container>
      {currentPlaying && (
        <div className="track">
          <div className="track__image">
            <img src={currentPlaying.image} alt="currentPlaying" />
          </div>
          <div className="track__info">
            <h4 className="track__name">{currentPlaying.name}</h4>
            <h6 className="track__artists">
              {currentPlaying.artists.join(", ")}
            </h6>
          </div>
        </div>
      )}
    </Container>
  );
}

// Styled component for the container
const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__info {
      color: white;
      gap: 0.3rem;
      h4 {
        font-weight: 600;
      }
      h6 {
        margin-top: -1.2rem;
        font-weight: 200;
        color: #b3b3b3;
      }
    }
  }
`;
