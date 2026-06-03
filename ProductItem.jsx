import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      
      
<img
  src={product.thumbnail}
  alt={product.title}
  loading="lazy"
/>
      
      <p>₹ {product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>
      <Link to={`/product/${product.id}`}>
  <h3>{product.title}</h3>
</Link>
    </div>
  );
}

export default ProductItem;