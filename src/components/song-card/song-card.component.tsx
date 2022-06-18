import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../../shared/interfaces';

const SongCard: React.FC<{song: Song}> = ({song}) => {
  return (
    <div className='h-56 w-56 m-4'>
      <div
        style={{ backgroundImage: `url(${song.thumb})` }}
        className="bg-no-repeat bg-cover h-full w-full rounded-lg cursor-pointer relative"
      >
        <FontAwesomeIcon
          className='absolute text-white h-7 m-2 items-center justify-center transition ease-in-out delay-500 hover:h-14  hover:scale-11 duration-700'
          icon={faHeart} />
        <div className='absolute flex items-center justify-center m-auto w-full h-full'>
          <FontAwesomeIcon
            className='text-white h-10 items-center justify-center transition ease-in-out delay-500 hover:h-14  hover:scale-11 duration-700'
            icon={faPlayCircle}
          />
        </div>
      </div>
      <h4 className='text-slate-500' >{song.name}</h4>
      <p className='text-slate-500' >{song.singer} <span className=' text-slate-900 font-bold'>{song.views}</span> </p>
    </div>
  )
}

export default SongCard;