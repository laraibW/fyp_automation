import react, { Component } from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './submission.css';
function SubmissionsDocs(props)
{
  const [selectedFile, setSelectedFile] = useState(null);
    return(
      <div>
      <div className="topBar">
      <p className="dashboard"><b>
        Student Dashboard
        </b>
      </p>
      </div>
      <center>
    <div className="AppS">
      <table width="100%">
        <tr>
          <td>
     
      <form className="farm">
      <label className="lebal">
       Proposal:
     </label>
      <input 
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      <button className="btnSubmit btnProposal">Submit</button>
      </form>

          </td>
        </tr>
      <tr>
        <td>
      <form className="farm">
      <label className="lebal">
       D1:
     </label>
      <input className='inp'
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[1])}
        />
       <button className="btnSubmit btnD1">Submit</button>
      </form> 
      </td>
      </tr>
      <tr>
        <td>
      <form className="farm">
      <label className="lebal">
       D2:
     </label>
      <input className='inp'
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[2])}
        />
       <button className="btnSubmit btnD2">Submit</button>
      </form>
      </td>
      </tr>
      <tr><td>
      <form className="farm">
      <label className="lebal">
       R1:
     </label>
      <input className='inp'
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[3])}
        />
       <button className="btnSubmit btnR1">Submit</button>
      </form>
      </td></tr>
      <tr><td>
      <form className="farm">
      <label className="lebal">
       R2:
     </label>
      <input className='inp'
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[4])}
        />
       <button className="btnSubmit btnR2">Submit</button>
      </form>
      </td></tr>
      <tr><td>
      <form className="farm">
      <label className="lebal">
       Code:
     </label>
      <input className='inp1'
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[5])}
        />
       <button className="btnSubmit btnCode">Submit</button>
      </form>
      </td></tr>
      </table>
    </div>
    </center>
      </div>
      
    );
}
export default SubmissionsDocs;