import "./Navbar.css";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';

function Navbar(): JSX.Element {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div className="Navbar">
            <nav className="Navbar">
                <NavLink to="/home" className="navbar-logo"> {/*TODO -- Add a logo*/}
                    <StorefrontOutlinedIcon/> Coupons Time!
                </NavLink>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <MenuOpenIcon/> : <MenuIcon/>}
                </div>
                <ul className={click ? "nav-menu-active" : "nav-menu-inactive"}>
                    <li className="nav-item">
                        <NavLink to="/home" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </NavLink>
                        <NavLink to="/my-area" className="nav-links" onClick={closeMobileMenu}>
                            My Area
                        </NavLink>
                        <NavLink to="/login" className="nav-links" onClick={closeMobileMenu}>
                            Log In
                        </NavLink>
                        <NavLink to="/signup" className="nav-links" onClick={closeMobileMenu}>
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
