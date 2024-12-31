import { FaShoppingCart } from "react-icons/fa";

import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-header">
      <div className="header">
        <div className="logo">
          <img src="./src/assets/Logo.png" alt="" />
        </div>
        <div className="header-nav">
          <nav>
            <Link className="link" to={'/'}>
              <a className="a" href="#">
                Home
              </a>
            </Link>
            <a className="a" href="#" onClick={(e) => e.preventDefault()}>
              About us
            </a>
            <a className="a" href="#" onClick={(e) => e.preventDefault()}>
              Menu
            </a>
            <a className="a" href="#" onClick={(e) => e.preventDefault()}>
              Blog
            </a>
            <Link className="c" to={"/cart"}>
              <FaShoppingCart />
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
