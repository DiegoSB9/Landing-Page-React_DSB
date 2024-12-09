import React from "react";
import Card from "./Card.jsx";

const CardSection = () => {
  const cardsData = [
    {
      imageUrl: "http://via.placeholder.com/500x325",
      title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imageUrl: "http://via.placeholder.com/500x325",
      title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imageUrl: "http://via.placeholder.com/500x325",
      title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imageUrl: "http://via.placeholder.com/500x325",
      title: "Card title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];

  return (
    <div className="card-section container">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardSection;