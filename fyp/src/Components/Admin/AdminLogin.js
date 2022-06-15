import StudentIds from './StudentsIds';
import SupervisorsIds from "./SupervisorsIds";
import './admin.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
function Admin(props){
  const [studenst,setStudents]=useState([])
  function getStudents(){

  }


  useEffect(()=>{
    let res=fetch("http://127.0.0.1:8000/get-all-students",{
      method:"GET",
      headers:{"Content":"application/json"},
    }).then(data => data.json()).catch(err=>{
      console.log(err)
      //setStudents(data)
    })
    console.log("res is",res)
  })

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
