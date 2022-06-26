import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { AppState, Song } from '../../shared/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';

const SongCard: React.FC<{ song: Song }> = ({ song }) => {
  const dispatch = useDispatch();
  const { setCurrentPlaylist, setIsPlaying, setCurrentSong } = bindActionCreators(actionCreators, dispatch);
  const { currentSong, isPlaying } = useSelector((state: State) => state.music);
  // const { favouriteMusic } = useSelector((state: State) => state.favouriteMusic);
  const products: AppState = useSelector((state: State) => state.products);

  const handleCurrentSong = (song: Song) => {
    if (song.id === currentSong.id && isPlaying) {
      setIsPlaying(false);
    } else if (song.id === currentSong.id && !isPlaying) {
      setIsPlaying(true);
    }
    else {
      setCurrentSong(song);
      console.log(song);
      const currentPlayList = products.products.filter(songGroup => songGroup.name === song.playlist);
      setCurrentPlaylist(currentPlayList[0]);
    }
  }

  const handleFavouriteSong = (song: Song) => {
    console.log(song);
  }

  return (
    <div className='h-56 w-56 transform transition duration-500 hover:scale-110'>
      <div
        style={{ backgroundImage: `url(${song.thumb})` }}
        className="bg-no-repeat bg-cover h-full w-full rounded-lg cursor-pointer"
      >
        <FontAwesomeIcon
          onClick={() => handleFavouriteSong(song)}
          className='
           absolute 
          text-white
           h-7 m-2 
           transition 
           ease-in-in
           ease-in-out  
           delay-500 hover:h-8  
           hover:scale-3
           duration-700
           z-10'
          icon={faHeart}
        />
        <div className='absolute flex items-center justify-center w-full h-full'>
          {currentSong.id === song.id && isPlaying && <FontAwesomeIcon
            onClick={() => handleCurrentSong(song)}
            className='text-white 
            h-10 items-center 
            justify-center 
            transition 
            ease-in-out 
            delay-500 hover:h-14  
            hover:scale-11 
            duration-700'
            icon={faPauseCircle}
          />}
          {currentSong.id === song.id && !isPlaying && <FontAwesomeIcon
            onClick={() => handleCurrentSong(song)}
            className='text-white 
            h-10 items-center 
            justify-center 
            transition 
            ease-in-out 
            delay-500 hover:h-14  
            hover:scale-11 
            duration-700'
            icon={faPlayCircle}
          />}
          {currentSong.id !== song.id && <FontAwesomeIcon
            onClick={() => handleCurrentSong(song)}
            className='text-white 
            h-10 items-center 
            justify-center 
            transition 
            ease-in-out 
            delay-500 hover:h-14  
            hover:scale-11 
            duration-700'
            icon={faPlayCircle}
          />}
        </div>
      </div>
      <p className='text-slate-500 mt-2'>{song.name}</p>
      <p className='text-slate-500'>
        {song.singer}
        <span className=' text-slate-900 font-bold'> Views:{song.views}</span>
      </p>
    </div>
  )
}

export default SongCard;