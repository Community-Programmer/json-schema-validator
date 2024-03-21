import React from "react";
import "./Home.scss";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <>
      <main className="main__Section">
        <div className="main__Section__textContainer">
          <h1>
            <Typewriter
              options={{
                strings: 'Welcome to "A Tour of JSON Schema"!',
                autoStart: true,
                loop: false,
              }}
            />
          </h1>
          <p>
            Are you looking to master JSON Schema quickly and effectively? Look
            no further! Our interactive learning platform is designed to make
            your journey into JSON Schema seamless and enjoyable.
          </p>

          <button className="button" onClick={() => navigate("/tour")}>
            Get Started
          </button>
        </div>
        <div className="custom-shape-divider-bottom-1710943826">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </main>
    </>
  );
};

export default Home;
