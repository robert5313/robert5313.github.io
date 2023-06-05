import { Link } from "react-router-dom";

export default function Navbar() {
    return ( <div className="navbar-in">
        <Link className="portfolio">
            Portfolio
            </Link>

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