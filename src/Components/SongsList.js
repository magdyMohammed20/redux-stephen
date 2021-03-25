import React from 'react'
import {connect} from 'react-redux'

function SongsList(props) {

    const renderList = () => {
        return props.songs.map(song => {
            return <div key={song.name} className="song">
                {song.name}
                <button>Select</button>
            </div>
        })
    }
    return (
        <div>
            {renderList()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    }    
}

export default connect(mapStateToProps)(SongsList)
