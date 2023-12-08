import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
// import CheckoutProduct from "./components/CheckoutProduct";
import Checkout from "./pages/checkout";
import Signup from "./pages/auth/signup";
import Details from "./pages/account/details";
import Editaccount from "./pages/account/editaccount";
import SavedProduct from "./components/SavedProduct";
import Information from "./pages/auth/Information";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/account/details" element={<Details />} />
            <Route path="/account/editaddress" element={<Editaccount />} />
            <Route path="/savedproduct" element={<SavedProduct />} />
            <Route path="/auth/Information" element={<Information />} />

            {/* <Route
              path="/checkoutproduct"
              element={
                <CheckoutProduct
                  desc="Privé Contrast Collar
 cooperate Dress"
                  price={30000}
                />
              }
            /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
