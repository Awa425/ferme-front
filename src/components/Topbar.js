import React from 'react'
import imgAvatar from "../assets/avatar.jpg";
import Dropdown from './Dropdown'


const Topbar = () => {
    return (
        <div className="topbar" >
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="topLogo">Gueet gui</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                        {/* <Dropdown /> */}
                        {/* <span className="topbarBadge">2</span> */}
                    </div>
                    <div className="topbarIconsContainer">
                        {/* <Dropdown /> */}
                    </div>
                    <img src={imgAvatar} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
