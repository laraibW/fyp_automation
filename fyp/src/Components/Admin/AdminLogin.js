import StudentIds from './StudentsIds';
import SupervisorsIds from './SupervisorsIds';
import './admin.css';
import {Link} from 'react-router-dom';
function Admin(props){
    return(
        <div>
              <div className="topBar">
          <p className="dashboard"><b>
            Admin Dashboard
            </b>
          </p>
          </div>
          <center>
          <div>
            <table width="80%">
            <tr>
              <td>
                <div>
              <table className='adminTable'>
              <th className='tdata'>Student Ids</th>
              {StudentIds.map((e)=>{
               return(
                <tr>
                <td className='tdata'><input class="form-control form-control-lg" value={e.id}></input></td>
              </tr>
               );
            })}
            <tr>
               <td>  <div className='buttnD' >Remove</div>
               <div className='buttnA' >Add</div>
               <div className='buttnC' >ChangePswd</div>
               <div className='buttnR' >ResetPswd</div>
               </td>
            
            </tr>
              </table>
              </div>
              </td>
              <td>
              <div className='divv'>
              <table className='adminTable' >
              <th className='tdata'>Supervisors Ids</th>
              {SupervisorsIds.map((e)=>{
               return(
                <tr>
                <td className='tdata'><input class="form-control form-control-lg" value={e.id}></input></td>
              </tr>
               );
            })}
             <tr>
               <td>  <div className='buttnD' >Remove </div>
               <div className='buttnA' >Add</div>
               <div className='buttnC' >ChangePswd</div>
               <div className='buttnR' >ResetPswd</div>
               </td>
              
            </tr>
              </table>
              </div>
              </td>
            </tr>
            </table>
          </div>
          </center>
        </div>
    );
}
export default Admin;