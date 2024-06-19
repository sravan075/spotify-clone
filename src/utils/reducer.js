import { reducerCases } from "./Constants";

// Initial state object
export const initialState = {
    token: null,                     // Initial token is null
    playlists: [],                   // Initial playlists array is empty
    userInfo: null,                  // Initial userInfo is null
    selectedPlaylistId: '37i9dQZF1DWTqYqGLu7kTX',  // Initial selected playlist ID
    selectedPlaylist: null,          // Initial selected playlist is null
    currentPlaying: null,            // Initial currently playing track is null
    playerState: false,              // Initial player state is paused
};
 
// Reducer function to handle state changes
const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case reducerCases.SET_PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            };
        case reducerCases.SET_USER:
            return {
                ...state,
                userInfo: action.userInfo,
            };
        case reducerCases.SET_PLAYLIST:
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist,
            };
        case reducerCases.SET_PLAYING:
            return {
                ...state,
                currentPlaying: action.currentPlaying,
            };
        case reducerCases.SET_PLAYER_STATE:
            return {
                ...state,
                playerState: action.playerState,
            };
        case reducerCases.SET_PLAYLIST_ID:
            return {
                ...state,
                selectedPlaylistId: action.selectedPlaylistId,
            };
        default:
            return state;
    }
};

export default reducer;
