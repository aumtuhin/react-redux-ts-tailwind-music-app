import './top-navbar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Input from '../input/input.component';

const TopNavbar = () => {

  const [isDark, setIsdark] = useState<boolean>(false);

  return (
    <div className='top-navbar-container flex justify-between items-center h-28 outline-none'>
      <Link to="/" ><img className="h-20" src={logo} alt="logo" /></Link>
      <Input />
      <div className="" >
        <button onClick={() => setIsdark(!isDark)}>
          {isDark && <FontAwesomeIcon className="h-8 text-slate-500" icon={faToggleOff} />}
          {!isDark && <FontAwesomeIcon className="h-8 text-slate-500" icon={faToggleOn} />}
        </button>
      </div>
    </div>
  )
}

export default TopNavbar;