// Calcula el precio total del carrito
export const getTotalCartPrice = (cart) => {
  return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
};
