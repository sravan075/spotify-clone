import React from 'react';
import styled from 'styled-components';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import Playlists from './Playlists';

export default function Sidebar() {
  return (
    <Container>
      <div className="top__links">
        <div className="logo">
          {/* Spotify logo image */}
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
            alt="spotify"
          />
        </div>
        <ul>
          {/* Navigation Links */}
          <li>
            <span>
              <MdHomeFilled />
              Home
            </span>
          </li>
          <li>
            <span>
              <MdSearch />
              Search
            </span>
          </li>
          <li>
            <span>
              <IoLibrary />
              Your Library
            </span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  );
}

// Styled component for the sidebar container
const Container = styled.div`
  background-color: black; // Background color of the sidebar
  color: #b3b3b3; // Text color
  display: flex; // Use flexbox for layout
  flex-direction: column; // Arrange children in a column
  height: 100%; // Take full height of parent container
  width: 100%; // Take full width of parent container

  .top__links {
    display: flex; // Use flexbox for layout
    flex-direction: column; // Arrange children in a column
  }

  .logo {
    text-align: center; // Center align text
    margin: 1rem 0; // Margin spacing around the logo

    img {
      max-inline-size: 70%; // Limit the maximum inline size (width) of the logo
      block-size: auto; // Automatically adjust block size (height) of the logo
      margin-right: 2rem; // Right margin spacing around the logo
    }
  }

  ul {
    list-style-type: none; // Remove default list styles
    display: flex; // Use flexbox for layout
    flex-direction: column; // Arrange children in a column
    gap: 1rem; // Spacing between list items
    padding: 1rem; // Padding around the list

    li {
      display: flex; // Use flexbox for layout
      gap: 1rem; // Spacing between icon and text
      cursor: pointer; // Change cursor to pointer on hoverable items
      transition: 0.3s ease-in-out; // Smooth transition effect

      &:hover {
        color: white; // Change text color to white on hover
      }
    }
  }
`;
