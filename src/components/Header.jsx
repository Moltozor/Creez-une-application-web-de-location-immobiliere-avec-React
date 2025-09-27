import "../styles/index.css"

import logo from '../assets/LOGO.svg'
import { Link } from 'react-router-dom'

export function Header() {
    
    return (
        <header className="header">
            <img className="header_logo" src={logo} alt="Logo Kasa" />
            <nav className="header_nav">
                <Link to='/'>Accueil</Link>
                <Link to="/about">À propos</Link>
            </nav>
        </header>
    )
};