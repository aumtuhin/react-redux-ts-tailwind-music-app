import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { State } from '../../state';
import MusicPlayer from '../music-player/music-player.component';
import SideNavbar from '../side-navbar/side-navbar.component';
import TopNavbar from '../top-navbar/top-navbar.component';

const Navigation = () => {
    const { currentSong } = useSelector((state: State) => state.music);
    return (
        <Fragment>
            <TopNavbar />
            <SideNavbar />
            <Outlet />
            { currentSong.mp3Url && <MusicPlayer /> }
        </Fragment>
    )
}

export default Navigation;