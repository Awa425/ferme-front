import React from 'react'
import { Link } from 'react-router-dom'
import { FaQuestion } from 'react-icons/fa';

const AnimalManagement = () => {
    return (
            <article>
            <div className="forum-header">
             <h2 className="forum-title">All Questions</h2>
             <p>
              This is the main forum to discuss all Animal Management Related Issues.
             </p>
            </div>
            <div id="forum-table">
                <table className="forum-table">
                    <thead>
                    <tr>
                        <th className="forum-th">&nbsp;</th>
                        <th className="forum-th">Forum</th>
                        <th className="forum-th">Answers</th>
                        <th className="forum-th">Posts</th>
                        <th className="forum-th">Last post</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td ><span className="forum-icon"><FaQuestion /></span></td>
                        <td>
                            <div className="form-name">
                                <Link to="/collaboration/forum/AnimalHealth">Question 1 from daily</Link>
                             </div>
                             <div className="forum-description">
                                 The Forum to discuss Animal Health Related Issues.
                             </div>
                         </td>
                        <td className="forum-td">
                            <div className="form-number-topics">5</div>
                        </td>
                        <td className="forum-td">
                         <div className="form-number-posts">25</div>
                        </td>
                        <td className="forum-td"><div className="form-date">5 janvier 2021</div></td>
                    </tr>
                    <tr>
                     <td ><span className="forum-icon"><FaQuestion /></span></td>
                     <td>
                         <div className="form-name">
                             <Link to="" >Question 2 from daily</Link>
                          </div>
                          <div className="forum-description">
                             The Forum to discuss about the Animal Breeding Related Issues.
                          </div>
                      </td>
                     <td className="forum-td">
                         <div className="form-number-topics">5</div>
                     </td>
                     <td className="forum-td">
                      <div className="form-number-posts">25</div>
                     </td>
                     <td className="forum-td"><div class="form-date">5 janvier 2021</div></td>
                 </tr>
                 <tr>
                     <td ><span className="forum-icon"><FaQuestion/></span></td>
                     <td>
                         <div className="form-name">
                             <Link to="">Question 3 from daily</Link>
                          </div>
                          <div className="forum-description">
                             The Forum to discuss about Animal Nutrition related Issues.
                          </div>
                      </td>
                     <td className="forum-td">
                         <div className="form-number-topics">5</div>
                     </td>
                     <td className="forum-td">
                      <div className="form-number-posts">25</div>
                     </td>
                     <td className="forum-td"><div class="form-date">5 janvier 2021</div></td>
                 </tr>
                 
                </tbody>
             </table>
            </div>
            </article>
            
    )
}

export default AnimalManagement
