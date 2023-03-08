import React from 'react'
import {FaHatCowboy} from 'react-icons/fa'

const Featured = () => {
    return (
        <div className="featured">
        <div className="featuredItem vert">
            <div className="featuredContainer ">
                <span className="featuredIcons"><FaHatCowboy /></span>
                <span className="featuredRate">86</span>
            </div>
        </div>
        <div className="featuredItem red">
            <div className="featuredContainer">
                <span className="featuredIcons"><FaHatCowboy /></span>
                <span className="featuredRate">73</span>
            </div>
        </div>
        <div className="featuredItem orange">
            <div className="featuredContainer ">
                <span className="featuredIcons"><FaHatCowboy /></span>
                <span className="featuredRate">13</span>
            </div>
        </div>
    </div>
    )
}

export default Featured
