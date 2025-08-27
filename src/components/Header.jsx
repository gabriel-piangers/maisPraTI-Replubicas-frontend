import logo from "../assets/logo.png"
import { Button } from "./Button"
import "../styles/Header.css"
import { Link } from "react-router-dom"

export function Header() {


    return (
        <>
            <nav className="header-nav">
                <img src={logo} alt="Logo" className="header-nav-logo"/>

                <div className="header-nav-options">
                    <Link to="/register" className="header-register-btn">
                            Cadastre-se
                    </Link>
                    
                    <Button className="header-login-btn" label="Login"/>
                </div>
            </nav>
        </>
    )
}