import React, { useState } from "react";
import Perks from "./Perks";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [infoextra, setInfoExtra] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckIn] = useState("");
  const [checkout, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 px-8">
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="ml-3 text-2xl font-bold">
          Título
        </label>
        <input
          type="text"
          className="w-full rounded-full border border-gray-300 px-4 py-2"
          placeholder="Digite o título do seu anúncio"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="city" className="ml-3 text-2xl font-bold">
          Cidade e País
        </label>
        <input
          type="text"
          className="w-full rounded-full border border-gray-300 px-4 py-2"
          placeholder="Digite a cidade do seu anúncio"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="photo" className="ml-3 text-2xl font-bold">
          Fotos
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            className="w-full rounded-full border border-gray-300 px-4 py-2"
            placeholder="Informe ou cole o link/URL da sua foto"
            id="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <button className="cursor-pointer gap-2 rounded-full border border-gray-200 bg-gray-100 px-4 py-2 whitespace-nowrap text-gray-600 duration-100 hover:bg-gray-200">
            Enviar foto
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          <label
            className="flex aspect-square cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border border-gray-200 bg-white text-gray-400 transition duration-100 hover:bg-gray-100 hover:text-gray-600"
            htmlFor="file"
          >
            <input className="hidden" type="file" id="file" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="ml-3 text-2xl font-bold">
          Descrição
        </label>
        <textarea
          className="min-h-52 w-full rounded-2xl border border-gray-300 px-4 py-2"
          placeholder="Digite a descrição do seu anúncio"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="perks" className="ml-3 text-2xl font-bold">
          Comodidades
        </label>
        <Perks></Perks>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="infoextra" className="ml-3 text-2xl font-bold">
          Informações extras
        </label>
        <textarea
          className="min-h-52 w-full rounded-2xl border border-gray-300 px-4 py-2"
          placeholder="Digite aqui qualquer descrição extra sobre o seu anúncio"
          id="infoextra"
          value={infoextra}
          onChange={(e) => setInfoExtra(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="ml-3 text-2xl font-bold">Restrições e Preço</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="ml-3 text-xl font-semibold">
              Preço
            </label>
            <input
              type="number"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder="0,00"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="checkin" className="ml-3 text-xl font-semibold">
              Check in
            </label>
            <input
              type="datetime-local"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder=""
              id="checkin"
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="checkin" className="ml-3 text-xl font-semibold">
              Check out
            </label>
            <input
              type="datetime-local"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder=""
              id="checkout"
              value={checkout}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="ml-3 text-xl font-semibold">
              Convidados
            </label>
            <input
              type="number"
              className="w-full rounded-full border border-gray-300 px-4 py-2"
              placeholder="0"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
        </div>
      </div>

      <button className="flex min-w-44 cursor-pointer justify-center gap-2 rounded-full bg-red-600 px-4 py-2 font-semibold text-white transition duration-100 hover:bg-red-500">
        Salvar informações
      </button>
    </form>
  );
};

export default NewPlace;
