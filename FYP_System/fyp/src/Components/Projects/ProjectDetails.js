import React, { useEffect, useState } from "react";
import './project.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDetails(props){
 const[project,setProject]=useState(JSON.parse(props.match.params.object))
 
        return(
            <div>
            
                <div className='divMain'> 
                <br></br>
                <table className="table" width="90%" cellPadding="10%" border="0">
                    <tr>
                        <td >
                        <div>
                            
                               <h4 className='heading'>Project ID: <font class="blockquote">{project.projectId}</font> </h4> 
                            </div>
                            <hr className="hr"></hr>
                            <div>
                               <h4 className='heading'>Project Title: <font class="blockquote">{project.title}</font> </h4> 
                            </div>
                            <hr className="hr"></hr>
                            <div>
                                <h4 className='heading'>
                                    Team Leader: <font class="blockquote">{project.leader}</font>
                                </h4>
                                
                            </div>
                            <hr className="hr"></hr>
                            <div><h4 className='heading'>
                                Team Members:
                                 <font className="blockquote">
                                    {project.members.map((member)=>{
                                         return (
                                        <div><li>{member}</li></div>
                                     ); })}
                                </font>
                            </h4>
                            </div>
                            
                            <div><h4 className='heading'>
                                Team Email Ids:
                                 <font className="blockquote">
                                    {project.emailIds.map((email)=>{
                                         return (
                                        <div><li>{email}</li></div>
                                     ); })}
                                </font>
                            </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                                <h4 className='heading'>Project Status:  <font class="blockquote">{project.status}</font>
                                    </h4>
                                   
                            </div>
                        </td>
                    </tr>
                </table>
            
                </div>
                </div>
        );
}
export default ProjectDetails;