import React, { useContext, useState } from "react";
import "./navbar.css";
import ethereumKovan from "../../images/PAHYDMBoGPPsaT72wwVbhQlfCzcA8OssSK9id0YNSsA.webp";
import arbitrumImage from "../../images/logo.svg";
import avalancheFuji from "../../images/AvalancheFuji.png";
import bnbChainTestnet from "../../images/BNB-Chain-Testnet.png";
import fantomTestnet from "../../images/Fantom-Testnet.png";
import harmonyTestnet from "../../images/Harmony-Testnet.jpg";
import poaNetworkSokol from "../../images/POANetworkSokol.png";
import dPolygonMumbai from "../../images/dPolygonMumbai.png";
import NetworkContext from "../../Context/Context";

const Navbar = () => {
  const [userToggle, setUserToggle] = useState(false);
  const [networkListPopover, setNetworkListPopover] = useState(false);
  const {selectedNetwork , setSelectedNetwork} =useContext(NetworkContext)





  const userToggleMode = () => {
    if (!userToggle) setUserToggle(true);
    else setUserToggle(false);
  };

  const networkListToggle = () => {
    if (!networkListPopover) setNetworkListPopover(true);
    else setNetworkListPopover(false);
  };

  const handleNetwork = (img, name) => {
    const obj = {
      name,
      img,
    };
    setSelectedNetwork(obj);
    setNetworkListPopover(false);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header_Container">
          <div className="logo">
            <a href="/">
              <h2>Faucets</h2>
            </a>
          </div>
          <div className="right_content">
            <div className="networks">
              <div className="networkList">
                <div className="network_State" onClick={networkListToggle}>
                  <p>
                    <img src={selectedNetwork.img} className="networksImg" alt="" />
                    <span id="smallText">{selectedNetwork.name}</span>
                  </p>
                  <span>
                    <svg
                      style={{ marginBottom: "-3", marginLeft: "8px" }}
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                    </svg>
                  </span>
                </div>
                {networkListPopover ? (
                  <div class="network_popover">
                    <ul id="mainUl">
                      <li
                        onClick={() =>
                          handleNetwork(arbitrumImage, "Arbitrum Rinkeby")
                        }
                      >
                        <img
                          src={arbitrumImage}
                          className="networksImg"
                          alt="img"
                        />
                        <p>Arbitrum Rinkeby</p>
                      </li>
                      <li
                        onClick={() =>
                          handleNetwork(avalancheFuji, "Avalanche Fuji")
                        }
                      >
                        <img
                          className="networksImg"
                          src={avalancheFuji}
                          alt="img"
                        />
                        <p>Avalanche Fuji</p>
                      </li>
                      <li
                        onClick={() =>
                          handleNetwork(bnbChainTestnet, "BNB Chain Testnet")
                        }
                      >
                        <img
                          className="networksImg"
                          src={bnbChainTestnet}
                          alt="img"
                        />
                        <p>BNB Chain Testnet</p>
                      </li>
                      <li
                        onClick={() =>
                          handleNetwork(arbitrumImage, "Ethereum Rinkeby")
                        }
                      >
                        <img
                          className="networksImg"
                          src={arbitrumImage}
                          alt="img"
                        />
                        <p>Ethereum Rinkeby</p>
                      </li>
                      <li
                        onClick={() =>
                          handleNetwork(fantomTestnet, "Fantom Testnet")
                        }
                      >
                        <img
                          src={fantomTestnet}
                          className="networksImg"
                          alt="img"
                        />
                        <p>Fantom Testnet</p>
                      </li>
                      <li
                        onClick={() =>
                          handleNetwork(harmonyTestnet, "Harmony Testnet")
                        }
                      >
                        <img
                          src={harmonyTestnet}
                          className="networksImg"
                          alt="img"
                        />
                        <p>Harmony Testnet</p>
                      </li>
                      <li
                        onClick={() =>
                          handleNetwork(poaNetworkSokol, "POA Network Sokol")
                        }
                      >
                        <img
                          src={poaNetworkSokol}
                          className="networksImg"
                          alt="img"
                        />
                        <p>POA Network Sokol</p>
                      </li>
                      <li
                        onClick={() =>
                          handleNetwork(dPolygonMumbai, "Polygon Mumbai")
                        }
                      >
                        <img
                          src={dPolygonMumbai}
                          className="networksImg"
                          alt="img"
                        />
                        <p>Polygon Mumbai</p>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="connect_wallet">
                <button className="connectButton">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M95.5 104h320a87.73 87.73 0 0111.18.71 66 66 0 00-77.51-55.56L86 94.08h-.3a66 66 0 00-41.07 26.13A87.57 87.57 0 0195.5 104zm320 24h-320a64.07 64.07 0 00-64 64v192a64.07 64.07 0 0064 64h320a64.07 64.07 0 0064-64V192a64.07 64.07 0 00-64-64zM368 320a32 32 0 1132-32 32 32 0 01-32 32z"></path>
                    <path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236z"></path>
                  </svg>{" "}
                  <span id="btn-text">Connect Wallet</span>
                </button>
              </div>
            </div>
            <div className="user" onClick={userToggleMode}>
              <div class="icon">
                <svg
                  style={{ fontSize: "25px", color: "#6d7380" }}
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 496 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M248 104c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96zm0 144c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm0-240C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-49.7 0-95.1-18.3-130.1-48.4 14.9-23 40.4-38.6 69.6-39.5 20.8 6.4 40.6 9.6 60.5 9.6s39.7-3.1 60.5-9.6c29.2 1 54.7 16.5 69.6 39.5-35 30.1-80.4 48.4-130.1 48.4zm162.7-84.1c-24.4-31.4-62.1-51.9-105.1-51.9-10.2 0-26 9.6-57.6 9.6-31.5 0-47.4-9.6-57.6-9.6-42.9 0-80.6 20.5-105.1 51.9C61.9 339.2 48 299.2 48 256c0-110.3 89.7-200 200-200s200 89.7 200 200c0 43.2-13.9 83.2-37.3 115.9z"></path>
                </svg>
              </div>
              {userToggle ? (
                <div class="user_list">
                  <ul>
                    <li>
                      <a href="/login">Log In</a>
                    </li>
                    <li>
                      <a href="/signup">Sign Up</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
