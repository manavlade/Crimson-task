import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  layout?: "image-top" | "image-bottom" | "image-left" | "image-right";
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  layout = "image-left",
}) => {
  return (
    <div className={`card ${layout}`}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
