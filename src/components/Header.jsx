import "../styles/index.css"

import logo from '../assets/LOGO.svg'
import { NavLink } from 'react-router-dom'

export function Header() {

    return (
        <header className="header">
            <img className="header_logo" src={logo} alt="Logo Kasa" />

            <nav className="header_nav">
                <NavLink to="/">
                    Accueil
                </NavLink>

                <NavLink to="/About">
                    À Propos
                </NavLink>
            </nav>
        </header >
    )
};