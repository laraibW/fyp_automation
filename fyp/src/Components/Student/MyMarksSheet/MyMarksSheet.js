import 'bootstrap/dist/css/bootstrap.min.css';
import './mymarks.css';
function MyMarksSheet()
{
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
                <td className="tdData">80</td>
                <td className="tdData">80</td>
                <td className="tdData">80</td>
                <td className="tdData">80</td>
                <td className="tdData">80</td>
                <td className="tdData">80</td>
                <td className="tdData">80</td>
                <td className="tdData">80</td>
            </tr>
            </table>
        </center>
      </div>
    );
}
export default MyMarksSheet;