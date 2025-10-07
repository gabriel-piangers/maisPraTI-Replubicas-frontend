// // src/pages/DashboardSettings.jsx
// import { useState } from "react";

// export function DashboardSettings() {
//   const [form, setForm] = useState({
//     appName: "Minha República",
//     emailNotificacoes: true,
//     itensPorPagina: 10,
//   });

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Configurações salvas:", form);
//     alert("Configurações salvas ✅");
//   };

//   return (
//     <>
//       <div className="republic-header">
//         <h1 className="republic-title">Configurações</h1>
//       </div>

//       <section className="republic-section">
//         <form className="republic-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="appName"
//             className="republic-form-title"
//             placeholder="Nome do aplicativo"
//             value={form.appName}
//             onChange={handleChange}
//           />

//           <label style={{ marginTop: 12, display: "block" }}>
//             <input
//               type="checkbox"
//               name="emailNotificacoes"
//               checked={form.emailNotificacoes}
//               onChange={handleChange}
//             />{" "}
//             Receber notificações por email
//           </label>

//           <input
//             type="number"
//             name="itensPorPagina"
//             className="republic-form-address"
//             placeholder="Itens por página"
//             value={form.itensPorPagina}
//             onChange={handleChange}
//           />

//           <div className="republic-form-buttons" style={{ marginTop: 12 }}>
//             <input
//               type="submit"
//               className="republic-form-submit"
//               value="Salvar Configurações"
//             />
//           </div>
//         </form>
//       </section>
//     </>
//   );
// }


// src/pages/DashboardSettings.jsx
import { useState } from "react";
import "../styles/DashboardSettings.css"; // CSS separado para estilo

export function DashboardSettings() {
  const [republicForm, setRepublicForm] = useState({
    nome: "República Central",
    telefone: "(11) 99999-0000",
    email: "contato@republicacentral.com",
    endereco: "Rua das Flores, 123 - Centro",
  });

  const [userPrefs, setUserPrefs] = useState({
    emailNotificacoes: true,
    pushNotificacoes: true,
    relatoriosSemanais: false,
  });

  const handleRepublicChange = (e) => {
    const { name, value } = e.target;
    setRepublicForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUserPrefsChange = (e) => {
    const { name, checked } = e.target;
    setUserPrefs((prev) => ({ ...prev, [name]: checked }));
  };

  const handleRepublicSubmit = (e) => {
    e.preventDefault();
    console.log("Dados da república salvos:", republicForm);
    alert("Dados da república salvos ✅");
  };

  const handleUserPrefsSubmit = (e) => {
    e.preventDefault();
    console.log("Preferências do usuário salvas:", userPrefs);
    alert("Preferências salvas ✅");
  };

  return (
    <div className="dashboard-settings">
      <h1 className="dashboard-title">Configurações</h1>

      {/* Seção Dados da República */}
      <section className="settings-section">
        <h2 className="section-title">Dados da República</h2>
        <p className="section-desc">Informações básicas sobre sua república</p>

        <form className="settings-form" onSubmit={handleRepublicSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome da República"
            value={republicForm.nome}
            onChange={handleRepublicChange}
          />
          <input
            type="text"
            name="telefone"
            placeholder="Telefone"
            value={republicForm.telefone}
            onChange={handleRepublicChange}
          />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            value={republicForm.endereco}
            onChange={handleRepublicChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={republicForm.email}
            onChange={handleRepublicChange}
          />

          <button type="submit" className="btn-submit">
            Salvar Alterações
          </button>
        </form>
      </section>

      {/* Seção Preferências do Usuário */}
      <section className="settings-section">
        <h2 className="section-title">Preferências do Usuário</h2>
        <p className="section-desc">Personalize sua experiência no dashboard</p>

        <form className="settings-form" onSubmit={handleUserPrefsSubmit}>
          <label>
            <input
              type="checkbox"
              name="emailNotificacoes"
              checked={userPrefs.emailNotificacoes}
              onChange={handleUserPrefsChange}
            />
            Notificações por e-mail
          </label>
          <label>
            <input
              type="checkbox"
              name="pushNotificacoes"
              checked={userPrefs.pushNotificacoes}
              onChange={handleUserPrefsChange}
            />
            Notificações push
          </label>
          <label>
            <input
              type="checkbox"
              name="relatoriosSemanais"
              checked={userPrefs.relatoriosSemanais}
              onChange={handleUserPrefsChange}
            />
            Relatórios semanais
          </label>

          <button type="submit" className="btn-submit">
            Salvar Preferências
          </button>
        </form>
      </section>
    </div>
  );
}
