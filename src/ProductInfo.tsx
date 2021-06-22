import "./styles.css";
import { Route, useParams } from "react-router-dom";
import { ProductI } from "./model";

export default function Products({
  currentProduct
}: {
  currentProduct: ProductI;
}) {
  let { id }: { id: string } = useParams();
  const Button = () => (
    <div>
      <Route
        render={({ history }) => (
          <button
            type="button"
            onClick={() => {
              history.push("/");
            }}
          >
            Back
          </button>
        )}
      />
    </div>
  );

  return (
    <div className="App">
      Product Info : {currentProduct ? currentProduct.name : ""}
      {Button()}
      <div>Current route param id : {id}</div>
    </div>
  );
}
