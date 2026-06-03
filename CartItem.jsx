import { useDispatch } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.title}</h3>

      <p>Price: ₹{item.price}</p>

      <p>Quantity: {item.quantity}</p>

      <button
        onClick={() =>
          dispatch(decreaseQuantity(item.id))
        }
      >
        -
      </button>

      <button
        onClick={() =>
          dispatch(increaseQuantity(item.id))
        }
      >
        +
      </button>

      <button
        onClick={() =>
          dispatch(removeFromCart(item.id))
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
