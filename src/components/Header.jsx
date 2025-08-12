import logo from "../assets/logo.png"
import { Button } from "./Button"
import "../styles/Header.css"

export function Header() {


    return (
        <>
            <nav className="header-nav">
                <img src={logo} alt="Logo" className="header-nav-logo"/>

                <div className="header-nav-options">
                    <button className="header-register-btn">
                        Cadastre-se
                    </button>
                    
                    <Button className="header-login-btn" label="Login"/>
                </div>
            </nav>
        </>
    )
}