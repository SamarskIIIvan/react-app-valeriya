import "./Nav.css"

import {NavLink} from "react-router-dom";

export const Nav = () =>{
    return(
        <div className={'nav'} >
            <NavLink
                to="/nano"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'Black'}
                }}
            >
                Наноэлектроника
            </NavLink >
            <NavLink
                to="/history"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'Black'}
                }}
            >
                История
            </NavLink>
            <NavLink
                to="/dev"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'Black'}
                }}
            >
                Развитие
            </NavLink>
            <NavLink
                to="/tasks"
                style={({ isActive }) => {
                    return {color: isActive ? 'red' : 'Black'}
                }}
            >
                Основные задачи
            </NavLink>

        </div>
    )
}