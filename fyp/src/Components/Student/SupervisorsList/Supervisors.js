import React, { useState, useEffect } from "react";


function Supervisors(props) {

  const [items,setItems]=useState(null)

  const mylist=()=>{
    let objs=null;
    fetch("/students/get-supervisors",{
      method:"GET",
      headers:{"Content":"application/json"},
    }
    ).then(data=>data.json()).then((data)=>{
      console.log(data)
      objs = data.map((o, idx) => {
      return <li key={idx}>
        <h4 className=" SPname">{o.name}</h4>
        <p className=" SPdetails">{o.details}</p>
        <p className=" SPemail">{o.email}</p>
      </li>
      })
      setItems(objs);
    })
    return <ol>{objs}</ol>
  }

  useEffect(()=>{
    mylist();
  },[])
  return (
    <div className="SPAllinfo">
      <ol>{items}</ol>
      <hr></hr>
    </div>
  );
}

export default Supervisors;
