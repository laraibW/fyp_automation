import React, { useState, useEffect } from "react";


function SupervisorsIds(props) {

  const [items,setItems]=useState([])

  const mylist=()=>{
    let objs=null;
    fetch("/get-all-supervisors",{
      method:"GET",
      headers:{"Content":"application/json"},
    }
    ).then(data=>data.json()).then((data)=>{
      console.log(data)
      objs = data
      setItems(objs)
    })
    return <ol>{objs}</ol>
  }

  useEffect(()=>{
    mylist();
  },[])
  return  items;
}

export default SupervisorsIds;
