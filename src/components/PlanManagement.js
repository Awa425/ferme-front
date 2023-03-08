import React from 'react'
import { Link } from 'react-router-dom'
import { FaFolder } from 'react-icons/fa';

const PlanManagement = () => {
    return (
        <article>
        <div class="forum-header">
         <h2 class="forum-title">Plant Management</h2>
         <p>
         The Forum to discuss Plant related Issues
         </p>
        </div>
        <div id="forum-table">
            <table class="forum-table">
                <thead>
                <tr>
                    <th class="forum-th">&nbsp;</th>
                    <th class="forum-th">Forum</th>
                    <th class="forum-th">Topics</th>
                    <th class="forum-th">Posts</th>
                    <th class="forum-th">Last post</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td ><span className="forum-icon"><FaFolder /></span></td>
                    <td>
                        <div class="form-name">
                            <Link to="">Cattle Feed Plant</Link>
                         </div>
                         <div class="forum-description">
                         The forum to discuss Cattle Feed Plant Related Issues.
                         </div>
                     </td>
                    <td class="forum-td">
                        <div class="form-number-topics">5</div>
                    </td>
                    <td class="forum-td">
                     <div class="form-number-posts">25</div>
                    </td>
                    <td class="forum-td"><div class="form-date">5 janvier 2021</div></td>
                </tr>
                <tr>
                 <td ><span className="forum-icon"><FaFolder /></span></td>
                 <td>
                     <div class="form-name">
                         <Link to="" >Dairy Plant</Link>
                      </div>
                      <div class="forum-description">
                      The Forum to discuss about the Dairy Plant related Issues.
                      </div>
                  </td>
                 <td class="forum-td">
                     <div class="form-number-topics">5</div>
                 </td>
                 <td class="forum-td">
                  <div class="form-number-posts">25</div>
                 </td>
                 <td class="forum-td"><div class="form-date">5 janvier 2021</div></td>
             </tr>
             
            </tbody>
         </table>
        </div>
        </article>
    )
}

export default PlanManagement
