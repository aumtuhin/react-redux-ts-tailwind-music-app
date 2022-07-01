import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faMusic, faChartArea, faStar, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <div className='fixed w-10 sm:w-40 text-center h-full dark:bg-slate-900'>
            <ul className="">
                <li className="m-4 mt-10">
                    <Link to="/"><FontAwesomeIcon className="h-6 text-slate-500 hover:text-slate-800 transition-all duration-100 dark:hover:text-white" icon={faHome} /></Link >
                </li>
                <li className="m-4 mt-10">
                    <Link to="/explore"><FontAwesomeIcon className="h-6 text-slate-500 hover:text-slate-800 transition-all duration-100 dark:hover:text-white" icon={faMusic} /></Link >
                </li>
                <li className="m-4 mt-10">
                    <Link to="/"><FontAwesomeIcon className="h-6 text-slate-500 hover:text-slate-800 transition-all duration-100 dark:hover:text-white" icon={faChartArea} /></Link >
                </li>
                <li className="m-4 mt-10">
                    <Link to="/"><FontAwesomeIcon className="h-6 text-slate-500 hover:text-slate-800 transition-all duration-100 dark:hover:text-white" icon={faStar} /></Link >
                </li>
                <li className="m-4 mt-10">
                    <Link to="/favorites"><FontAwesomeIcon className="h-6 text-slate-500 hover:text-slate-800 transition-all duration-100 dark:hover:text-white" icon={faHeart} /></Link >
                </li>
            </ul>
        </div>
    )
}

export default SideNavbar;