import React from "react";
import { Route } from "react-router-dom";
import { ProductI } from "./model";
import "./styles.css";

const MOCK_DATA: ProductI[] = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" },
  { id: 3, name: "product 3" },
  { id: 4, name: "product 4" }
];

export default function Products({
  cartItems,
  addToCart,
  setCurrentProduct,
  removeFromCart
}: {
  cartItems: ProductI[];
  addToCart: (item: ProductI) => void;
  setCurrentProduct: (item: ProductI) => void;
  removeFromCart: (item: ProductI) => void;
}) {
  const [products] = React.useState(MOCK_DATA);

  const Button = (item: ProductI) => (
    <Route
      render={({ history }) => (
        <button
          type="button"
          onClick={() => {
            setCurrentProduct(item);
            history.push("/products/" + item.id);
          }}
        >
          View
        </button>
      )}
    />
  );

  return (
    <div className="App">
      <h2>Products</h2>
      <ul>
        {products.map((item) => (
          <li>
            {item.id}: {item.name} - {Button(item)} -{" "}
            <button
              onClick={() => addToCart(item)}
              disabled={cartItems.some((prod) => prod.id === item.id)}
            >
              Add
            </button>
            <button
              onClick={() => removeFromCart(item)}
              disabled={!cartItems.some((prod) => prod.id === item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
