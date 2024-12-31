import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="mainOne-blok">
        <span className="span">Fast Delivery</span>
        <h1>
          Discover Your Favourite <br /> Food and <span>Test Forever</span>
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting{" "}
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy text ever{" "}
          <br />
          since the 1500s.
        </p>
        <div className="main-btn">
          <a className="main-btnOne" href="#">Get Started</a>
          <div className="main-btnTwo">
            <img src="./src/assets/icon/icon1.png" alt="" />
            <a href="#">More Information</a>
          </div>
        </div>
      </div>
      <div className="mainTwo-blok">
        <img src="./src/assets/image 2.png" alt="" />
      </div>
    </div>
  );
};

export default Main;
