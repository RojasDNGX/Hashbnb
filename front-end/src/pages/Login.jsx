import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Login = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const { data: userDoc } = await axios.post("/users/login", {
          email,
          password,
        });

        setUser(userDoc);
        setRedirect(true);
      } catch (error) {
        alert(`Deu um erro ao logar: ${error.response.data}`);
      }
    } else {
      alert("Você precisa preencher o email / senha");
    }
  };

  if (redirect || user) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite o seu e-mail"
            type="email"
            //value={variavelNormal}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="cursor-pointer rounded-full bg-red-600 px-4 py-2 font-semibold text-white duration-75 hover:bg-red-500">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link
            to="/register"
            className="font-bold text-gray-500 underline duration-75 hover:text-gray-800"
          >
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
