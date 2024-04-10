import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function Card() {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {cards &&
        cards.length > 0 &&
        cards.map((card) => <Cards key={card.id} card={card} />)}
    </>
  );
}
export default Card;
