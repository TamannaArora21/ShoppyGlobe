import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
  <div className="cart-container">
    <h1>Shopping Cart</h1>

    {cartItems.length === 0 ? (
      <h2>Cart is Empty</h2>
    ) : (
      <>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
          />
        ))}

        <Link to="/checkout">
          <button>
            Proceed To Checkout
          </button>
        </Link>
      </>
    )}
  </div>
);
}

export default Cart;