import React, { useEffect, useState } from "react";
import "./project.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectDetails(props) {
  const [projectDetails, setProjectDetails] = useState(null);
  useEffect(()=>{
    let current_project_id= window.location.href.split("/")[window.location.href.split("/").length-1]
    console.log("CURRENT PROJECT ID",current_project_id)
    fetch("/supervisor/project-details/",{
        method:"POST",
        headers:{"Content":"application/json"},
        body :JSON.stringify({"id":current_project_id}),
      }
      ).then(data=>data.json()).then((data)=>{
        console.log(data);
        setProjectDetails(data);
      })
      return null;
  },[])

  return (
    <div>
      <div className="divMain">
        <br></br>
        <table className="table" width="90%" cellPadding="10%" border="0">
          <tr>
            <td>
              <div>
                <h4 className="heading">
                  Project ID:{" "}
                  <font class="blockquote">{(projectDetails ? projectDetails.id : "")}</font>{" "}
                </h4>
              </div>
              <hr className="hr"></hr>
              <div>
                <h4 className="heading">
                  Project Title: <font class="blockquote">{(projectDetails ? projectDetails.title : "")}</font>{" "}
                </h4>
              </div>
              <hr className="hr"></hr>
              <div>
                <h4 className="heading">
                  Team Leader: <font class="blockquote">{(projectDetails ? projectDetails.team_members[0].name : "")}</font>
                </h4>
              </div>
              <hr className="hr"></hr>
              <div>
                <h4 className="heading">
                  Team Members:
                  <font className="blockquote">
                    {( projectDetails ? projectDetails.team_members.map((member) => {
                      return (
                        <div>
                          <li>{member.name}</li>
                        </div>
                      );
                    }) : "")}
                  </font>
                </h4>
              </div>

              <div>
                <h4 className="heading">
                  Team Email Ids:
                  <font className="blockquote">
                    {(projectDetails ? projectDetails.team_members.map((member) => {
                      return (
                        <div>
                          <li>{member.email}</li>
                        </div>
                      );
                    }) : "")}
                  </font>
                </h4>
              </div>
              <hr className="hr"></hr>
              <div>
                <h4 className="heading">
                  Project Status:{" "}
                  <font class="blockquote">{(projectDetails ? projectDetails.status : "")}</font>
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
