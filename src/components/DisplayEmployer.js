import React from 'react'
import {PermIdentity, Phone, LocationSearching, LocationCity } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import  AddEmployer  from './AddEmployer'

const DisplayEmployer = ({name}) => {
    return (
        <div className="profile">
            <div className="profileTitleContainer">
                <h1 className="profileTitle">Edit {name} </h1>
                <Link to='/AddEmployer' className="btn-upload">Create</Link>
            </div>
            <div className="profileContainer">
                <div className="profileShow">
                    <div className="profileShowTop">
                        <div>
                        <PermIdentity className="profileImg"/>
                        </div>
                        <div className="profileShowTopTitle">
                            <span className="profileShowUsername">{name}  Name</span>
                            <span className="profileShowUsernameOf">{name}  ID</span>
                        </div>
                    </div>
                    <div className="profileShowBottom">
                        <span className="profileShowTitle">{name}  Details</span>
                        <div className="userShowInfos">
                            <PermIdentity className="showIcon"/>
                            <span className="profileShowInfosTitle">{name} Id</span>
                        </div>
                        <div className="userShowInfos">
                            <Phone />
                            <span className="profileShowInfosTitle">{name} Contact</span>
                        </div>
                        <div className="userShowInfos">
                            <LocationSearching />
                            <span className="profileShowInfosTitle">{name} Address</span>
                        </div>
                        <div className="userShowInfos">
                            <LocationCity />
                            <span className="profileShowInfosTitle">{name} City</span>
                        </div>
                        
                    </div>
                </div>
                <div className="profileUpdate">
                    <AddEmployer po={'Edit'} />
                </div>
            </div>
        </div>
    )
}

export default DisplayEmployer
