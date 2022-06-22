import ContentGroup from '../../components/content-group/content-group.component';
import { SongGroup } from '../../shared/interfaces';
import { data } from '../../shared/mockData';

const Home = () => {
  return (
    <div className='ml-20 sm:ml-40 sm:pb-40'>
      {data.map((item: SongGroup, index: number) => (
        <ContentGroup songGroup={item} key={index} />
      ))}
    </div>
  )
}

export default Home;