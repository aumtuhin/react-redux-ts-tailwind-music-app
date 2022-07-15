import { useSelector } from 'react-redux';
import ContentGroup from '../../components/content-group/content-group.component';
import { AppState, SongGroup } from '../../shared/interfaces';
import { State } from '../../state';

const Home = () => {
  const products:AppState = useSelector((state: State) => state.products);
  console.log(products);
  return (
    <div className='ml-20 sm:ml-40 sm:pb-40 w-full dark:bg-slate-900'>
      {products.products.map((item: SongGroup, index: number) => (
      <ContentGroup songGroup={item} key={index} />
      ))}
    </div>
  )
}

export default Home;