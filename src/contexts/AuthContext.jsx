import { createContext, useState, useEffect } from "react";
import Api from "../services/Api";
import toast from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [token]);

  const login = async (email, senha) => {
    try {
      const response = await Api.post("/auth/login", { email, senha });
      const { token } = response.data;

      setToken(token);
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      
      return response.data;

    } catch (error) {
      if (error.code === "ECONNABORTED") {
        toast.error(
          "O servidor está iniciando, tente novamente em alguns segundos."
        );
      } else if (!error.response) {
        toast.error("Não foi possível conectar ao servidor.");
      } else {
        toast.error(error.response?.data?.message || "Erro no login. Verifique as credenciais.");
      }
      console.error("Erro no login:", error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    toast.success("Você foi desconectado.");
  };

  const singup = async (nome, email, cpf, telefone, senha) => {
    try {
      const response = await Api.post("/usuarios/cadastrar", {
        nome,
        email,
        cpf,
        telefone,
        senha,
      });

      if (response.status === 201) {
        toast.success("Cadastro realizado com sucesso!", { duration: 3000 });
        return true;
      }
    } catch (error) {
      if (error.code === "ECONNABORTED") {
        toast.error(
          "O servidor está iniciando, tente novamente em alguns segundos."
        );
      } else if (!error.response) {
        toast.error("Não foi possível conectar ao servidor.");
      } else {
        toast.error(error.response?.data?.message || "Erro ao cadastrar.");
      }
      console.error("Erro ao cadastrar:", error);
      return false;
    }
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout, singup, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };