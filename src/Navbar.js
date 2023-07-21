import { Link } from "react-router-dom";

export default function Navbar() {
    return ( <div className="navbar-in">
        <Link className="portfolio">
            <h1>Portfolio</h1></Link>
        <img className="nav-logo" src="https://freeicons.io/business-and-employees-7/coordinator-icon-434824" alt="" /> 
            

        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/clients">Clients</Link>
            </li>
        </ul>
    </div>
 )
}