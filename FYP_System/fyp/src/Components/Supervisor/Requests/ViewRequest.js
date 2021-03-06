import React, { useEffect, useState } from "react";
import "./requests.css";
import "bootstrap/dist/css/bootstrap.min.css";
function ViewRequest(props) {
  const [request, setRequest] = useState(null);

  useEffect(()=>{
    let current_request_id= window.location.href.split("/")[window.location.href.split("/").length-1]
    console.log("CURRENT PROJECT ID",current_request_id)
    fetch("/supervisor/request-details",{
        method:"POST",
        headers:{"Content":"application/json"},
        body :JSON.stringify({"id":current_request_id}),
      }
      ).then(data=>data.json()).then((data)=>{
        console.log(data);
        setRequest(data);
      })
      return null;
  },[])
  function request_action1()
  {
    fetch("supervisor/request-action",{
      method:"POST",
      headers:{"Content":"application/json"},
      body :JSON.stringify({"status":"accept"}),
    }
    ).then(data=>data.json()).then((data)=>{
      console.log(data);

    })
    window.location.replace("/SupervisorLogin")


  }
  function request_action2()
  {
    fetch("supervisor/request-action",{
      method:"POST",
      headers:{"Content":"application/json"},
      body :JSON.stringify({"status":"reject"}),
    }
    ).then(data=>data.json()).then((data)=>{
      console.log(data);

    })
    window.location.replace("/SupervisorLogin")


  }


  return (
    <div>
      <div className="topBar">
        <p className="dashboard">
          <b>Request Details</b>
        </p>
      </div>
      <div className="divStyle">
        <form>
          <div className="row pt-5 mx-auto">
            <h3 className="data">Title:</h3>
            <div className="col-8 form-group mx-auto">
              <div class="form-control">{(request ? request.title : "")}</div>
            </div>
            <h3 className="data">Email IDs:</h3>
            <div className="col-8 form-group pt-2 mx-auto">
              <div class="form-control"><text>{(request ? request.email : "")}</text></div>
            </div>
            <h3 className="data">Content:</h3>
            <div className="col-8 form-group pt-2 mx-auto">
              <div class="form-control">{(request ? request.description : "")}</div>
            </div>
          </div>
        </form>
        <div class="buttons">
        <button  class="btn btn-success" onClick={()=> request_action1()}>Accept</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button class="btn btn-danger" onClick={()=> request_action2()}>Reject</button>
        </div>
      </div>
    </div>
  );
}

export default ViewRequest;
