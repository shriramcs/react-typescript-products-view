import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./styles.css";
import Products from "./Products";
import ProductInfo from "./ProductInfo";
import Cart from "./Cart";
import { ProductI } from "./model";

export default function App() {
  const [cartItems, setCartItems] = React.useState([] as ProductI[]);
  const [currentProduct, setCurrentProduct] = React.useState(
    (null as unknown) as ProductI
  );

  const addToCart = (item: ProductI) => {
    setCartItems([...cartItems, { ...item }]);
  };
  const removeFromCart = (item: ProductI) => {
    const arr = [...cartItems];
    arr.splice(
      cartItems.findIndex((prod: ProductI) => prod.id === item.id),
      1
    );
    setCartItems([...arr]);
  };

  return (
    <div className="App">
      <h1>React + Typescript</h1>
      <Cart cartItems={cartItems}></Cart>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/products" />
          <Route exact path="/products">
            <Products
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              setCurrentProduct={setCurrentProduct}
            />
          </Route>
          <Route exact path="/products/:id">
            <ProductInfo currentProduct={currentProduct} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
