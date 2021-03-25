## Project Structure

/src

    - Actions (Contains Action Creators)
        - index.js
         
    - Components
    
    - Reducers


## Steps Of App

    - Create [selectSong] Action Creator Inside /Actions/index.js File
    - Import [selectSong] Action Inside App.js

    - Create [songsReducer] Reducer Inside /Reducers/index.js File
    - Create [selectedSongReducer] Reducer Inside /Reducers/index.js File

    - Install [Redux , react-redux]
    - Import [combineReducers] Inside /Reducers/index.js File
    - Import [Provider , createStore] Inside ./src/index.js
    - Import All Created Reducers From /Reducers/index.js File Inside ./src/index.js
    - Setup Provider , createStore , Reducers With Each Other Inside ./src/index.js