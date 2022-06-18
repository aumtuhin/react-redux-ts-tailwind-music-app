import { faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MusicPlayer = () => {
    return (
        <div className="bottom-0 fixed h-20 flex justify-center items-center bg-slate-600 w-screen">
            <audio controls>
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/ogg" />
                <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            </audio>
            <button>
                <FontAwesomeIcon className=' text-white h-10' icon={faPlay} />
            </button>
        </div>
    )
}

export default MusicPlayer;