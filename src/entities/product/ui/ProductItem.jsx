import React from "react";

export const ProductItem = ({ product, onClick }) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <img
        src={product.image}
        alt="img"
        className="min-w-20 w-20 h-20 object-fill"
      />
      <h3 className="text-xl">{product.name}</h3>
      <p className="text-xl font-bold">{product.price} $</p>
      <button
        onClick={onClick}
        className="bg-red-900 text-white w-10 h-10 text-xs cursor-pointer"
      >
        X
      </button>
    </div>
  );
};
