import React from 'react'
import { Link } from 'react-router-dom';

const UsagesOfAI = () => {
    return (
        <article >
        <div className="post" >
           <table className="tableCommon">
             <thead>
               <th>Digital identity</th>
               <th>Health monitoring</th>
             </thead>
             <tbody>
               <tr>
                 <td>Animal 1</td>
                 <td><Link  className="common-td">Temperature Threshold</Link></td>
               </tr>
               <tr>
                <td>Animal 2</td>
                <td><Link   className="common-td">Health Check Threshold</Link></td>
              </tr>
              <tr>
                 <td>Animal 3</td>
                 <td><Link className="common-td">Rumination Threshold</Link></td>
               </tr>
               <tr>
                <td>Animal 4</td>
                <td><Link className="common-td">Lactating Threshold</Link></td>
              </tr>
              <tr>
                 <td>Animal 5</td>
                 <td><Link  className="common-td">Calving Threshold</Link></td>
               </tr>
             </tbody>
           </table>
           </div>
        </article>
    )
}

export default UsagesOfAI
