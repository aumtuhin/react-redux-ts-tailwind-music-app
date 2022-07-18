import { useSelector } from 'react-redux';
import { State } from '../../state';
import playlistImg from '../../assets/playlist.jpeg';

const MusicThumb = () => {
    const { currentSong } = useSelector((state: State) => state.music);
    console.log(currentSong);
    return (
        <div className='ml-40 h-96 w-96 py-2 px-2'>
            {Object.keys(currentSong).length === 0  && <img className='h-full w-full  object-cover rounded' src={playlistImg} alt="thumb" />}
            {Object.keys(currentSong).length > 0&& <img className='h-full w-full  object-cover rounded' src={currentSong.thumb} alt="thumb" />}
        </div>
    )
}

export default MusicThumb;