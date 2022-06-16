import React, { useEffect, useState } from "react";
import './myproject.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectDetails(){
    const [projectDetails,setprojectDetails]=useState([])
    useEffect(()=>{
        let res=fetch("/get-all-students",{
          method:"GET",
          headers:{"Content":"application/json"},
          body: {}
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

                               <h4 className='heading'>Project ID: <font class="blockquote">Bcsf18M-112</font> </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                               <h4 className='heading'>Project Title: <font class="blockquote">FYP Automation System</font> </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                                <h4 className='heading'>
                                    Team Leader: <font class="blockquote">Hamda Tariq</font>
                                </h4>

                            </div>
                            <hr className="hr"></hr>
                            <div><h4 className='heading'>
                                Team Members:
                                 <font className="blockquote">
                                        <div><li>Hamda Tariq</li></div>
                                        <div><li>Sidra Tanveer</li></div>
                                        <div><li>Larain Waheed</li></div>
                                        <div><li>Abeera Khalid</li></div>

                                </font>
                            </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div><h4 className='heading'>
                                Team Email Ids:
                                 <font className="blockquote">
                                        <div><li>bcsf18m525@pucit.edu.ok</li></div>
                                        <div><li>bcsf18m541@pucit.edu.ok</li></div>
                                        <div><li>bcsf18m523@pucit.edu.ok</li></div>
                                        <div><li>bcsf18m526@pucit.edu.ok</li></div>
                                </font>
                            </h4>
                            </div>
                            <hr className="hr"></hr>
                            <div>
                                <h4 className='heading'>Project Status:  <font class="blockquote">In Process</font>
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
