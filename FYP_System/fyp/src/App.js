import React, { Fragment, useEffect } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Components/Home/Login";
import Header from "./Components/Navbar/Header";
import SupervisorLogin from "./Components/Supervisor/SupervisorLogin";
import StudentLogin from "./Components/Student/StudentLogin";
import FAQs from "./Components/Home/FAQs";
import ProjectDetails from "./Components/Projects/ProjectDetails";
import SendRequestForm from "./Components/Student/RequestForm/SendRequestForm";
import Supervisors from "./Components/Student/SupervisorsList/Supervisors";
import SubmissionsDocs from "./Components/Student/Submissions/SubmissionsDocs";
import AdminLogin from "./Components/Admin/AdminLogin";
import ViewRequest from "./Components/Supervisor/Requests/ViewRequest";
import DisplayMarksSheet from "./Components/Supervisor/MarksSheet/DisplayMarksSheet";
import MarksSheetList from "./Components/Supervisor/MarksSheet/MarksSheetList";
import MyProject from "./Components/Student/MyProject/MyProject";
import MyMarksSheet from "./Components/Student/MyMarksSheet/MyMarksSheet";

function App(props) {
  return (
    <Fragment>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Login" exact component={Login} />
          {
          localStorage.getItem('auth_token') !== null && <Route path="/supervisorLogin" exact component={SupervisorLogin} />
          }
          {
            localStorage.getItem('auth_token') !== null &&
            localStorage.getItem('user')=="student" &&
          <Route path="/studentLogin" exact component={StudentLogin} />
          }
          <Route path="/FAQs" exact component={FAQs} />
           {
             localStorage.getItem('auth_token') !== null &&
             localStorage.getItem('user')=="supervisor" &&

          <Route
            path="/ProjectDetails/:object"
            exact
            component={ProjectDetails}
          />
           }
           {
             localStorage.getItem('auth_token') !== null &&
             localStorage.getItem('user')=="student" &&
          <Route path="/SendRequestForm" exact component={SendRequestForm} />
           }
           {
             localStorage.getItem('auth_token') !== null &&
             localStorage.getItem('user')=="supervisor" &&
          <Route path="/Supervisors" exact component={Supervisors} />
           }
           { localStorage.getItem('auth_token') !== null &&
           localStorage.getItem('user')=="student" &&
          <Route path="/SubmissionsDocs" exact component={SubmissionsDocs} />
}
{
  localStorage.getItem('auth_token') !== null &&
  localStorage.getItem('user')=="supervisor" &&
   <Route path="/ViewRequest/:request" exact component={ViewRequest} />
}
{
  localStorage.getItem('auth_token') !== null &&
  localStorage.getItem('user')=="supervisor" &&
  <Route path="/MarksSheetList" exact component={MarksSheetList} />
}
{
  localStorage.getItem('auth_token') !== null &&
  localStorage.getItem('user')=="supervisor" &&
          <Route
            path="/DisplayMarksSheet"
            exact
            component={DisplayMarksSheet}
          />
}
{
  localStorage.getItem('auth_token') !== null &&
  localStorage.getItem('user')=="admin" &&
          <Route path="/AdminLogin" exact component={AdminLogin} />
}
{
  localStorage.getItem('auth_token') !== null &&
  localStorage.getItem('user')=="student" &&
          <Route path="/MyProject" exact component={MyProject} />
}
{
  localStorage.getItem('auth_token') !== null &&
  localStorage.getItem('user')=="student" &&
          <Route path="/MyMarksSheet" exact component={MyMarksSheet} />
}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
