import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import "../styles/RegisterPage.css"
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
      <main className="register-page">
        <header className="register-header">
          <img src={logo} alt="Logo" />
          <h1>Criar Conta</h1>
          <div className="divider">ou</div>
          <p>
            <Link to="/login" className="login-link">
              🔑 Já tem conta? Faça login aqui
            </Link>
          </p>
        </header>

        <section className="register-form">
          <h3>Informações Pessoais</h3>
          <RegisterForm onSubmit={onSubmit} />
        </section>
      </main>
    );
}
