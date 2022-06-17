import { Outlet } from 'react-router-dom';
import SideNavbar from '../side-navbar/side-navbar.component';
import TopNavbar from '../top-navbar/top-navbar.component';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <nav className="pl-10 pr-10 navigation-container bg-transparent">
            <TopNavbar />
            <SideNavbar />
            <Outlet />
        </nav>
    )
}

export default Navigation;