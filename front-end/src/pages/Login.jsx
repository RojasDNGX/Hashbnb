import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="mx-auto flex w-full max-w-96 flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Faça seu login</h1>

        <form className="flex w-full flex-col gap-2">
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite o seu e-mail"
            type="email"
          />
          <input
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Digite sua senha"
            type="password"
          />
          <button className="cursor-pointer rounded-full bg-red-600 px-4 py-2 font-semibold text-white duration-75 hover:bg-red-500">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta?{" "}
          <Link to="/register" className="font-semibold underline">
            Registre-se aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
