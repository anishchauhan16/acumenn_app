import React from "react";
import { calcu } from "../assets";

const Card = () => {
  return (
    <div>
      <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
        <img
          className="w-5 h-auto object-cover rounded-xl"
          src={calcu}
          alt="calc"
        />
      </div>
    </div>
  );
};

export default Card;
