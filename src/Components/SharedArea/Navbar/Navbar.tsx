import "./Navbar.css";
import {NavLink} from "react-router-dom";
import {useState, useEffect} from "react";
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import {Button} from "../Button/Button";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import globals from "../../../Services/Globals/MethodsUri";

function Navbar(): JSX.Element {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // The if statement will make that the website's navbar will suit the user's browser's size.
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // Makes sure the Log In button doesn't appear when refreshing a minimized browser
    useEffect(() => {
        showButton();
    }, []);

    // Material UI theme for the menu icon
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#fefefe"
            }
        }
    });

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    {/* The Website's Icon */}
                    <NavLink to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                        <StorefrontOutlinedIcon/> Coupons Time!
                        <i className='fa-typo3'/>
                    </NavLink>

                    {/* Menu Icon */}
                    <ThemeProvider theme={theme}>
                        <div className="menu-icon" onClick={handleClick}>
                            <i className={click ? "fa-times" : "fa-bars"}/>
                            {click ? <MenuOpenIcon color="primary"/> : <MenuIcon color="primary"/>}
                        </div>
                    </ThemeProvider>

                    {/* Navbar items */}
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        {/* HomeLayout */}
                        <li className="nav-item">
                            <NavLink to="/home" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>

                        {/* My Area */}
                        <li className="nav-item">
                            <NavLink to="/my-area" className="nav-links" onClick={closeMobileMenu}>
                                My Area
                            </NavLink>
                        </li>

                        {/* Log In */}
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Log In
                            </NavLink>
                        </li>

                    </ul>

                    {/* A fancy Log In button */}
                    {button && <Button buttonStyle="btn--outline">Log In</Button>}

                </div>
            </nav>
        </>
    );
}

export default Navbar;
