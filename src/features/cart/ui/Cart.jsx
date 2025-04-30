import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProductList } from "../../../entities/product/ui/ProductList";

export const Cart = ({ open, setOpen, cart, onRemoveCart }) => {
  const sumCart = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          className="fixed right-0 top-0 h-full w-[340px] shadow-lg z-50 bg-white"
          transition={{ type: "tween", duration: 0.3 }}
        >
          <div className="h-full flex flex-col p-4">
            <ProductList
              products={cart}
              isCart={true}
              onRemoveCart={onRemoveCart}
            />
            <div className="mt-auto">
              <p className="text-xl">Сумма корзины {sumCart} $</p>
              <p className="text-xl">Количество товаров {cart.length} штук</p>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
