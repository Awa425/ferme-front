import React from 'react'
import {PermIdentity, Phone, LocationSearching, LocationCity } from '@material-ui/icons'
import AddSupply from './AddSupply'
import { Link } from 'react-router-dom'

const DisplaySupplier = () => {
    return (
            <div className="profile">
            <div className="profileTitleContainer">
                <h1 className="profileTitle">Edit Supply </h1>
                <Link to='/AddSupply' className="btn-upload">Create</Link>
            </div>
            <div className="profileContainer">
                <div className="profileShow">
                    <div className="profileShowTop">
                        <div>
                        <PermIdentity className="profileImg"/>
                        </div>
                        <div className="profileShowTopTitle">
                            <span className="profileShowUsername">Supply  Name</span>
                            <span className="profileShowUsernameOf">Animal  ID</span>
                        </div>
                    </div>
                    <div className="profileShowBottom">
                        <span className="profileShowTitle">Supply  Details</span>
                        <div className="userShowInfos">
                            <PermIdentity className="showIcon"/>
                            <span className="profileShowInfosTitle">Supply Id</span>
                        </div>
                        <div className="userShowInfos">
                            <Phone />
                            <span className="profileShowInfosTitle">Supply Contact</span>
                        </div>
                        <div className="userShowInfos">
                            <LocationSearching />
                            <span className="profileShowInfosTitle">Supply Address</span>
                        </div>
                        <div className="userShowInfos">
                            <LocationCity />
                            <span className="profileShowInfosTitle">Supply City</span>
                        </div>
                        
                    </div>
                </div>
                <div className="profileUpdate">
                    <AddSupply po={'Edit'}/>
                </div>
            </div>
        </div>
    )
}

export default DisplaySupplier
