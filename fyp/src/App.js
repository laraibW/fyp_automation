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
          <Route path="/supervisorLogin" exact component={SupervisorLogin} />
          <Route path="/studentLogin" exact component={StudentLogin} />
          <Route path="/FAQs" exact component={FAQs} />
          <Route
            path="/ProjectDetails/:object"
            exact
            component={ProjectDetails}
          />
          <Route path="/SendRequestForm" exact component={SendRequestForm} />
          <Route path="/Supervisors" exact component={Supervisors} />
          <Route path="/SubmissionsDocs" exact component={SubmissionsDocs} />
          <Route path="/ViewRequest/:request" exact component={ViewRequest} />
          <Route path="/MarksSheetList" exact component={MarksSheetList} />
          <Route
            path="/DisplayMarksSheet"
            exact
            component={DisplayMarksSheet}
          />
          <Route path="/AdminLogin" exact component={AdminLogin} />
          <Route path="/MyProject" exact component={MyProject} />
          <Route path="/MyMarksSheet" exact component={MyMarksSheet} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
