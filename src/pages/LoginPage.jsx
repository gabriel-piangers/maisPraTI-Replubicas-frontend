import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/register";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { TbArrowBack } from "react-icons/tb";
import "../styles/LoginPage.css";
import logo from "../assets/logo.png";

import bg1 from "../assets/8074.jpg";
import bg2 from "../assets/casa-isolada-no-campo.jpg";
import { Link } from 'react-router-dom';

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

  return (
    <div className="body">
      <div className="bg" style={{ backgroundImage: `url(${bg1})` }}></div>
      <div className="bg" style={{ backgroundImage: `url(${bg2})` }}></div>
      <div className="bg" style={{ backgroundImage: `url(${bg1})` }}></div>

      <div className="container">
        <header className="register-header">
          <img src={logo} alt="Logo" />
          <h1>Bem-vindo de volta!</h1>
          <p>Faça login para continuar</p>
          <Link to="/" className="btn-return">
            <TbArrowBack size={19} />
            Home
          </Link>
        </header>
        <div className="card">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="form-field">
                <label htmlFor="email">
                  Email<span className="required-field">*</span>
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                  />
                  <MdEmail className="input-icon-left" />
                </div>
                <small className="error-visible">
                  {errors.email?.message || "⠀"}
                </small>
              </div>
              <div className="form-field">
                <label htmlFor="password">
                  Senha<span className="required-field">*</span>
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                  />
                  {showPassword ? (
                    <button
                      className="input-icon-eye"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <LuEyeOff color="#6c757d" size={18} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="input-icon-eye"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <LuEye color="#6c757d" size={18} />
                    </button>
                  )}
                  <RiLockPasswordFill className="input-icon-left" />
                </div>
                <small className="error-visible">
                  {errors.password?.message || "⠀"}
                </small>
              </div>
              <button className="button" type="submit">
                Login
              </button>
            </div>
          </form>
          <div className="divider">ou</div>
          <p className="register-text">
            Novo por aqui? <Link to="/register">Crie uma conta</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage