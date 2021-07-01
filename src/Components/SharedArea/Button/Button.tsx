import "./Button.css";
import {NavLink} from "react-router-dom";
import React from "react";

const styles = ["btn--primary", "btn--outline"];
const sizes = ["btn--medium", "btn--large"];

// TODO -- Specify Types
interface Props {
    className?:string;
    children?:any;
    type?:any;
    onClick?:any;
    buttonStyle?:any;
    buttonSize?:any;
}

export const Button: React.FC<Props> = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize
                       }) => {
    const checkButtonStyle = styles.includes(buttonStyle)
        ? buttonStyle : styles[0];

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

    return (
        <NavLink to="/log-in" className="btn-mobile">
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </NavLink>
    );
};