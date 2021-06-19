import "./Routes.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../SharedArea/Navbar/Navbar";

function Routes(): JSX.Element {
    return (
        <div className="Routes">
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/home" exact/>
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
