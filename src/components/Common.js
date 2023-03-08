import React from 'react'
import { Link } from 'react-router-dom';

const Common = (props) => {
  return (
    <article >
      <div className="post" >
        <table className="tableCommon">
          <thead>
            <th>Description des maladie</th>
            <th>Type des maladie </th>
          </thead>
          <tbody>
            <tr>
              <td><Link to='/menu/commonDisease/BovineRestpiratoryDiseaseComplex' className="common-td">Bovine Restpiratory Disease Complex</Link></td>
              <td>Syndrome dysgénésique et respiratoire</td>
            </tr>
            <tr>
              <td><Link to='/menu/commonDisease/BovineRestpiratoryDiseaseComplex' className="common-td">diarrhée épidémique</Link></td>
              <td>La diarrhée épidémique porcine (DEP)</td>
            </tr>
            <tr>
              <td><Link to='/menu/commonDisease/BovineRestpiratoryDiseaseComplex' className="common-td">Mycoplasmoses des ruminants</Link></td>
              <td>Botulisme aviaire</td>
            </tr>
            <tr>
              <td><Link to='/menu/commonDisease/BovineRestpiratoryDiseaseComplex' className="common-td">Lamesse</Link></td>
              <td>Mycoplasmoses des ruminants</td>
            </tr>
            <tr>
              <td><Link to='/menu/commonDisease/BovineRestpiratoryDiseaseComplex' className="common-td">Bovine Restpiratory Disease Complex</Link></td>
              <td>respiratory</td>
            </tr>
            <tr>
              <td><Link to='/menu/commonDisease/BovineRestpiratoryDiseaseComplex' className="common-td">La brucellose</Link></td>
              <td>Foot and leg problemes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  )
}
export default Common;
