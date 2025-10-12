import houseImg from "../assets/casa2.jpg";
import { FaBed, FaUsers, FaBath } from "react-icons/fa";
import { TbArrowBack } from "react-icons/tb";
import { Avatar } from "antd";
import { Button } from "../components/Button";
import "../styles/DetailsPage.css";
import { useNavigate } from "react-router-dom";

export function DetailsPage() {
  const republic = {
    id: 1,
    name: "República Exemplo",
    address: "Rua Exemplo, 123 - Cidade, Estado",
    imageUrl: houseImg,
    description:
      "Uma descrição detalhada sobre a república, suas características, regras e o que a torna especial. Aqui você pode incluir informações sobre a localização, ambiente, facilidades próximas e qualquer outro detalhe relevante para potenciais moradores. Esta república é ideal para estudantes e jovens profissionais que buscam um ambiente acolhedor e colaborativo.",
    members: 5,
    available_rooms: 3,
    total_bathrooms: 2,
    published_date: "2023-10-01",
    price: 1200,
    host: {
      name: "João Silva",
      contact: "(11) 91234-5678",
      email: "exemplo@email.com",
    },
  };

  const navigate = useNavigate();

  return (
    <>
      <main className="details-main">
        <section className="details-left">
          <img
            className="details-img"
            src={republic.imageUrl}
            alt="Foto da republica"
          />
          <TbArrowBack className="details-return" onClick={() => {
            navigate(-1)
          }}/>
          <div className="details-info">
            <div className="details-header">
              <div>
                <h2>{republic.name}</h2>
                <p className="details-address">{republic.address}</p>
              </div>
              <div>
                <h2>R$ {republic.price}</h2>
                <small>por mês</small>
              </div>
            </div>

            <hr />

            <div className="details-cards">
              <div className="details-card">
                <FaUsers className="details-card-icon" />
                <span>{republic.members}</span>
                <p>Moradores</p>
              </div>
              <div className="details-card">
                <FaBed className="details-card-icon" />
                <span>{republic.available_rooms} </span>
                <p>Quartos disponíveis</p>
              </div>
              <div className="details-card">
                <FaBath className="details-card-icon" />
                <span>{republic.total_bathrooms}</span>
                <p>Banheiros</p>
              </div>
            </div>

            <hr />

            <div className="details-description">
              <h3>Descrição</h3>
              <p>{republic.description}</p>
            </div>

            <hr />

            <div className="details-additional">
              <h3>Informações adicionais</h3>
              <p>
                Publicado em: <strong>{republic.published_date}</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="details-right">
          <h2>Anunciante</h2>
          <div className="details-host-icon">
            <Avatar className="avatar">{republic.host.name[0]}</Avatar>
            <h3>{republic.host.name}</h3>
          </div>

          <div className="details-contact">
            <div>
              <p>Telefone:</p>
              <p>{republic.host.contact}</p>
            </div>
            <div>
              <p>Email:</p>
              <p>{republic.host.email}</p>
            </div>
          </div>
          <Button label="Entrar em contato" className="details-contact-btn" />
        </section>
      </main>
    </>
  );
}
