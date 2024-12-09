import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="card border">
      <img src={imageUrl} alt="Card image" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-center">{description}</p>
        <div className=" container bg-light border pt-3 pb-3 d-flex justify-content-center align-items-center position-absolute bottom-0 start-50 translate-middle-x">
          <button className="btn btn-primary">Find Out More!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;