
import 'bootstrap/dist/css/bootstrap.min.css';
import './student.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from "./SupervisorsList/List";
import Supervisors from "./SupervisorsList/Supervisors";


function StudentLogin(){
  return (
    <div className="main">
       <div className="topBar">
      <p className="dashboard"><b>
        Student Dashboard
        </b>
      </p>
      </div>
      <table width="100%" >
        <tr>
          <td className="content">
        
      <div>
     <div className="menu">
       <h2 className="menuText">Menu</h2>
       <div className="menuItems"> <Link to="/MyProject" >My Project Details</Link> </div>

       <div className="menuItems">  <Link to="/SubmissionsDocs">Submissions</Link></div>

       <div className="menuItems">  <Link to="/MyMarksSheet">MarkSheet</Link></div>
      <center>
       <div> <form action="/SendRequestForm"> 
       <input type="submit" className="btn btn-success" 
      value="Send Request"
/>
         </form></div></center>
     </div>
    </div>
    </td>
    <td className="content">
      <div>
      <h3 className="SPname1">List of Supervisors</h3>
      </div>
    <div >
    <Supervisors/>
    </div>
    </td></tr></table>
    </div>
  );
}


export default StudentLogin;
