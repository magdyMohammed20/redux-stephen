import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../Actions/'

function SongsList(props) {

    const renderList = () => {
        return props.songs.map(song => {
            return <div key={song.name} className="song">
                {song.name}
                <button onClick={() => props.selectSong(song)}>Select</button>
            </div>
        })
    }
    return (
        <div>
            {renderList()}
            {(props.selectedSong && props.selectSong !== null) && "Selected Song Is:" + props.selectedSong.name}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        songs: state.songs,
        selectedSong: state.selectedSong
    }    
}

export default connect(mapStateToProps , {selectSong})(SongsList)
