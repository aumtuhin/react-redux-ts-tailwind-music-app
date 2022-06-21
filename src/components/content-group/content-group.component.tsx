import { Song, SongGroup } from '../../shared/interfaces';
import SongCard from '../song-card/song-card.component';

const ContentGroup: React.FC<{ songGroup: SongGroup }> = ({ songGroup }) => {
    return (
        <section className='mt-24'>
            <h2 className=' text-slate-600 text-[25px]'>{songGroup.name}</h2>
            <div className='flex flex-wrap justify-self-start gap-20 mt-4'>
                {songGroup.songs.map((song: Song, index: number) => (
                    <SongCard song={song} key={index} />
                ))}
            </div>
        </section>
    )
}

export default ContentGroup;