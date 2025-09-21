import "../styles/Footer.css";
import logo from "../assets/logo.png";
import whatsappIcon from "../assets/whatsapp-icon.png";
import xIcon from "../assets/x-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import facebookIcon from "../assets/facebook-icon.png";

export function Footer() {
  return (
    <footer className="std-footer">
      <div className="footer-links-section">
        <div className="footer-links footer-links-left ">
          <img src={logo} alt="logo" className="footer-logo" />
          <p className="footer-p">
            Estamos pronto para lhe oferecer conforto e comodidade
          </p>

          <div>
            <p className="footer-p">email@gmail.com</p>
            <p className="footer-p">(55) 5555-5555</p>
          </div>
        </div>

        <div className="footer-links">
          <h3 className="footer-link-header">Links rápidos</h3>

          <ul className="footer-ul">
            <li className="footer-li">Inicio</li>
            <li className="footer-li">Quem somos</li>
            <li className="footer-li">Registrar</li>
            <li className="footer-li">Entrar</li>
          </ul>
        </div>
        <div className="footer-links">
          <h3 className="footer-link-header">Suporte</h3>

          <ul className="footer-ul">
            <li className="footer-li">Central de ajuda</li>
            <li className="footer-li">Termos de uso</li>
            <li className="footer-li">Privacidade</li>
            <li className="footer-li">Saiba mais</li>
          </ul>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-socials">
        <img
          src={whatsappIcon}
          alt="whatsapp icon"
          className="footer-social-icon"
        />
        <img
          src={facebookIcon}
          alt="facebook icon"
          className="footer-social-icon"
        />
        <img
          src={instagramIcon}
          alt="instagram icon"
          className="footer-social-icon"
        />
        <img src={xIcon} alt="x icon" className="footer-social-icon" />
        <img
          src={linkedinIcon}
          alt="linkedin icon"
          className="footer-social-icon"
        />
      </div>

      <p className="footer-copyright">
        &copy; Todos os direitos reservados VORTEX
      </p>
    </footer>
  );
}
