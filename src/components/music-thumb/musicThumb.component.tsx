import React from 'react'
import { useSelector } from 'react-redux';
import { State } from '../../state';

const MusicThumb = () => {
    const { currentSong } = useSelector((state: State) => state.music);
    return (
        <div className='ml-40 h-96 w-96 py-2 px-2'>
            <img className='h-full w-full  object-cover rounded' src={currentSong.thumb} alt="img" />
        </div>
    )
}

export default MusicThumb;