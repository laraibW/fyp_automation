
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import pucit from './pucit.png';
import Cookies  from "universal-cookie";
function Header(){
    const cookies = new Cookies();
     function logout(){
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
        cookies.remove("user");
        window.location.replace("/")
     }
        return (
            <nav className="nav">
                <table width="100%" cellPadding="10%" className="tableNavbar">
                    <tr>
                    <td className="title">

                    <img src={pucit} className="logo" alt="logo" />&nbsp; <font className="fnt"> Final Year Project Automation</font>

                    </td>

                    <td className="links">
                    <button className="link"  onClick={()=> window.location.replace("/FAQs")}>FAQs</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button className="link" onClick={logout}>Logout</button>
                    </td>
                    </tr>
                </table>
            </nav>

        );
}

export default Header;
