import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

function ProductList() {
  const { products, loading, error } = useProducts();

  const searchTerm = useSelector(
    (state) => state.cart.searchTerm
  );

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    
    <div className="products-container">

      <h2>
        Total Products:
        {filteredProducts.length}
      </h2>

      {filteredProducts.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ))}
    </div>
    
  );
}

export default ProductList;