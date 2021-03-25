import {selectSong} from './Actions'
import SongsList from './Components/SongsList'
import SongDetail from './Components/SongDetail'

function App() {

  return (
    <div className="App">
      <SongsList/>
      <SongDetail/>
    </div>
  );
}

export default App;
