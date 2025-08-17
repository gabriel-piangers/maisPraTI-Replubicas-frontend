import logo from "../assets/logo.png";
import "../styles/AboutCards.css"

export function AboutCards() {
  return (
    <section className="about-section">
      <h2 className="about-title"> Saiba mais </h2>

      <div className="about-cards-container">
        <div className="about-card">
          <div className="center-container">
            <img
            src={logo}
            className="about-card-icon"
            alt="icone da seção quem somos"
          />
          </div>
          <h3 className="about-card-title"> QUEM SOMOS </h3>
          <hr className="about-card-line" />
          <p className="about-card-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui,
            quisquam ullam eos explicabo rerum praesentium expedita officiis
            culpa beatae!
          </p>
        </div>
        <div className="about-card">
          <div className="center-container">
            <img
            src={logo}
            className="about-card-icon"
            alt="icone da seção quem somos"
          />
          </div>
          <h3 className="about-card-title"> O QUE PODEMOS OFERECER </h3>
          <hr className="about-card-line" />
          <p className="about-card-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui,
            quisquam ullam eos explicabo rerum praesentium expedita officiis
            culpa beatae!
          </p>
        </div>
        <div className="about-card">
          <div className="center-container">
            <img
            src={logo}
            className="about-card-icon"
            alt="icone da seção quem somos"
          />
          </div>
          <h3 className="about-card-title"> NOSSOS SERVIÇOS </h3>
          <hr className="about-card-line" />
          <p className="about-card-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui,
            quisquam ullam eos explicabo rerum praesentium expedita officiis
            culpa beatae!
          </p>
        </div>
      </div>
    </section>
  );
}
