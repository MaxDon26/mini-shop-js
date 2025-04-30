const PRODUCTS = [
  {
    id: 1,
    name: "Плёночный фотоаппарат",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Беспроводные наушники",
    price: 59,
    image:
      "https://images.unsplash.com/photo-1619458085129-2e8dc50604bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Умная колонка",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1732645683159-7480e860c842?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Книга",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1543320996-542b8a0e022c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const fetchProduct = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTS), 1000);
  });
};
