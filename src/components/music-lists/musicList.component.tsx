import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppState, Song } from '../../shared/interfaces';
import { actionCreators, State } from '../../state';

const MusicLists = () => {
  const dispatch = useDispatch();
  const { setCurrentPlaylist, setIsPlaying, setCurrentSong } = bindActionCreators(actionCreators, dispatch);
  const { currentSong, isPlaying } = useSelector((state: State) => state.music);
  // const { favouriteMusic } = useSelector((state: State) => state.favouriteMusic);
  const products: AppState = useSelector((state: State) => state.products);
  const currentPlaylist = useSelector((state: State) => state.music.curretPlayList);

  const handleCurrentSong = (song: Song) => {
    if (song.id === currentSong.id && isPlaying) {
      setIsPlaying(false);
    } else if (song.id === currentSong.id && !isPlaying) {
      setIsPlaying(true);
    }
    else {
      setCurrentSong(song);
      const currentPlayList = products.products.filter(songGroup => songGroup.name === song.playlist);
      setCurrentPlaylist(currentPlayList[0]);
    }
  }


  return (
    <div className='w-1/2 h-screen pb-32'>
      {currentPlaylist && currentPlaylist.songs.map((song) => (
        <div className='flex items-center justify-between py-2 px-2 bg-slate-100 mt-2 rounded dark:bg-slate-800 cursor-pointer'
          key={song.id}
          onClick={() => handleCurrentSong(song)}>
          <div className='flex item-center'>
            <img className='w-12 h-12 rounded object-cover' src={song.thumb} alt="thumb" />
            <div className='ml-2 dark:text-slate-400'>
              <h5>{song.name}</h5>
              <p>{song.singer}</p>
            </div>
          </div>
          <div>
            <button>
              <FontAwesomeIcon className=' text-slate-500 h-7' icon={faPlayCircle} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MusicLists