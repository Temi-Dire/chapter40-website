import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";
import Signup from "./pages/auth/signup";
import Details from "./pages/account/details";
import Editaccount from "./pages/account/editaccount";
import Information from "./pages/Information";
import Shipping from "./pages/Shipping";
import CheckoutPage from "./pages/CheckoutPage";
import Payment from "./pages/Payment";
import Login from "./pages/auth/login";
import Favorite from "./pages/Favorite";
import Order from "./pages/order";
import ContactUsPage from "./pages/ContactUsPage";
import ContactUs from "./pages/ContactUs";

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
            <Route path="/auth/login" element={<Login />} />
            <Route path="/account/details" element={<Details />} />
            <Route path="/account/editaddress" element={<Editaccount />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/wishlist" element={<Favorite />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<CheckoutPage />}>
              <Route path="info" element={<Information />} />
              <Route path="shipping" element={<Shipping />} />
              <Route path="payment" element={<Payment />} />
            </Route>
            <Route path="/contact-us" element={<ContactUsPage />} />

            <Route path="/contact-us2" element={<ContactUs />} />

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
