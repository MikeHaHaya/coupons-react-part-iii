import "./Routes.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../SharedArea/Navbar/Navbar";
import HomePage from "../Pages/HomeArea/HomePage/HomePage";

function Routes(): JSX.Element {
    return (
        <div className="Routes">
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/home" exact component={HomePage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
