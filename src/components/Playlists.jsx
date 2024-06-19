import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import { reducerCases } from "../utils/Constants";
import { useStateProvider } from "../utils/StateProvider";

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider(); // Destructure state and dispatch function from custom state provider

  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get( // Fetch user playlists from Spotify API
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token, // Include authorization token in headers
            "Content-Type": "application/json",
          },
        }
      );
      
      const { items } = response.data; // Extract playlist items from API response
      const playlists = items.map(({ name, id }) => { // Map each playlist item to extract name and id
        return { name, id }; // Return object with name and id for each playlist
      });

      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists }); // Update playlists in global state
    };

    getPlaylistData(); // Fetch playlists when token or dispatch function changes
  }, [token, dispatch]); // Dependencies: token and dispatch function

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId }); // Update currently selected playlist ID in global state
  };

  return (
    <Container>
      <ul>
        {playlists.map(({ name, id }) => ( // Render each playlist as a list item
          <li key={id} onClick={() => changeCurrentPlaylist(id)}>
            {name}
          </li>
        ))}
      </ul>
    </Container>
  );
}

// Styled component for the playlist container
const Container = styled.div`
  color: #b3b3b3; // Text color
  height: 100%; // Full height
  overflow: hidden; // Hide overflow

  ul {
    list-style-type: none; // Remove default list styles
    display: flex; // Use flexbox for layout
    flex-direction: column; // Arrange items in a column
    gap: 1rem; // Gap between list items
    padding: 1rem; // Padding inside the list
    height: 55vh; // Set height of the list
    max-height: 100%; // Maximum height of the list
    overflow: auto; // Enable scrolling for overflow

    &::-webkit-scrollbar { // Customize scrollbar for WebKit browsers
      width: 0.7rem; // Width of the scrollbar

      &-thumb { // Thumb of the scrollbar
        background-color: rgba(255, 255, 255, 0.6); // Color of the scrollbar thumb
      }
    }

    li {
      transition: 0.3s ease-in-out; // Smooth transition effect on interaction
      cursor: pointer; // Pointer cursor on hover

      &:hover {
        color: white; // Change text color to white on hover
      }
    }
  }
`;
