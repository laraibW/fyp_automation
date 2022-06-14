import React from "react";

function Supervisors(props) {
  return (
    <div className="SPAllinfo">
      <h4 className=" SPname">{props.name}</h4>
      <p className=" SPdetails">{props.details}</p>
      <p className=" SPemail">{props.email}</p>
      <hr></hr>
    </div>
  );
}

export default Supervisors;
