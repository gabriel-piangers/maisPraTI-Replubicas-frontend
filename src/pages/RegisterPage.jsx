import { User, Building, Eye, EyeOff } from 'lucide-react';
import "../styles/RegisterPage.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "../schemas/register"

import logo from "../assets/logo.png"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerSchema)
    });
    const registerWithMask = useHookFormMask(register)

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='register-page'>
            <div className="register-header">
                <img src={logo} alt="Logo" />
                <h1>Criar Conta </h1>
                <p>ou <Link to="/" className="underline">faça login na sua conta existente</Link></p>
            </div>

            <main className="register-form">
                <h3>Informações Pessoais</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div className="form-field">
                            <label htmlFor="name">Nome Completo<span className='required-field'>*</span></label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Digite seu nome completo'
                                {...register("name")}
                            />
                            <small className="error-visible">
                                {errors.name?.message || "⠀"}
                            </small>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email<span className='required-field'>*</span></label>
                            <input
                                type="email"
                                id="email"
                                placeholder='Digite seu email'
                                {...register("email")}
                            />
                            <small className="error-visible">
                                {errors.email?.message || "⠀"}
                            </small>
                        </div>
                        <div className="form-field">
                            <label htmlFor="phone">Telefone<span className='required-field'>*</span></label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder='(99) 99999-9999'
                                {...registerWithMask("phone", "(99) 99999-9999")}
                            />
                            <small className="error-visible">
                                {errors.phone?.message || "⠀"}
                            </small>
                        </div>
                        <div className="form-field">
                            <label htmlFor="password">Senha<span className='required-field'>*</span></label>
                            <div className='input-group'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    placeholder='Digite sua senha'
                                    {...register("password")}
                                />
                                {showPassword ? (
                                    <button
                                        className='input-icon-btn'
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <EyeOff color='#6c757d' size={18} />
                                    </button>
                                ) : (
                                    <button
                                        type='button'
                                        className='input-icon-btn'
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <Eye color='#6c757d' size={18} />
                                    </button>
                                )}
                            </div>
                            <small className="error-visible">
                                {errors.password?.message || "⠀"}
                            </small>
                        </div>
                        <div className="form-field">
                            <label htmlFor="confirmation_password">Confirmar Senha<span className='required-field'>*</span></label>
                            <div className="input-group">
                                <input
                                    type={showPasswordConfirmation ? "text" : "password"}
                                    id="confirmation_password"
                                    placeholder='Confirme sua senha'
                                    {...register("confirmation_password")}
                                />
                                {showPasswordConfirmation ? (
                                    <button
                                        className='input-icon-btn'
                                        type='button'
                                        onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                    >
                                        <EyeOff color='#6c757d' size={18} />
                                    </button>
                                ) : (
                                    <button
                                        className='input-icon-btn'
                                        type='button'
                                        onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                    >
                                        <Eye color='#6c757d' size={18} />
                                    </button>
                                )}
                            </div>
                            <small className="error-visible">
                                {errors.confirmation_password?.message || "⠀"}
                            </small>
                        </div>
                    </div>
                    <div className="form-field">
                        <label htmlFor='terms' className='terms-checkbox'>
                            <input
                                type="checkbox"
                                id='terms'
                                {...register("terms", { required: true })}
                            />
                            Aceito os <span className='terms-link'>termos e condições.</span><span className='required-field'>*</span>
                        </label>
                    </div>
                    <small className="error-visible">
                        {errors.terms?.message}
                    </small>

                    <button type='submit' className='btn-register'>Registrar</button>
                </form>
            </main>
        </div>
    )
}
