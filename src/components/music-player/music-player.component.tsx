import { faBackward, faCirclePause, faForward, faPlayCircle, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../state';

const MusicPlayer = () => {
    const dispatch = useDispatch();
    const { setIsPlaying, nextSong, prevSong } = bindActionCreators(actionCreators, dispatch);
    const { isPlaying, currentSong } = useSelector((state: State) => state.music);
    const [isVolumeOff, setIsVolumeOff] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentDuration, setCurrentDuration] = useState<String>('');
    const [currentRangeValue, setCurrentRangeVlaue] = useState<number>(0);
    const [volume, setVolume] = useState<number>(.5);
    const audioPlayer = useRef() as MutableRefObject<HTMLAudioElement>;

    useEffect(() => {
        if (isPlaying) {
            play();
        } if (!isPlaying) {
            pause();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong, isPlaying]);

    const play = async () => {
        await audioPlayer.current.play();
        setIsPlaying(true);
        const seconds = Math.floor(audioPlayer.current.duration);
        setDuration(seconds);
        setVolume(audioPlayer.current.volume);
    }

    const pause = () => {
        audioPlayer.current.pause();
        setIsPlaying(false);
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
        if (audioPlayer.current.currentTime === audioPlayer.current.duration) pause();
        setCurrentRangeVlaue(audioPlayer.current.currentTime);
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

    const handleAudioTime = (e: ChangeEvent<HTMLInputElement>) => {
        const currentTime = parseFloat(e.target.value);
        audioPlayer.current.currentTime = currentTime;
    }

    const handleMute = () => {
        setIsVolumeOff(!isVolumeOff);
        audioPlayer.current.muted = !isVolumeOff;
    }

    const handleVolume = (e: ChangeEvent<HTMLInputElement>) => {
        audioPlayer.current.muted = false;
        setIsVolumeOff(false);
        const currentVolume = parseFloat(e.target.value);
        setVolume(currentVolume);
        audioPlayer.current.volume = currentVolume;
        if (currentVolume === 0) setIsVolumeOff(true);
    }

    return (
        <div className="bottom-0 fixed h-24 bg-purple-500 w-screen">
            <div className='absolute w-scree'>
                <input
                    type="range"
                    className="absolute 
                    h-1 hover:h-2 
                    transition-all 
                    duration-200 
                    appearance-none
                  bg-slate-700
                    outline-none 
                    w-screen 
                    cursor-pointer"
                    id="customRange1"
                    value={currentRangeValue}
                    max={duration}
                    onChange={handleAudioTime}
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
                    <button className='w-6' onClick={prevSong}>
                        <FontAwesomeIcon
                            className='text-white h-4 transition 
                            ease-in-out 
                            delay-500 hover:h-5  
                            hover:scale-11 
                            duration-700'
                            icon={faBackward}
                        />
                    </button>
                    <button onClick={togglePlay} >
                        {!isPlaying && <FontAwesomeIcon className=' text-white h-10' icon={faPlayCircle} />}
                        {isPlaying && <FontAwesomeIcon className=' text-white h-10' icon={faCirclePause} />}
                    </button>
                    <button className='w-6' onClick={nextSong} >
                        <FontAwesomeIcon
                            className='text-white h-4 transition 
                            ease-in-out 
                            delay-500 hover:h-5  
                            hover:scale-11 
                            duration-700'
                            icon={faForward}
                        />
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-white text-[16px]'>{currentDuration ? currentDuration : '00:00'} / {calculateTime(duration) ? calculateTime(duration) : '00:00'}</div>
                    <div className='flex justify-center items-center gap-1'>
                        <button onClick={handleMute} className="w-12 h-12">
                            {isVolumeOff && <FontAwesomeIcon className='ml-3 text-white h-5' icon={faVolumeMute} />}
                            {!isVolumeOff && <FontAwesomeIcon className='ml-3 text-white h-5' icon={faVolumeHigh} />}
                        </button>
                        <input
                            type="range"
                            className=" hidden sm:block h-1 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none cursor-pointer"
                            id="customRange1"
                            step={0.1}
                            value={volume}
                            min={0}
                            max={1}
                            onChange={handleVolume}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;