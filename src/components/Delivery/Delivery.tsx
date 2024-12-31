import './Delivery.css'

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery-img">
        <img src="./src/assets/Delivery.png" alt="" />
      </div>
      <div className="delivery-bloc">
        <span className="span">Our Target</span>
        <h1>
          We Earn Your Trust and are <br /> Diligent in Your Case
        </h1>
        <p>
          When an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting,
        </p>
        <p>
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <a href="#">Order Now</a>
      </div>
    </div>
  );
}

export default Delivery