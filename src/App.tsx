import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Explore from './pages/explore/explore.component';
import Home from './pages/home/home.component';
import { useSelector } from 'react-redux';
import { State } from './state';

function App() {
  const data= useSelector((state: State) => state.likedSongs);
  console.log(data);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/explore' element={<Explore />} />
      </Route>
    </Routes>
  );
}

export default App;
