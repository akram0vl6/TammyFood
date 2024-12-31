import "./Application.css";

const Application = () => {
  return (
    <div className="application">
      <div className="application-bloc">
        <h1>
          To Get 15% Discount <br /> Download The App
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="application-bloc_img">
          <img src="./src/assets/play.png" alt="" />
          <img src=".\src\assets\Store.png" alt="" />
        </div>
      </div>
      <div className="application-img">
        <img className="img" src=".\src\assets\Application.png" alt="" />
      </div>
    </div>
  );
};

export default Application;
