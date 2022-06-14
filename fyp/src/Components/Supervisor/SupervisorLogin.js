import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './supervisor.css';
import ListProjects from '../Projects/ListProjects';
import RequestsList from './Requests/RequestsList';

function SupervisorLogin()
{
    return(
        <div className="Supervisor">
            <div className="topBar">
          <p className="dashboard"><b>
            Supervisor Dashboard
            </b>
          </p>
          </div>
          <div className='marks'><Link to="/DisplayMarksSheet" >MarksSHeet</Link> </div>
          <table className='table'>
            <tr>
              <td className="data2">
                
                <div class="display-4">Lists Of Projects</div>
                
                 {ListProjects.map((e)=>{
                  return (
                    <div>
                  <Link to={`/ProjectDetails/${JSON.stringify (e)}`} class="btn btn-success" >{e.title}
                  </Link>
                  </div>
                );})}
              </td>
              <td  className="data2">
                <div class="display-4">Pending Requests</div>
        {RequestsList.map((e)=>{
           return (
             <div>
            <Link to={`/ViewRequest/${JSON.stringify(e)}`} class="btn btn-success">{e.title}
            </Link>
            </div>
         );})}
    
              </td>
            </tr>
          </table>
        </div>
    );
}

export default SupervisorLogin;
