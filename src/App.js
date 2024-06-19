import React, { useEffect } from 'react';
import Login from './components/Login';
import Spotify from './components/Spotify';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';

export default function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    // useEffect hook to run once when component mounts or 'token' changes
    const hash = window.location.hash;
    if (hash) {
      // Extract token from URL hash
      const token = hash.substring(1).split('&')[0].split('=')[1];
      // Dispatch action to set token in global state
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]); // Depend on 'token' and 'dispatch' to re-run useEffect when they change

  return (
    <div>
      {/* Conditional rendering based on whether 'token' is set */}
      {token ? <Spotify /> : <Login />}
    </div>
  );
}
