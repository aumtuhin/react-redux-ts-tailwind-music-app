import { useSelector } from 'react-redux';
import ContentGroup from '../../components/content-group/content-group.component';
import { State } from '../../state';

const FavouriteSongs = () => {
    const { favouriteMusic } = useSelector((state: State) => state.favouriteMusic);
    return (
        <div className='ml-20 sm:ml-40 sm:pb-40'>
            <ContentGroup songGroup={favouriteMusic} />
        </div>
    )
}

export default FavouriteSongs;