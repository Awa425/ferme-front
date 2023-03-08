import React from 'react'
import { PermIdentity, Phone, LocationSearching, LocationCity } from '@material-ui/icons'
import AddAnimal from './AddAnimal'
import { Link } from 'react-router-dom'



const DisplayProfile = ({ props }) => {
    console.log(this.props.match.params.id);
    return (
        < div className="profile" >
            <div className="profileTitleContainer">
                <h2 className="profileTitle">Edit  </h2>
                <Link to='/AddEmployer' className="btn-upload">Create</Link>
            </div>
            <div className="profileContainer">
                <div className="profileShow">
                    <div className="profileShowTop">
                        <div>
                            <PermIdentity className="profileImg" />
                        </div>
                        <div className="profileShowTopTitle">
                            <span className="profileShowUsername">  {props.nomAnimal}</span>
                            <span className="profileShowUsernameOf">{props.id}</span>
                        </div>
                    </div>
                    <div className="profileShowBottom">
                        <span className="profileShowTitle">  Details</span>
                        <div className="userShowInfos">
                            <PermIdentity className="showIcon" />
                            <span className="profileShowInfosTitle">{props.id}</span>
                        </div>
                        <div className="userShowInfos">
                            <Phone />
                            <span className="profileShowInfosTitle"> Contact</span>
                        </div>
                        <div className="userShowInfos">
                            <LocationSearching />
                            <span className="profileShowInfosTitle"> Address</span>
                        </div>
                        <div className="userShowInfos">
                            <LocationCity />
                            <span className="profileShowInfosTitle"> City</span>
                        </div>

                    </div>
                </div>
                <div className="profileUpdate">
                    <AddAnimal po={'Edit'} />
                </div>
            </div>
        </div >
    )
}

export default DisplayProfile
