import React from 'react'
import { Link } from 'react-router-dom'
import { FaComment } from 'react-icons/fa';

const AnimalHealth = () => {
    return (
        <article>
            <div id="forum-table">
                <table className="forum-table">
                    <thead>
                    <tr>
                        <th className="forum-th">&nbsp;</th>
                        <th className="forum-th">Forum / Question</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ><span className="forum-icon"><FaComment /></span></td>
                        <td>
                            <div className="form-name">
                                <h4>Animal Health & Mosquito Animal Health & Mosquito</h4>
                             </div>
                             <div className="forum-description">
                                 <p>Le lorem ipsum est, en imprimerie,
                                      une suite de mots sans signification utilisée à 
                                      titre provisoire pour calibrer une mise en page,
                                       le texte définitif venant remplacer le faux-texte
                                        dès qu'il est prêt ou que la mise en page est achevée</p>
                                 <span>by Omar , 21 janvier ,2020 - 14:34</span>
                             </div>
                         </td>
                    </tr>
                   
                 
                </tbody>
             </table>
            </div>
            </article>
    )
}

export default AnimalHealth
