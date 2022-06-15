import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./supervisor.css";
import ListProjects from "../Projects/ListProjects";
import RequestsList from "./Requests/RequestsList";
import Cookies  from "universal-cookie";
import {useEffect,useState} from 'react'

function SupervisorLogin() {
  
  const cookies = new Cookies();
  console.log(cookies.get('username')); 
  const [requestList,setRequestList]=useState(null)
  const [projectList,setprojectList]=useState(null)

  const myreqList=()=>{
    let objs=null;
    fetch("/supervisor/get-all-requests",{
      method:"POST",
      headers:{"Content":"application/json"},
      body :JSON.stringify({"username":cookies.get('username')}),
    }
    ).then(data=>data.json()).then((data)=>{
      console.log("REQLIST",data)
      objs = data.map((o, idx) => {
      return  <div>
                <Link
                  to={`/ViewRequest/${JSON.stringify(o.ID)}`}
                  class="btn btn-success"
                >
                  {o.Title}
                </Link>
              </div>
      })
      setRequestList(objs);
    })
    return null;
  }

  const myprojList=()=>{
    let objs=null;
    fetch("/supervisor/show-all-projects",{
      method:"POST",
      headers:{"Content":"application/json"},
      body :JSON.stringify({"username":cookies.get('username')}),
    }
    ).then(data=>data.json()).then((data)=>{
      console.log("PROJLIST",data)
      objs = data.map((o, idx) => {
      return  <div>
                <Link
                  to={`/ProjectDetails/${JSON.stringify(o.ID)}`}
                  class="btn btn-success"
                >
                  {o.Title}
                </Link>
              </div>
      })
      setprojectList(objs);
    })
    return null;
  }

  useEffect(()=>{
    myreqList();
    myprojList();
  },[])

  return (
    <div className="Supervisor">
      <div className="topBar">
        <p className="dashboard">
          <b>Supervisor Dashboard</b>
        </p>
      </div>
      <div className="marks">
        <Link to="/DisplayMarksSheet">MarksSHeet</Link>{" "}
      </div>
      <table className="table">
        <tr>
          <td className="data2">
            <div class="display-4">Lists Of Projects</div>
            {projectList}
          </td>
          <td className="data2">
            <div class="display-4">Pending Requests</div>
            {requestList}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SupervisorLogin;
