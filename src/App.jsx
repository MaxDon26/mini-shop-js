import { Suspense, useEffect, useState } from "react";
import { ProductList } from "@entities/product/ui";
import { fetchProduct } from "@entities/product/api";
import { Cart } from "./features/cart/ui/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddCart = (product) => {
    setOpenCart(true);
    setCart([...cart, product]);
  };

  const handleRemoveCart = (id) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  const filtred = products.map((product) =>
    cart.some((productInCart) => productInCart.id === product.id)
      ? { ...product, isCart: true }
      : product
  );
  useEffect(() => {
    fetchProduct().then((data) => setProducts(data));
  }, []);
  return (
    <div className="text-5xl container mx-auto mt-40">
      <ProductList
        products={filtred}
        onAddToCart={handleAddCart}
        onRemoveCart={handleRemoveCart}
      />
      <Cart cart={cart} open={openCart} onRemoveCart={handleRemoveCart} />
      <button onClick={() => setOpenCart((prev) => !prev)}>
        Открыть корзину
      </button>
    </div>
  );
}

export default App;
