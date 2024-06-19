import { createContext, useContext, useReducer } from "react";

// Step 1: Create a Context for managing global state
export const StateContext = createContext();

// Step 2: Define a StateProvider component to wrap the application and provide the state
export const StateProvider = ({ children, initialState, reducer }) => (
  // UseReducer hook provides state management capabilities
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* Render children components inside the Provider */}
    {children}
  </StateContext.Provider>
);

// Step 3: Custom hook to easily access the state and dispatch actions anywhere in the app
export const useStateProvider = () => useContext(StateContext);
