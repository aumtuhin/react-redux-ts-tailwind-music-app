import ContentGroup from '../../components/content-group/content-group.component';
import { SongGroup } from '../../shared/interfaces';

import { data } from '../../shared/mockData';

const Home = () => {
  return (
    <div className='ml-40 mr-10 pb-40 mt-10'>
      {data.map((item: SongGroup) => (
        <ContentGroup songGroup={item} />
      ))}
    </div>
  )
}

export default Home;