import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Dish from "../Dish/Dish";
import Delivery from "../Delivery/Delivery";
import Application from "../Application/Application";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Dish />
                <Delivery />
                <Application />
              </>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
};

export default App;
