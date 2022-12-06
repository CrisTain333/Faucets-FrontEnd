import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="notice_board">
        <div className="container">
          <p>Notice here</p>
        </div>
      </div>

      <div className="container">
        <div className="main_content">
            <div className="title">
                <h2>Request testnet LINK</h2>
                <p>Get testnet LINK for an account on one of the supported blockchain testnets so you can create and test your own oracle and Chainlinked smart contract</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
