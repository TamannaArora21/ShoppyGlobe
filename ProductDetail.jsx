import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => {
        setError("Failed to load product");
      });
  }, [id]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-detail">
      <img
        src={product.thumbnail}
        alt={product.title}
        width="250"
        loading="lazy"
      />

      <h2>{product.title}</h2>

      <p>{product.description}</p>

      <h3>₹{product.price}</h3>
    </div>
  );
}

export default ProductDetail;