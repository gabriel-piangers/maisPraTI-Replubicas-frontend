import republicImg from "../assets/casa4.jpg";
import { useState } from "react";
import { LightButton } from "../components/LightButton";
import { Button } from "../components/Button";
import "../styles/MyRepublic.css";

export function MyRepublic() {
  const [republica, setRepublica] = useState({
    title: "República Exemplo",
    imageUrl: republicImg,
    address: "Rua das Flores, 123 - Cidade, Estado",
    description:
      "Uma descrição breve sobre a república, suas características e o que a torna especial.",
    members: 5,
    available_rooms: 2,
  });
  const [editing, setEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState(republicImg);

  const handleUpdateImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    payload.imageUrl = imageUrl;
    setRepublica(payload);
    setEditing(false);
  };

  if (editing) {
    return (
      <section className="republic-section">
        <form className="republic-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="title"
            className="republic-form-title"
            placeholder="Titulo da republica"
            defaultValue={republica.title}
          />

          <div className="republic-img-container">
            <img
              src={imageUrl}
              alt="Imagem da República"
              className="republic-img"
            />
            <input
              type="file"
              name="imageUrl"
              accept="image/*"
              onChange={handleUpdateImage}
            />
          </div>

          <input
            type="text"
            name="address"
            className="republic-form-address"
            placeholder="Endereço"
            defaultValue={republica.address}
          />
          <textarea
            name="description"
            className="republic-form-description"
            placeholder="Descrição"
            defaultValue={republica.description}
          ></textarea>
          <div className="republic-form-buttons">
            <input
              type="submit"
              className="republic-form-submit"
              value="Salvar"
            />
            <LightButton
              className="btn-cancel-edit"
              label="Cancelar"
              onClick={() => setEditing(false)}
            />
          </div>
        </form>
      </section>
    );
  } else {
    return (
      <section className="republic-section">
        <h2 className="republic-title">{republica.title}</h2>
        <div className="republic-img-container">
          <img
            src={republica.imageUrl}
            alt="Imagem da República"
            className="republic-img"
          />
        </div>
        <p className="republic-address">{republica.address}</p>
        <p className="republic-description">{republica.description}</p>
        <ul className="republic-details">
          <li>{republica.members} Moradores</li>
          <li>{republica.available_rooms} Quartos Disponíveis</li>
        </ul>
        <Button label="Editar" onClick={() => setEditing(true)} />
      </section>
    );
  }
}
