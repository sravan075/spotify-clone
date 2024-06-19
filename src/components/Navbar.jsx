import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import { CgProfile } from "react-icons/cg"; // Import the profile icon

// Navbar component that contains a search bar and user profile information
export default function Navbar({ navBackground }) {
  // Destructure userInfo from the state provider
  const [{ userInfo }] = useStateProvider();
  return (
    <Container navBackground={navBackground}>
      <div className="search__bar">
        <FaSearch /> {/* Search icon */}
        <input type="text" placeholder="Artists, songs, or podcasts" /> {/* Search input */}
      </div>
      <div className="avatar">
        <a href={userInfo?.userUrl}>
          <CgProfile /> {/* Profile icon */}
          <span>{userInfo?.name}</span> {/* Display user's name */}
        </a>
      </div>
    </Container>
  );
}

// Styled component for the container of the navbar
const Container = styled.div`
  display: flex; // Use flexbox for layout
  justify-content: space-between; // Space out the search bar and profile
  align-items: center; // Center items vertically
  padding: 2rem; // Padding inside the container
  height: 15vh; // Set the height of the navbar
  position: sticky; // Make the navbar sticky at the top
  top: 0; // Stick to the top of the viewport
  transition: 0.3s ease-in-out; // Smooth transition for background color changes
  background-color: ${({ navBackground }) =>
    navBackground ? "rgba(0, 0, 0, 0.7)" : "transparent"}; // Conditional background color

  .search__bar {
    background-color: white; // Background color of the search bar
    width: 30%; // Width of the search bar
    padding: 0.4rem 1rem; // Padding inside the search bar
    border-radius: 2rem; // Rounded corners
    display: flex; // Use flexbox for layout
    align-items: center; // Center items vertically
    gap: 0.5rem; // Gap between the search icon and input

    input {
      border: none; // Remove border from input
      height: 2rem; // Set the height of the input
      width: 100%; // Take full width of the container
      &:focus {
        outline: none; // Remove outline when input is focused
      }
    }
  }

  .avatar {
    background-color: black; // Background color of the avatar container
    padding: 0.3rem 0.4rem; // Padding inside the avatar container
    padding-right: 1rem; // Additional padding on the right
    border-radius: 2rem; // Rounded corners
    display: flex; // Use flexbox for layout
    justify-content: center; // Center items horizontally
    align-items: center; // Center items vertically

    a {
      display: flex; // Use flexbox for layout
      justify-content: center; // Center items horizontally
      align-items: center; // Center items vertically
      gap: 0.5rem; // Gap between the profile icon and name
      text-decoration: none; // Remove underline from link
      color: white; // White text color
      font-weight: bold; // Bold font weight

      svg {
        font-size: 1.3rem; // Set the size of the profile icon
        background-color: #282828; // Background color of the profile icon
        padding: 0.2rem; // Padding inside the profile icon
        border-radius: 1rem; // Rounded corners
        color: #c7c5c5; // Color of the profile icon
      }
    }
  }
`;
