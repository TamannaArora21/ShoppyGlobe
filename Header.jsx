import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/cartSlice";

function Header() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  return (
    <nav>
      <Link to="/">Home</Link>

      {" | "}

      <Link to="/cart">
        Cart ({cartItems.length})
      </Link>

      {" | "}

      <input
        type="text"
        placeholder="Search Products..."
        onChange={(e) =>
          dispatch(setSearchTerm(e.target.value))
        }
      />
    </nav>
  );
}

export default Header;