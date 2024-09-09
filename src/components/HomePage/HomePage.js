import React, { useContext } from "react";
import Homeimage from "../../assets/Home-Image.png";
import { counterContext } from "../../context/context";
const HomePage = ({ onCardClick }) => {
  const counter = useContext(counterContext);
  return (
    <div className="w-full h-[auto] pt-[64px] px-4">
      <div className="w-full h-[300px] rounded-tl-[12px] rounded-tr-none rounded-bl-none rounded-br-none">
        {
          <img
            src={Homeimage}
            alt="Home"
            className="w-full h-full rounded-tl-[12px] rounded-tr-none rounded-bl-none rounded-br-none "
          />
        }
      </div>
      <div className="mt-8 ">
        <h1 className="text-3xl font-bold text-gray-900">
          Find your next role
        </h1>
        <p className="mt-2 text-gray-600 text-lg">{counter}</p>
      </div>
    </div>
  );
};

export default HomePage;
