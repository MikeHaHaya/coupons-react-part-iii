import "./Routes.css";
import {Switch, Route} from "react-router-dom";
import Navbar from "../SharedArea/Navbar/Navbar";
import HomeLayout from "../Pages/HomeArea/HomeLayout/HomeLayout";
import LoginLayout from "../Pages/LogInArea/LoginLayout/LoginLayout";
import {useHistory} from "react-router";
import {useEffect} from "react";
import AdminMenu from "../Users/AdminArea/AdminMenu/AdminMenu";
import CompanyMenu from "../Users/CompanyArea/CompanyMenu/CompanyMenu";
import CustomerMenu from "../Users/CustomerArea/CustomerMenu/CustomerMenu";


function Routes(): JSX.Element {

    const history = useHistory();
    useEffect(() => {
        history.push("/home")
    }, [history]);

    return (
        <div className="Routes">
            <Navbar/>
            <Switch>
                <Route path="/home" exact component={HomeLayout}/>
                <Route path="/login" exact component={LoginLayout}/>
                <Route path="/admin" exact component={AdminMenu}/>
                <Route path="/company" exact component={CompanyMenu}/>
                <Route path="/customer" exact component={CustomerMenu}/>
            </Switch>
        </div>
    );
}

export default Routes;
