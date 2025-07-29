import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Register = ({ setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && password) {
      try {
        await axios.post("/users/register", {
          name,
          email,
          password,
        });

        alert("Cadastro realizado com sucesso!");
        setRedirect(true);
      } catch (error) {
        alert(`Deu um erro ao registrar: ${error.response.data}`);
      }
    } else {
      alert("Você precisa preencher todos os campos");
    }
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu cadastro</h1>

        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite o seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite o seu e-mail"
            type="email"
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
            Registrar
          </button>
        </form>

        <p>
          Já tem uma conta?{" "}
          <Link
            to="/login"
            className="font-bold text-gray-500 underline duration-75 hover:text-gray-800"
          >
            Logue aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
