import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import "../styles/RegisterPage.css"
import { TbArrowBack } from "react-icons/tb";
import RegisterForm from '../components/RegisterForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/register";
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const {singup} = useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(registerSchema)
    });
  const navigate = useNavigate();

    const onSubmit = async (data) => {

        try {
          const res = await singup(data.nome, data.email, data.cpf, data.telefone, data.senha);
          if (res) {
            reset();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              navigate("/login");
            }, 3500);
          }
        } catch (error) {
          console.log(error);
        }
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
          <Link to="/" className="btn-return">
            <TbArrowBack size={19} />
            Home
          </Link>
        </header>

        <section className="register-form">
          <h3>Informações Pessoais</h3>
          <RegisterForm register={register} handleSubmit={handleSubmit} errors={errors} onSubmit={onSubmit} isSubmitting={isSubmitting} />
        </section>
      </main>
    );
}
