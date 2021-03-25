import React from 'react'
import {connect} from 'react-redux'

function SongsList(props) {
    return (
        <div>
            SongsList
        </div>
    )
}

const mapStateToProps = state => {
    return {
        songs: state.songs
    }    
}

export default connect(mapStateToProps)(SongsList)
