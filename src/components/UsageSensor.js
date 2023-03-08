import React from 'react'
import { Link } from 'react-router-dom';


const UsageSensor = () => {
    return (
        <article >
        <div className="post" >
           <table className="tableCommon">
             <thead>
               <th>Sensors Description</th>
               <th>Sensors Type</th>
             </thead>
             <tbody>
               <tr>
                 <td><Link to='' className="common-td">Color sensor</Link></td>
                 <td>c</td>
               </tr>
               <tr>
                <td><Link   className="common-td">Weighing platform</Link></td>
                <td>e</td>
              </tr>
              <tr>
                 <td><Link to='' className="common-td">Rumination activity sensor</Link></td>
                 <td>z</td>
               </tr>
               <tr>
                <td><Link className="common-td">Activity meters and pedometers for dairy cows</Link></td>
                <td>a</td>
              </tr>
              <tr>
                 <td><Link to='' className="common-td">Temperature sensor</Link></td>
                 <td>respiratory</td>
               </tr>
             </tbody>
           </table>
           </div>
        </article>
    )
}

export default UsageSensor
