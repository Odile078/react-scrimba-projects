import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import Card from "./Card";
function CardsList() {
  return (
    <div className="overflow-x-auto px-6">
      <div className="flex flex-nowrap gap-[18px]">
        {[
          {
            image: card1,
            status: "Online",
            name: "Life lessons with Katie Zaferes",
            price: 135,
            rating: "5.0 (6) . USA",
          },
          {
            image: card2,
            status: "Offline",
            name: "Learn wedding photography",
            price: 125,
            rating: "5.0 (30) . USA",
          },
          {
            image: card3,
            status: "",
            name: "Group Mountain Biking",
            price: 50,
            rating: "4.8 (2) . USA",
          },
        ].map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default CardsList;
