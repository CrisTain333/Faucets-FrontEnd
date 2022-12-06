import React, { useContext, useState } from "react";
import "./Home.css";
import ReCAPTCHA from "react-google-recaptcha";
import { NavLink } from "react-router-dom";
import NetworkContext from "../../Context/Context";

const Home = () => {
    const {selectedNetwork} = useContext(NetworkContext)
  const [ethTransaction, setEthTransaction] = useState(true);
  const [testLinkTransaction, setTestLinkTransaction] = useState(false);
  let activeClassName = "active_tabs";

  


  const handleEthTransaction = () => {
    setEthTransaction(true);
    setTestLinkTransaction(false);
  };

  const handletestLinkTransaction = () => {
    setTestLinkTransaction(true);
    setEthTransaction(false);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
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
            <div class="warning">
              <svg
                style={{ fontSize: "20px", color: "#9b1fe9" }}
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
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
                <div class="wallet_address">
                  <label for="wallet">Wallet Address</label>

                  <div class="input_Wall">
                    <input
                      type="text"
                      placeholder="Your Wallet Address..."
                      name="walletAddress"
                      class="input_class"
                    />
                  </div>
                </div>
                <div id="Request_Type" className="req-type">
                  <label for="wallet">Request Type</label>
                  <div class="inputFields">
                    <div class="left_Input" id="linput">
                      <input
                        type="text"
                        placeholder="Test link"
                        name="test_link"
                        disabled
                        class="input_class"
                        value="20 Test Link"
                    
                      />
                    </div>
                    <div class="rightInput">
                      <input
                        type="text"
                        placeholder="ETH"
                        name="eth"
                        disabled
                        class="input_class"
                        value="0.5 ETH"
                      />
                    </div>
                  </div>
                </div>

                <div className="recaptcha">
                  <div className="googleR">
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
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
                  onClick={handletestLinkTransaction}
                  className={testLinkTransaction ? activeClassName : null}
                >
                  TestLink Transaction History
                </span>
              </div>
              <div className="history_text">
                <div className="history">
                  {ethTransaction && (
                    <table>
                      <thead class="table__head">
                        <tr>
                          <th>Sr</th>
                          <th>Time</th>
                          <th>Amount</th>
                          <th>Hash</th>
                        </tr>
                      </thead>
                      <tbody
                        class="table__body"
                        style={{ textAlign: "center" }}
                      >
                        <tr>
                          <td>1</td>
                          <td>12:30 AM</td>
                          <td>487</td>
                          <td>4s8er5s5fe57rjmxnfuewrurks</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>10:30 AM</td>
                          <td>875</td>
                          <td>sf7s7ers4e7r7wser</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>11:30 AM</td>
                          <td>797</td>
                          <td>se4s7er7</td>
                        </tr>
                      </tbody>
                    </table>
                  )}

                  {testLinkTransaction && (
                    <table>
                      <thead class="table__head">
                        <tr>
                          <th>Sr</th>
                          <th>Time</th>
                          <th>Amount</th>
                          <th>Hash</th>
                        </tr>
                      </thead>
                      <tbody
                        class="table__body"
                        style={{ textAlign: "center" }}
                      >
                        <tr>
                          <td>1</td>
                          <td>08:30 AM</td>
                          <td>748</td>
                          <td>7s7effkeurusue4</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>10:23 AM</td>
                          <td>974</td>
                          <td>sfe7r7sr4fer</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>11:10 AM</td>
                          <td>874</td>
                          <td>s4e7s8er</td>
                        </tr>
                      </tbody>
                    </table>
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
