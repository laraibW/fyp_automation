//import StudentIds from './StudentsIds';
//import SupervisorsIds from "./SupervisorsIds";
import './admin.css';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
function Admin(props){
  const [StudentIds,setStudents]=useState([])
  const [SupervisorsIds,setSupervisor]=useState([])
  function getStudents(){

  }


  useEffect(()=>{
    let res=fetch("/get-all-students",{
      method:"GET",
      headers:{"Content":"application/json"},
    }).then(data => data.json()).then((data)=> {
      //data=data.json()
      console.log(data)
      setStudents(data)

      //data.map((e)=> console.group(e))
    }).catch(err=>{
      console.log(err)

    })
    console.log("res is",res)
  },[])


  useEffect(()=>{
    let res=fetch("/get-all-supervisor",{
      method:"GET",
      headers:{"Content":"application/json"},
    }).then(data => data.json()).then((data)=> {
      //data=data.json()
      console.log(data)
      setSupervisor(data)
      //data.map((e)=> console.group(e))
    }).catch(err=>{
      console.log(err)

    })
    console.log("res is",res)
  },[])

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
                <td className='tdata'><input class="form-control form-control-lg" value={e.name}></input></td>
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
                <td className='tdata'><input class="form-control form-control-lg" value={e.name}></input></td>
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
