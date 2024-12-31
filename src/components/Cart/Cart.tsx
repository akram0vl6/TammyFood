import "./Cart.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const selector = useSelector((state: any) => state.cart.produks);
  return (
    <div className="cart">
      {selector.map((el: any) => (
        <div className="cart-item">
          <div className="catr-info">
            <div className="cart-img">
              <img src={el.img} alt="" />
            </div>
            <div className="cart-info_bloc">
              <h5>{el.name}</h5>
              <p>{el.title}</p>
              <span>{el.price}</span>
            </div>
          </div>
          <div className="cart-btn">
            <a href="#">Купить</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
