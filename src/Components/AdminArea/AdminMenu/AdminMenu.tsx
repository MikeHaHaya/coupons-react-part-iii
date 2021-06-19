import "./AdminMenu.css";
import { NavLink } from 'react-router-dom'

function AdminMenu(): JSX.Element {
    return (
        <div className="AdminMenu">
			some admin menu
            <NavLink to="/home"> Some home text </NavLink>
        </div>
    );
}

export default AdminMenu;
