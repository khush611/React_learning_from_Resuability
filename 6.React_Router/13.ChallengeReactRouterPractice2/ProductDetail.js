import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";
function ProductDetail() {
  const { productId } = useParams();

  const prod = productsData.find((product) => product.id === productId);
  return (
    <div>
      <h1>ProductDetail Page</h1>
      <h3>{prod.name}</h3>
      <p>{prod.description}</p>
    </div>
  );
}

export default ProductDetail;
