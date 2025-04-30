import React from "react";
import { ProductCard } from "./ProductCard";
import { ProductItem } from "./ProductItem";

export const ProductList = ({
  products,
  onAddToCart,
  onRemoveCart,
  isCart,
}) => {
  const generateClassName = () =>
    isCart ? "flex flex-col gap-4" : `grid grid-cols-4`;
  // const products = use(fetchProduct);
  return (
    <div className={generateClassName()}>
      {products.map((product) =>
        isCart ? (
          <ProductItem
            product={product}
            onClick={() => onRemoveCart(product.id)}
          />
        ) : (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() =>
              product.isCart ? onRemoveCart(product.id) : onAddToCart(product)
            }
          />
        )
      )}
    </div>
  );
};
