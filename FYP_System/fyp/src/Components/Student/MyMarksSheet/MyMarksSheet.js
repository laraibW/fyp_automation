import 'bootstrap/dist/css/bootstrap.min.css';
import './mymarks.css';
import Cookies  from "universal-cookie";
import {useEffect,useState} from 'react'

function MyMarksSheet()
{
  const cookies = new Cookies();
  const [marksSheet,setmarksSheet] = useState([])
  useEffect(()=>{
    let res=fetch("/students/marksheet",{
      method:"POST",
      headers:{"Content":"application/json"},
      body: JSON.stringify({"username":cookies.get('username')})
    }).then(data => data.json()).then((data)=> {
      //data=data.json()
      console.log("Marksheet data",data.data)
      setmarksSheet(Array.from(data.data))
      //data.map((e)=> console.group(e))
    }).catch(err=>{
      console.log(err)
    })
    console.log("res is",marksSheet)
  },[])

    return(
        <div>
        <div className="topBar">
      <p className="dashboard"><b>
        My Marks Sheet
        </b>
      </p>
      </div>
      <center>
            <table class="tableC" >
            <tr>
                  <th>Project ID</th><th>Proposal</th><th>D1</th><th>D2</th><th>R1</th><th>R2</th><th>Capstone-1</th><th>Capstone-2</th>
                </tr>
            <tr>
                <td className="tdData">{marksSheet[0]}</td>
                <td className="tdData">{marksSheet[1]}</td>
                <td className="tdData">{marksSheet[2]}</td>
                <td className="tdData">{marksSheet[3]}</td>
                <td className="tdData">{marksSheet[4]}</td>
                <td className="tdData">{marksSheet[5]}</td>
                <td className="tdData">{marksSheet[6]}</td>
                <td className="tdData">{marksSheet[7]}</td>
            </tr>
            </table>
        </center>
      </div>
    );
}
export default MyMarksSheet;
