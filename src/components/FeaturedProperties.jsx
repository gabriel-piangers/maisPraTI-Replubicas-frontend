import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../styles/FeaturedProperties.css";
import Imagem2 from "../assets/Imagem3.jpg";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const imagesMap = {
  "imagem3.jpg": Imagem2,
};

const featured = {
  title: "Propriedades em Destaque.",
  subtitle: "Descubra os melhores espaços para você.",
  sections: [
    {
      label: "Lugares Exclusivos",
      favorites: true,
      items: [
        {
          img: "imagem3.jpg",
          name: "NOME LOCAL",
          price: 1006,
          stars: 5,
          id: 1,
        },
        {
          img: "imagem3.jpg",
          name: "NOME LOCAL",
          price: 1006,
          stars: 5,
          id: 1,
        },
        {
          img: "imagem3.jpg",
          name: "NOME LOCAL",
          price: 1005,
          stars: 5,
          id: 1,
        },
      ],
    },
    {
      label: "Mais Baratos",
      favorites: false,
      items: [
        {
          img: "imagem3.jpg",
          name: "NOME LOCAL",
          price: 1006,
          stars: 5,
          id: 1,
        },
        {
          img: "imagem3.jpg",
          name: "NOME LOCAL",
          price: 1006,
          stars: 5,
          id: 1,
        },
        {
          img: "imagem3.jpg",
          name: "NOME LOCAL",
          price: 1005,
          stars: 5,
          id: 1,
        },
      ],
    },
  ],
};

export function FeaturedProperties() {
  const navigate = useNavigate();

  return (
    <section className="fp-section">
      <div className="fp-header">
        <h1>{featured.title}</h1>
        <p>{featured.subtitle}</p>
      </div>

      {featured.sections.map((sec, si) => (
        <div key={si} className="fp-block">
          <h3 className="fp-block-label">{sec.label}</h3>

          <div className="fp-cards">
            {sec.items.map((item, i) => (
              <div key={i} className="fp-card">
                <div className="fp-image-wrapper">
                  <img
                    src={imagesMap[item.img]}
                    alt={item.name}
                    className="fp-image"
                  />
                  {sec.favorites ? (
                    <FaHeart className="fp-icon favorite" />
                  ) : (
                    <FaRegHeart className="fp-icon" />
                  )}
                </div>

                <div className="fp-info">
                  <div className="fp-info-header">
                    <span className="fp-name">{item.name}</span>
                    <span className="fp-state">SP</span>
                  </div>
                  <div className="fp-info-footer">
                    <div>
                      <div className="fp-price">
                        <span>R${item.price}</span>
                        <small>/ dia</small>
                      </div>
                      <div className="fp-stars">
                        {Array.from({ length: item.stars }).map((_, idx) => (
                          <span key={idx} className="star">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      label="Ver detalhes"
                      id="fp-info-btn"
                      onClick={() => {
                        navigate(`/details?id=${item.id}`);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
