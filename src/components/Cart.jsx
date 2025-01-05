import React, { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { getDerivedCart } from "../utils/getDerivedCart";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CartContainer = styled.article`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color:rgb(9, 165, 170);
  }
`;

const RemoveButton = styled.button`
  background-color: #ff4b5c;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 20px;
  color: #007bff;
`;

const CheckoutButton = styled.button`
  background: linear-gradient(90deg, #ff9800, #ffc107);
  color: #fff;
  padding: 15px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;

  &:hover {
    opacity: 0.9;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  font-family: 'Monospace', sans-serif;
  font-size: 15px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Cart() {
  const { cart, removeFromCart } = useContext(productsContext);
  const derivedCart = getDerivedCart(cart);

  // Calcular el total del carrito
  const totalPrice = derivedCart.reduce((total, item) => total + item.totalPrice, 0).toFixed(2);

  const handleCheckout = () => {
    alert(`¡Compra finalizada! Total: $${totalPrice}`);
    // Integrar enlace de MercadoPago aquí
    window.open('https://link.mercadopago.com.ar/emacaceres25', '_blank');
  };

  return (
    <CartContainer>
      {derivedCart.length > 0 ? (
        <>
          {derivedCart.map((item) => (
            <CartItem key={item.id}>
              <span>{item.name} - {item.quantity} - ${item.totalPrice}</span>
              <RemoveButton onClick={() => removeFromCart(item.id)}>Eliminar</RemoveButton>
            </CartItem>
          ))}
          
          <TotalPrice>Total: ${totalPrice}</TotalPrice>

          <CheckoutButton onClick={handleCheckout}>Finalize purchase</CheckoutButton>
        </>
      ) : (
        <p>empty cart.</p>
      )}
      
      <BackLink to={-1}>go back</BackLink>
    </CartContainer>
  );
}

export default Cart;
