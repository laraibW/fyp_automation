import React, { useEffect, useState } from 'react';
import "./requests.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function ViewRequest(props) {
    const[request,setRequest]=useState(JSON.parse(props.match.params.request))  
return(
<div>
<div className="topBar">
          <p className="dashboard"><b>
            Request Form
            </b>
          </p>
          </div>
<div className="divStyle">
<form>
<div className="row pt-5 mx-auto">
    <h3 className="data">Title:</h3>
<div className="col-8 form-group mx-auto">
<div class="form-control">
    {request.title}
    </div>
</div>
<h3 className="data">Email ID:</h3>
<div className="col-8 form-group pt-2 mx-auto">
<div class="form-control">
    {request.email}
    </div>
</div>
<h3 className="data">Name:</h3>
<div className="col-8 form-group pt-2 mx-auto">   
<div class="form-control">
    {request.sender}
    </div>
</div>
<h3 className="data">Content:</h3>
<div className="col-8 form-group pt-2 mx-auto">
<div class="form-control">
    {request.detail}
    </div>
</div>



</div>
</form>
</div>
</div>
);
}

export default ViewRequest;