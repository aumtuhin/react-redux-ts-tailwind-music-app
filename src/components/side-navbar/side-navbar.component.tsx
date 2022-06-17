import './side-navbar.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faMusic, faChartArea, } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SideNavbar = () => {
    return (
        <div className='sidebar-container'>
            <ul className="side-navbar-items">
                <li className="m-4 mt-10">
                    <Link to="/"><FontAwesomeIcon className="h-6 text-slate-500" icon={faHome} /></Link >
                </li>
                <li className="m-4 mt-10">
                    <Link to="explore"><FontAwesomeIcon className="h-6 text-slate-500" icon={faMusic} /></Link >
                </li>
                <li className="m-4 mt-10">
                    <Link to="trends"><FontAwesomeIcon className="h-6 text-slate-500" icon={faChartArea} /></Link >
                </li>
                <li className="m-4 mt-10">
                    <Link to="favorites"><FontAwesomeIcon className="h-6 text-slate-500" icon={faHeart} /></Link >
                </li>
            </ul>
        </div>
    )
}

export default SideNavbar;