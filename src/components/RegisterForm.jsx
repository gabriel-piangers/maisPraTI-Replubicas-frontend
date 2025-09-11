import { useState } from 'react';
import { useHookFormMask } from 'use-mask-input';
import { Button } from "antd";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaIdCard } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

import "../styles/RegisterForm.css";


function RegisterForm({register, handleSubmit, errors,  onSubmit, isSubmitting }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    
    const registerWithMask = useHookFormMask(register);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form-field">
          <label htmlFor="nome">
            Nome Completo<span className="required-field">*</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome completo"
              {...register("nome")}
              disabled={isSubmitting}
            />
            <FaUser size={17} className="input-icon-left" />
          </div>
          <small className="error-visible">{errors.nome?.message || "⠀"}</small>
        </div>
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
              disabled={isSubmitting}
            />
            <MdEmail className="input-icon-left" />
          </div>
          <small className="error-visible">
            {errors.email?.message || "⠀"}
          </small>
        </div>
        <div className="form-field">
          <label htmlFor="telefone">
            Telefone<span className="required-field">*</span>
          </label>
          <div className="input-group">
            <input
              type="tel"
              id="telefone"
              placeholder="(99) 99999-9999"
              {...registerWithMask("telefone", "(99) 99999-9999")}
              disabled={isSubmitting}
            />
            <MdLocalPhone className="input-icon-left" />
          </div>
          <small className="error-visible">
            {errors.telefone?.message || "⠀"}
          </small>
        </div>
        <div className="form-field">
          <label htmlFor="cpf">
            CPF<span className="required-field">*</span>
          </label>
          <div className="input-group">
            <input
              type="text"
              id="cpf"
              placeholder="000.000.000-00"
              {...registerWithMask("cpf", "999.999.999-99")}
              disabled={isSubmitting}
            />
            <FaIdCard size={19} className="input-icon-left" />
          </div>
          <small className="error-visible">{errors.cpf?.message || "⠀"}</small>
        </div>
        <div className="form-field">
          <label htmlFor="senha">
            Senha<span className="required-field">*</span>
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="senha"
              placeholder="Digite sua senha"
              {...register("senha")}
              disabled={isSubmitting}
            />
            <RiLockPasswordFill className="input-icon-left" />
            {showPassword ? (
              <button
                className="input-icon-btn"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <LuEyeOff color="#6c757d" size={18} />
              </button>
            ) : (
              <button
                type="button"
                className="input-icon-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <LuEye color="#6c757d" size={18} />
              </button>
            )}
          </div>
          <small className="error-visible">
            {errors.senha?.message || "⠀"}
          </small>
        </div>
        <div className="form-field">
          <label htmlFor="confirmation_senha">
            Confirmar Senha<span className="required-field">*</span>
          </label>
          <div className="input-group">
            <input
              type={showPasswordConfirmation ? "text" : "password"}
              id="confirmation_senha"
              placeholder="Confirme sua senha"
              {...register("confirmation_senha")}
              disabled={isSubmitting}
            />
            <RiLockPasswordFill className="input-icon-left" />
            {showPasswordConfirmation ? (
              <button
                className="input-icon-btn"
                type="button"
                onClick={() =>
                  setShowPasswordConfirmation(!showPasswordConfirmation)
                }
              >
                <LuEyeOff color="#6c757d" size={18} />
              </button>
            ) : (
              <button
                className="input-icon-btn"
                type="button"
                onClick={() =>
                  setShowPasswordConfirmation(!showPasswordConfirmation)
                }
              >
                <LuEye color="#6c757d" size={18} />
              </button>
            )}
          </div>
          <small className="error-visible">
            {errors.confirmation_senha?.message || "⠀"}
          </small>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="terms" className="terms-checkbox">
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: true })}
            disabled={isSubmitting}
          />
          Aceito os <span className="terms-link">termos e condições.</span>
          <span className="required-field">*</span>
        </label>
      </div>
      <small className="error-visible">{errors.terms?.message}</small>

      <Button  
        className="btn-register"
        htmlType="submit"
        loading={isSubmitting}
      >
        Registrar
      </Button>
    </form>
  );
}

export default RegisterForm