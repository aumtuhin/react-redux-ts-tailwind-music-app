import { faBackward, faCirclePause, faForward, faPlayCircle, faVolumeHigh, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';

const MusicPlayer = () => {
    const dispatch = useDispatch();
    const { setIsPlaying } = bindActionCreators(actionCreators, dispatch);
    const { isPlaying, currentSong } = useSelector((state: State) => state.music);
    const [isVolumeOff, setIsVolumeOff] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentDuration, setCurrentDuration] = useState<String>();
    const audioPlayer = useRef() as MutableRefObject<HTMLAudioElement>;

    useEffect(() => {
        if (isPlaying) {
            play();
            setIsPlaying(true);
        } if (!isPlaying) {
            pause();
            setIsPlaying(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong, isPlaying]);

    const play = async () => {
        await audioPlayer.current.play();
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
    }

    const pause = () => {
        audioPlayer.current.pause();
    }

    const togglePlay = () => {
        if (audioPlayer.current.paused) {
            play();
            setIsPlaying(true);
        } else {
            pause();
            setIsPlaying(false);
        }
    }

    const getCurrentDuration = () => {
        const currentTime = calculateTime(audioPlayer.current.currentTime);
        setCurrentDuration(currentTime);
    }

    const calculateTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    return (
        <div className="bottom-0 fixed h-20 bg-purple-500 w-screen">
            <div className='absolute w-scree'>
                <input
                    type="range"
                    className="absolute h-1 outline-none w-screen"
                    id="customRange1"
                />
            </div>
            <div className='sm:px-16 flex flex-row justify-center items-center w-full h-full gap-8'>
                {currentSong.mp3Url &&
                    <audio src={currentSong.mp3Url}
                        preload="metadata"
                        ref={audioPlayer}
                        onTimeUpdate={getCurrentDuration}
                    />}
                <div className='flex items-center gap-3'>
                    <div className='h-14 w-20 flex justify-center items-center'>
                        <img className='h-14 w-20 object-cover rounded' src={currentSong.thumb} alt="thumb" />
                    </div>
                    <button>
                        <FontAwesomeIcon className=' text-white h-4' icon={faBackward} />
                    </button>
                    <button onClick={togglePlay} >
                        {!isPlaying && <FontAwesomeIcon className=' text-white h-10' icon={faPlayCircle} />}
                        {isPlaying && <FontAwesomeIcon className=' text-white h-10' icon={faCirclePause} />}
                    </button>
                    <button>
                        <FontAwesomeIcon className=' text-white h-4' icon={faForward} />
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-white text-[16px]'>{currentDuration? currentDuration : '00:00'}/{calculateTime(duration) ? calculateTime(duration): '00:00'}</div>
                    <div className='flex justify-center items-center gap-1'>
                        <button onClick={() => setIsVolumeOff(!isVolumeOff)}>
                            {isVolumeOff && <FontAwesomeIcon className='ml-3 text-white h-5' icon={faVolumeOff} />}
                            {!isVolumeOff && <FontAwesomeIcon className='ml-3 text-white h-5' icon={faVolumeHigh} />}
                        </button>
                        <input
                            type="range"
                            className="h-1 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none"
                            id="customRange1"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;