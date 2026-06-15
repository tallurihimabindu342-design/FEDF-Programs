import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Shop from "./Shop";

function Products() {
  return <p>List of Products</p>;
}

function Cart() {
  return <p>Your Shopping Cart</p>;
}

function Orders() {
  return <p>Your Orders</p>;
}

function DefaultMessage() {
  return <p>Welcome to the Shop! Select an option.</p>;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/shop" element={<Shop />}>
            <Route index element={<DefaultMessage />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;