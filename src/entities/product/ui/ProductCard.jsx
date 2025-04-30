import React from "react";
import { Button } from "@shared/components";

export const ProductCard = ({ product, onClick }) => {
  return (
    <div className="w-3xs shadow-gray-300 flex flex-col justify-between  shadow-xl">
      <img className="h-80 w-full" alt="img" src={product.image} />
      <div className="p-4">
        <h3 className="text-2xl">{product.name}</h3>
        <p className="font-bold">{product.price} $</p>
        <Button onClick={onClick}>
          {product.isCart ? "Убрать из корзины" : "Добавить в корзину"}
        </Button>
      </div>
    </div>
  );
};
