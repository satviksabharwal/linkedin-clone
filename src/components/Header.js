import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "../styles/Header.css";
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="Linkedin Icon" />
                <div className="header__search">
                {/*Search Icon*/}
                <SearchIcon />
                <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon={ChatIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHe2sHhLxoF4w/profile-displayphoto-shrink_100_100/0/1557166771727?e=1619049600&v=beta&t=RJtMEzuCG_735pO6roYmH5ifwDREN3sdeZQf17byMp0" 
            title="Me"/>
            </div>  
            
        </div>
    )
}

export default Header
