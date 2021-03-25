import React from 'react'
import {connect} from 'react-redux'

function SongDetail({song}) {

    if(!song){
        return <div>Please Select Song</div>
    }

    return (
        <div>
            {"Selected Song Is:" + song.name + " Duration Is: " + song.duration}
        </div>
    )
    

    
}

const mapStateToProps = state => {
    return {
        song: state.selectedSong
    }
}
export default connect(mapStateToProps)(SongDetail)
