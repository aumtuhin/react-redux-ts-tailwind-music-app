import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { AppState, Song } from '../../shared/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';
import { useEffect, useState } from 'react';

const SongCard: React.FC<{ song: Song }> = ({ song }) => {
  const dispatch = useDispatch();
  const { setCurrentPlaylist, setIsPlaying, setCurrentSong, addFavouriteSong, removeFavouriteSong } = bindActionCreators(actionCreators, dispatch);
  const { currentSong, isPlaying } = useSelector((state: State) => state.music);
  const products: AppState = useSelector((state: State) => state.products);
  const { favouriteMusic } = useSelector((state: State) => state.favouriteMusic);
  const [favouriteMusicIds, setFavouriteMusicIds] = useState<number[]>([]);

  const ids = favouriteMusic.songs.map(song => song.id);


  useEffect(() => {
    setFavouriteMusicIds(ids);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favouriteMusic]);

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
      setIsPlaying(true);
    }
  }

  const handleFavouriteSong = (song: Song) => {
    if (favouriteMusicIds.includes(song.id)) {
      const filterdIds = ids.filter((id) => id !== song.id);
      setFavouriteMusicIds(filterdIds);
      removeFavouriteSong(song);
    } else {
      ids.push(song.id);
      setFavouriteMusicIds(ids);
      addFavouriteSong(song);
    }
  }

  return (
    <div className='h-56 w-56 transform transition duration-500 hover:scale-110'>
      <div
        style={{ backgroundImage: `url(${song.thumb})` }}
        className="bg-no-repeat bg-cover h-full w-full rounded-lg cursor-pointer"
      >
        {!favouriteMusicIds.includes(song.id) && <FontAwesomeIcon
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
        />}
        {favouriteMusicIds.includes(song.id) && <FontAwesomeIcon
          onClick={() => handleFavouriteSong(song)}
          className='
           absolute 
           text-slate-700
           h-7 m-2 
           transition 
           ease-in-in
           ease-in-out  
           delay-500 hover:h-8  
           hover:scale-3
           duration-700
           z-10'
          icon={faHeart}
        />}
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
        <span className=' text-slate-900 font-bold dark:text-slate-400'> Views:{song.views}</span>
      </p>
    </div>
  )
}

export default SongCard;