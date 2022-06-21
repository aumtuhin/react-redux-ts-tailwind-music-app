import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../../shared/interfaces';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const SongCard: React.FC<{ song: Song }> = ({ song }) => {
  const dispatch = useDispatch();
  const { setLikedSongs } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='h-56 w-56 transform transition duration-500 hover:scale-110'>
      <div
        style={{ backgroundImage: `url(${song.thumb})` }}
        className="bg-no-repeat bg-cover h-full w-full rounded-lg cursor-pointer"
      >
        <FontAwesomeIcon
          onClick={() => setLikedSongs(song)}
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
          <FontAwesomeIcon
            className='text-white 
            h-10 items-center 
            justify-center 
            transition 
            ease-in-out 
            delay-500 hover:h-14  
            hover:scale-11 
            duration-700'
            icon={faPlayCircle}
          />
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