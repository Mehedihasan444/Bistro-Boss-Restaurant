import React from "react";

const FoodCard = ({img,name,description,price}) => {
  return (
    <div className="card bg-base-100 border">
      <figure className="">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-black text-white rounded-full">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
