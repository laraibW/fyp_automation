import {  Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';


import Cookies from 'universal-cookie';

function Login(){
  const cookies = new Cookies();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [auth,setAuth]=useState(false);
  const[usertype,setUsertype]=useState("")
  //useEffect(()=>{},[])
  function verify_login(){
    let res=fetch("/verify-login",{
      method:"POST",
      headers:{"Content":"application/json"},
      body: JSON.stringify({"username": username,"password":password})
    }).then(data => data.json()).then((data)=> {
      //data=data.json()
      console.log(data)
      //setStudents(data)
      if(data.Authorized)
      {
        setAuth(true)
        // let credentials = {
        //   username: username,
        //   password: password,
        // };
        // fetch("/get-token", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(credentials),
        // })
        // .then(data => data.json())
        // .then((data)=> {
        //   console.log("getting token",data)
        //   localStorage.setItem('auth_token', data.access);
        //   //data.map((e)=> console.group(e))
        // }).catch(err=>{
        //   console.log(err)

        // })
      localStorage.setItem('auth_token', data.auth_token);
      setUsertype(data.user_status)
      cookies.set('username',username)
      localStorage.setItem('user',data.user_status)
      if(data.user_status== "student")
           window.location.replace("/StudentLogin")
           else if(data.user_status== "admin")
           window.location.replace("/AdminLogin")
           else if(data.user_status== "supervisor")
           window.location.replace("/SupervisorLogin")
      }
      else{
        alert("Incorrect username or password")
        window.location.replace("/")

      }


      //data.map((e)=> console.group(e))
    }).catch(err=>{
      console.log(err)

    })
    console.log("res is",res)


  }



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
        Username: <input class="form-control" onChange={(e)=>{
          setUsername(e.target.value)
        }}
        value={username} type="text" placeholder="Enter Username" required/>    <br/>

        Password: <input type="password" class="form-control"
        onChange={(e)=>{
          setPassword(e.target.value);
          ///cookies.set('username',e.target.value);
        }}
        value={password}
        placeholder="Enter Password" required/>
        <br/>
        <center>
       <Link class="btn btn-success" onClick={()=>{
         verify_login()
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
