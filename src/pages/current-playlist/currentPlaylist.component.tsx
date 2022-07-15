import MusicLists from '../../components/music-lists/musicList.component';
import MusicThumb from '../../components/music-thumb/musicThumb.component';

const CurrentPlaylist = () => {
    return (
        <div className='dark:bg-slate-900 mt-24'>
            <div className='flex justify-around'>
                <MusicThumb />
                <MusicLists />
            </div>
        </div>
    )
}

export default CurrentPlaylist;