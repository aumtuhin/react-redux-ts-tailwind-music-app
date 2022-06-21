import { faBackward, faCirclePause, faForward, faPlayCircle, faVolumeHigh, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
    const [isVolumeOff, setIsVolumeOff] = useState<boolean>(false);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentSong, setCurrentSong] = useState<string>('');
    const [duration, setDuration] = useState<number>(0);
    const audioPlayer = useRef() as MutableRefObject<HTMLAudioElement>;

    useEffect(() => {
        setCurrentSong('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        const time = audioPlayer.current.duration;
        if (!time) {
            setDuration(0);
        } else {
            setDuration(time);
        }
    }, []);

    const togglePlay = () => {
        if (audioPlayer.current.paused) {
            audioPlayer.current.play();
            setIsPlaying(() => true);
        } else {
            audioPlayer.current.pause();
            setIsPlaying(() => false);
        }
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
                <audio src={currentSong} preload="metadata" ref={audioPlayer} />
                <div className='flex items-center gap-3'>
                    <img className='h-14 rounded' src="http://www.laut.de/Bryan-Adams/bryan-adams-216203.jpg" alt="thumb" />
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
                    <div className='text-white text-[16px]'>{duration}:{duration}</div>
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