import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import MusicPlayer from '../music-player/music-player.component';
import SideNavbar from '../side-navbar/side-navbar.component';
import TopNavbar from '../top-navbar/top-navbar.component';

const Navigation = () => {
    return (
        <Fragment>
            <TopNavbar />
            <SideNavbar />
            <Outlet />
            <MusicPlayer />
        </Fragment>
    )
}

export default Navigation;