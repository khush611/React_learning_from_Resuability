import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import productsData from "./productsData";
function Products() {
  const products = productsData.map((product) => (
    <div key={product.id}>
      <h3>
        <Link to={`/products/${product.id}`}>
          {product.name} - ${product.price}
        </Link>
      </h3>
      <hr />
    </div>
  ));
  return (
    <div>
      <h1>Products Page</h1>
      {products}
    </div>
  );
}

export default Products;
