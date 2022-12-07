import React, { useContext, useState } from "react";
import "./Home.css";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-router-dom";
import NetworkContext from "../../Context/Context";
import EthTable from "../../Components/ETHtable/EthTable";
import TestLinkTable from "../../Components/TestTable/TestLinkTable";
const Home = () => {
    const {selectedNetwork} = useContext(NetworkContext)
  const [ethTransaction, setEthTransaction] = useState(true);
  const [testLinkTransaction, setTestLinkTransaction] = useState(false);
  let activeClassName = "active_tabs";

  


  const handleEthTransaction = () => {
    setEthTransaction(true);
    setTestLinkTransaction(false);
  };

  const handleTestLinkTransaction = () => {
    setTestLinkTransaction(true);
    setEthTransaction(false);
  };

  const onChange = (value) => {
    console.log(value)
  };

  const handleSubmit =(e)=>{
    e.preventDefault()

  }





  return (
    <div className="home">
      {/* notice_board */}
      <div className="notice_board">
        <div className="container">
          <p>Notice here</p>
        </div>
      </div>

      {/* title_Container */}
      <div className="container">
        <div className="main_content">
          <div className="title">
            <h2>Request testnet LINK</h2>
            <p>
              Get testnet LINK for an account on one of the supported blockchain
              testnets so you can create and test your own oracle and
              Chainlinked smart contract
            </p>
          </div>
          <div className="form">
            <div className="warning">
              <svg
                style={{ fontSize: "20px", color: "#9b1fe9" }}
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z"></path>
                </g>
              </svg>{" "}
              <p>
                Your wallet is connected to{" "}
                <span style={{ fontWeight: "bold" }}>{selectedNetwork?.name}</span>, so
                you are requesting{" "}
                <span style={{ fontWeight: "bold" }}>{selectedNetwork?.name}</span>{" "}
                Link/ETH.
              </p>
            </div>
            <div className="info_form">
              <form onSubmit={handleSubmit}>
                <div className="wallet_address">
                  <label htmlFor="wallet">Wallet Address</label>

                  <div className="input_Wall">
                    <input
                      type="text"
                      placeholder="Your Wallet Address..."
                      name="walletAddress"
                      className="input_class"
                    />
                  </div>
                </div>
                <div id="Request_Type" className="req-type">
                  <label htmlFor="wallet">Request Type</label>
                  <div className="inputFields">
                    <div className="left_Input" id="linput">
                      <input
                        type="text"
                        placeholder="Test link"
                        name="test_link"
                        disabled
                        className="input_class"
                        value="20 Test Link"
                    
                      />
                    </div>
                    <div className="rightInput">
                      <input
                        type="text"
                        placeholder="ETH"
                        name="eth"
                        disabled
                        className="input_class"
                        value="0.5 ETH"
                      />
                    </div>
                  </div>
                </div>

                <div className="recaptcha">
                  <div className="googleR">
                    <ReCAPTCHA
                      sitekey="6LfuwWEjAAAAAEtGPKt-b8LnN6uPnSThSGkkZ-KK"
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="req-button">
                  <button type="submit">Send Request</button>
                </div>
              </form>
            </div>
            <div className="req_history">
              <h2>Request History</h2>
              <div className="tabs">
                <span
                  onClick={handleEthTransaction}
                  className={ethTransaction ? activeClassName : null}
                >
                  ETH Transaction History
                </span>
                <span
                  onClick={handleTestLinkTransaction}
                  className={testLinkTransaction ? activeClassName : null}
                >
                  TestLink Transaction History
                </span>
              </div>
              <div className="history_text">
                <div className="history">
                  {ethTransaction && (
                    <EthTable/>
                  )}

                  {testLinkTransaction && (
                   <TestLinkTable/>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
    </div>
  );
};

export default Home;
