import {combineReducers} from 'redux'

// Song List Reducer
const songsReducer = () => {
    return [
        {name: "All Star" , duration: "3:00"},
        {name: "Macarena" , duration: "2:00"},
        {name: "No Scrubs" , duration: "1:45"}
    ]
}

// Selected Song Reducer
const selectedSongReducer = (selectedSong = null , action) => {
    if(action.type === "SELECT_SONG"){
        return action.payload
    }

    return selectedSong
}

// Export All Reducers Using combineReducers
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})