import React, { useEffect, useState } from "react";
import MarksSheetList from "./MarksSheetList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './marksSheet.css';
function DisplayMarksSheet(){
  const [data,setData]=useState([{
    ProjectID:"",
    Proposal:"",
    D1:"",
    D2:"",
    R1:"",
    R2:"",
    Capstone1:"",
    Capstone2:""
  }])
        return(
            <div >
                <div className="topBar">
              <p className="dashboard"><b>
                Marks Sheet
                </b>
              </p>
              </div>
                   <table className="table1">
                <tr>
                  <th>Project ID</th><th>Proposal</th><th>D1</th><th>D2</th><th>R1</th><th>R2</th><th>Capstone-1</th><th>Capstone-2</th>
                </tr>
                  {data.map((e)=>{
                      return(
                       <tr>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.ProjectID} required/></td>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.Proposal} required/></td>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.D1} required/></td>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.D2} required/></td>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.R1} required/></td>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.R2} required/></td>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.Capstone1} required/></td>
                       <td className="tdData"><input class="form-control" type="text" placeholder="Marks" value={e.Capstone2} required/></td>
                       </tr>
                      );
                  })}
                  
            
             </table>
             <div>
             <div className='buttn2'>Submit Marks Sheet</div>
             <div className='buttn' onClick={()=>{
               const obj={
                ProjectID:"",
                Proposal:"",
                D1:"",
                D2:"",
                R1:"",
                R2:"",
                Capstone1:"",
                Capstone2:""
              }
               setData([...data,obj])
             }}>Add Row</div>
             <div class="buttn1" onClick={()=>{
                const newArr=data.splice(1,data.length-1)
                setData(newArr)
             }}>Delete Row</div>
             </div>
            </div>
        );
    }
    export default DisplayMarksSheet;