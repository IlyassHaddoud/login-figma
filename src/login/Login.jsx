import google from "../assets/logos/google.png";
import linkedin from "../assets/logos/linkedin.png";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import logo from "../assets/logos/logo.png";

const Login = () => {
  return (
    <div className="login">
      <div className="controls">
        <div className="title">
          <h2>Register</h2>
        </div>
        <div className="form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile Number" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        <div className="buttons">
          <button className="quest">Start your Quest</button>
          <p>Or</p>
          <div className="socials">
            <button>
              <img src={google} /> Google
            </button>
            <button>
              <img src={linkedin} /> Google
            </button>
          </div>
          <p>Already have an account ?</p>
          <button className="loginButton">Login</button>
        </div>
      </div>
      <div className="carousel">
        <img className="logo" src={logo} />
        <Carousel showThumbs={false}>
          <div>
            <img src={image1} style={{ height: "30rem", width: "15rem" }} />
            <h2 style={{ color: "white" }}>Emabrk on Your Learning uuest!</h2>
            <p style={{ color: "white", paddingBottom: "45px" }}>
              just a couple of clicks and we start
            </p>
          </div>
          <div>
            <img src={image2} style={{ height: "30rem", width: "15rem" }} />
            <h2 style={{ color: "white" }}>Emabrk on Your Learning uuest!</h2>
            <p style={{ color: "white", paddingBottom: "45px" }}>
              just a couple of clicks and we start
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Login;
