import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import SearchInput from '../search-input/search-input.component';
import ToggleButton from '../toggle-button/toggle-button.component';

const TopNavbar = () => {
  return (
    <div className='fixed top-0 w-screen h-24 overflow-hidden z-10 bg-white'>
      <div className="pl-10 pr-10 h-full w-full  flex justify-between items-center">
        <Link to="/" ><img className="h-20" src={logo} alt="logo" /></Link>
        <SearchInput />
        <div className='absolute h-80 w-90 m-0-auto bg-slate-500'>
          results
        </div>
        <ToggleButton />
      </div>
    </div>
  )
}

export default TopNavbar;