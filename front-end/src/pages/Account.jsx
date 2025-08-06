import React from "react";
import { Link, useParams } from "react-router-dom";
import AccProfile from "../components/AccProfile";

const Account = () => {
  const { subpage } = useParams();
  const buttonClass = (button) => {
    let finalClass =
      "hover:bg-red-100 cursor-pointer rounded-full px-4 py-2 transition duration-100 hover:text-red-500";

    if (button === subpage)
      finalClass +=
        " animate-bounce bg-red-500 text-white hover:bg-red-600 hover:text-white transition duration-300";

    return finalClass;
  };

  return (
    <section className="p-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
        <div className="flex gap-4">
          <Link to="/account/profile" className={buttonClass("profile")}>
            Perfil
          </Link>
          <Link to="/account/bookings" className={buttonClass("bookings")}>
            Reservas
          </Link>
          <Link to="/account/places" className={buttonClass("places")}>
            Acomodações
          </Link>
        </div>
        {subpage === "profile" && <AccProfile />}
      </div>
    </section>
  );
};

export default Account;
