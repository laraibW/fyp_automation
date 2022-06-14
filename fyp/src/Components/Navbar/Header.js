
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
function Header(){
        return (
            <nav className="nav">
                <table width="100%" cellPadding="10%" className="tableNavbar">
                    <tr>
                    <td className="title">
                    
                    <img src={logo} className="logo" alt="logo" />&nbsp; <font className="fnt"> Final Year Project Automation System</font>
                    
                    </td>

                    <td className="links"> 
                    <Link className="link" to='/FAQs'>FAQs</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="link" to='/Login'>Logout</Link>
                    </td>
                    </tr>
                </table>
            </nav>
            
        );
}

export default Header;