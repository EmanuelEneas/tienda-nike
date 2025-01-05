import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { getTotalCartPrice } from "../utils/getTotalCartPrice";
import './CartSummary.css';

function CartSummary() {
  const { cart } = useContext(productsContext);

  return cart?.length ? (
    <div className="cart-summary">
      <Link to="/cart" className="cart-link">
        <MdShoppingCart size={50} color="#fff" />
      </Link>
      <span className="cart-total">${getTotalCartPrice(cart)}</span>
    </div>
  ) : (
    <p className="cart-summary-empty">Cart is empty</p>
  );
}

export default CartSummary;
