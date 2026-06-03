import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("Order Placed Successfully");

    dispatch(clearCart());

    navigate("/");
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <input
        type="text"
        placeholder="Full Name"
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
      />

      <br /><br />

      <textarea
        placeholder="Address"
      />

      <h2>Order Summary</h2>

      {cartItems.map((item) => (
        <p key={item.id}>
          {item.title} x {item.quantity}
        </p>
      ))}

      <button onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;