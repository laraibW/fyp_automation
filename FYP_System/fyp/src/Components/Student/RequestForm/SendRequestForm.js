import React, { useEffect, useState } from "react";
import "./requestForm.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies  from "universal-cookie";
function SendRequestForm() {


  const cookies = new Cookies();
  const [user1,setUser1]= useState("")
  const [user2,setUser2]= useState("")
  const [user3,setUser3]= useState("")
  const [user4,setUser4]= useState("")
  const [user5,setUser5]= useState("")
  const [supervisor,setsupervisor]= useState("")
  const [title,setTitle]= useState("")
  const [details,setDetails]= useState("")
  function sendRequest()
  {
      let inp_data={
        "title": title,
        "supervisor": supervisor,
        "user1": user1,
        "user2": user2,
        "user3": user3,
        "user4": user4,
        "user5": user5,
        "details": details
      }
      let res=fetch("students/create-request",{
        method:"POST",
        headers:{"Content":"application/json"},
        body: JSON.stringify(inp_data)
      }).then(data => data.json()).then((data)=> {
        //data=data.json()
        console.log("request data",data.data)
        //setmarksSheet(Array.from(data.data))
        //data.map((e)=> console.group(e))
        alert(data.status)

      }).catch(err=>{
        console.log(err)
      })



  }

  function myFunction() {
    alert("Your request has been sent!")
}
return(
<div>
<div className="topBar">
          <p className="dashboard"><b>
            Request Form
            </b>
          </p>
          </div>
<div className="divStyle">
<form action='/StudentLogin' onSubmit={myFunction}>
<div className="row pt-5 mx-auto">
<div className="col-8 form-group mx-auto">
<input type="text" class="form-control" placeholder="Title" name="name" value={title} onChange={(e)=>{
          setTitle(e.target.value);
        }} required />
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="email"  placeholder="Supervisor Email" value={supervisor}
onChange={(e)=>{
  setsupervisor(e.target.value)
}}name="email" required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="email"  onChange={(e)=>{
          setUser1(e.target.value)
        }} placeholder="Member 1" value={user1} name="email"  required/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="email" onChange={(e)=>{
          setUser2(e.target.value)
        }} placeholder="Member 2" value={user2} name="email" />
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="email"  placeholder="Member 3" onChange={(e)=>{
          setUser3(e.target.value)
        }} value={user3} name="email"/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="email"  placeholder="Member 4" value={user4}
onChange={(e)=>{
  setUser4(e.target.value)
}} name="email"/>
</div>
<div className="col-8 form-group pt-2 mx-auto">
<input  class="form-control" type="email"  placeholder="Member 5"
onChange={(e)=>{
  setUser5(e.target.value)
}} value={user5} name="email"/>
</div>

<div className="col-8 form-group pt-2 mx-auto">
<textarea class="form-control" id="" cols="30" rows="8"
onChange={(e)=>{
  setDetails(e.target.value)
}}
value={details} placeholder="Details" name="message" required></textarea>
</div>
<div className="col-8 pt-3 mx-auto">
<button type='submit' class="btn btn-success" onClick={()=> sendRequest()}>Send Request</button>
</div>



</div>
</form>
</div>
</div>
);

}
export default SendRequestForm;
