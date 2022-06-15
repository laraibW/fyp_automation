import {  Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';


import Cookies from 'universal-cookie';

function Login(){
  const cookies = new Cookies();

  const [email,setEmail]=useState("");
   return(
      <div>
        <center>
      <div className="App">
        <center>
        <br></br>
      <table border="0" cellPadding="10%">
        <tr>
          <td>
          <img src={logo} className="App-logo" alt="logo" />
      <br/><br/>
        Email: <input class="form-control" onChange={(e)=>{
          setEmail(e.target.value)
          cookies.set('username',e.target.value);
        }} type="text" placeholder="Enter Email" required/>    <br/> 
      
        Password: <input type="password" class="form-control" placeholder="Enter Password" required/>      
        <br/>
        <center>
       <Link class="btn btn-success" onClick={()=>{
         if(email[0]=='b' && email[3]=='f')
         {
          window.location.replace("/StudentLogin")
         }
         else if(email=="admin") {
          window.location.replace("/AdminLogin")
         }
         else{
          window.location.replace("/SupervisorLogin")
         }
        
       }}>
        Login</Link>
      </center>
    
          </td>
        </tr>
      </table>
      </center>
  </div>
  </center>
  </div>
    );
    
}


export default Login;