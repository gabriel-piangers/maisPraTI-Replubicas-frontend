import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // se quiser futuramente usar um objeto para vários erros
  const [errors, setErrors] = useState({}); // Para erros separados

 
    const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setError("Por favor, preencha todos os campos.");
    } else if (!email) {
      setError("Por favor, insira seu login.");
    } else if (!password) {
      setError("Por favor, digite sua senha.");
    } else {
      // Se tudo preenchido
      setError(""); 
      console.log("Login com:", email, password);
      alert("Login realizado com sucesso!");
      // Aqui você colocaria a autenticação real
    }
  };


  return (

    <div className={styles.body}>

    <div className={styles.bg} style={{ backgroundImage: "url('/assets/8074.jpg')" }}></div>
    <div className={styles.bg} style={{ backgroundImage: "url('/assets/casa-isolada-no-campo.jpg')" }}></div>
    <div className={styles.bg} style={{ backgroundImage: "url('/assets/8074.jpg')" }}></div>
    
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Login</h1>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            // className={styles.input}
            className={`${styles.input} ${error && !email ? styles.incorrect : ""}`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            // className={styles.input}
            className={`${styles.input} ${error && !password ? styles.incorrect : ""}`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.button} type="submit">Login</button>
          
        </form>
        <p className={styles['signup-text']}>
          New here? <a href="/signup">Create an Account</a>
        </p>
      </div>
    </div>
    

    </div>
  );
  

}
