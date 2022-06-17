import React, { useEffect, useState } from "react";
import './myproject.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies  from "universal-cookie";
function ProjectDetails(){
    const cookies = new Cookies();
    const [projectDetails,setprojectDetails]=useState([])
    useEffect(()=>{
        console.log("useEffect called");
        let res=fetch("/students/project-details",{
          method:"POST",
          headers:{"Content":"application/json"},
          body: JSON.stringify({"username":cookies.get('username')})
        }).then(data => data.json()).then((data)=> {
          //data=data.json()
          console.log(data)
          setprojectDetails(data)
          //data.map((e)=> console.group(e))
        }).catch(err=>{
          console.log(err)
        })
        console.log("res is",res)
      },[])


        return(
            <div>

                <div className='divMain'>
                <br></br>
                <table className="table" width="90%" cellPadding="10%" border="0">
                    <tr>
                        <td >
                        <div>

                               <h4 className='heading'>Project ID: <font class="blockquote">{projectDetails.id}</font> </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                               <h4 className='heading'>Project Title: <font class="blockquote">{projectDetails.title}</font> </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                               <h4 className='heading'>Supervisor Name: <font class="blockquote">{projectDetails.supervisor.name}</font></h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                               <h4 className='heading'>Supervisor Email: <font class="blockquote">{projectDetails.supervisor.email}</font></h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                                <h4 className='heading'>
                                    Team Leader: <font class="blockquote">{projectDetails.team_members[1].name}</font>
                                </h4>

                            </div>
                            <hr className="hr"></hr>
                            <div><h4 className='heading'>
                                Team Members:
                                <font className="blockquote">
                                {projectDetails.team_members.map((teamMember) =>{
                                    return(

                                        <div><li>{teamMember.name}</li></div>

                                    );
                                })}

                                </font>
                            </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div><h4 className='heading'>
                                Team Email Ids:
                                 <font className="blockquote">
                                 {projectDetails.team_members.map((teamMember) =>{
                                    return(

                                        <div><li>{teamMember.email}</li></div>

                                    );
                                })}
                                </font>
                            </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                                <h4 className='heading'>Project Status:  <font class="blockquote">{projectDetails.status}</font>
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
