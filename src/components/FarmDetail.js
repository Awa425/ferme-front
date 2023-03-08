import React from 'react'
import { LocationCity, LocationSearching, PermIdentity, Phone} from '@material-ui/icons'

const FarmDetail = () => {
    return (
        <article className='farmdetail'>
            <h1>Fam</h1>
            <div className="farmdetailShow">
                <span className="farmdetailShowIcon"><PermIdentity /></span>
                <span className="farmdetailShowTitle">FarmBambilor</span>
            </div>
            <div className="farmdetailShow">
                <span className="farmdetailShowIcon"><LocationSearching /></span>
                <span className="farmdetailShowTitle">21 rue Theze</span>
            </div>
            <div className="farmdetailShow">
                <span className="farmdetailShowIcon"><LocationCity /></span>
                <span className="farmdetailShowTitle">Bambilor Dakar</span>
            </div>
            <div className="farmdetailShow">
                <span className="farmdetailShowIcon"><Phone /></span>
                <span className="farmdetailShowTitle">78689789</span>
            </div>
        </article>
    )
}

export default FarmDetail
