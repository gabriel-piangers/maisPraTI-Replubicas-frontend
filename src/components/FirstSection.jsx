import { FaSearch } from "react-icons/fa";
import "../styles/FirstSection.css";
import Imagem1 from "../assets/Imagem1.avif";

export function FirstSection()  {
  return (
    <section className="hero-container" style={{ backgroundImage: `url(${Imagem1})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            ACOMODAÇÃO, SEGURANÇA E CONFORTO.
          </h1>
          <p className="hero-subtitle">
            ENCONTRE SEU PRÓXIMO DESTINO.
          </p>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Busque seu destino"
            />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>
        <div className="hero-banner">
          A MORADA EXCLUSIVA PREMIUM ESTÁ PRONTA PARA LHE OFERECER CONFORTO E COMODIDADE.
        </div>
      </div>
    </section>
  );
};