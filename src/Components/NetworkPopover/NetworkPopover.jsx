import React, { useContext } from "react";
import arbitrumImage from "../../images/logo.svg";
import avalancheFuji from "../../images/AvalancheFuji.png";
import bnbChainTestnet from "../../images/BNB-Chain-Testnet.png";
import fantomTestnet from "../../images/Fantom-Testnet.png";
import harmonyTestnet from "../../images/Harmony-Testnet.jpg";
import poaNetworkSokol from "../../images/POANetworkSokol.png";
import dPolygonMumbai from "../../images/dPolygonMumbai.png";
import NetworkContext from "../../Context/Context";

const NetworkPopover = ({ setNetworkListPopover }) => {
  const { selectedNetwork, setSelectedNetwork } = useContext(NetworkContext);

  const handleNetwork = (img, name) => {
    const obj = {
      name,
      img,
    };
    setSelectedNetwork(obj);
    setNetworkListPopover(false);
  };

  return (
    <>
      <div className="network_popover">
        <ul id="mainUl">
          <li onClick={() => handleNetwork(arbitrumImage, "Arbitrum Rinkeby")}>
            <img src={arbitrumImage} className="networksImg" alt="img" />
            <p>Arbitrum Rinkeby</p>
          </li>
          <li onClick={() => handleNetwork(avalancheFuji, "Avalanche Fuji")}>
            <img className="networksImg" src={avalancheFuji} alt="img" />
            <p>Avalanche Fuji</p>
          </li>
          <li
            onClick={() => handleNetwork(bnbChainTestnet, "BNB Chain Testnet")}
          >
            <img className="networksImg" src={bnbChainTestnet} alt="img" />
            <p>BNB Chain Testnet</p>
          </li>
          <li onClick={() => handleNetwork(arbitrumImage, "Ethereum Rinkeby")}>
            <img className="networksImg" src={arbitrumImage} alt="img" />
            <p>Ethereum Rinkeby</p>
          </li>
          <li onClick={() => handleNetwork(fantomTestnet, "Fantom Testnet")}>
            <img src={fantomTestnet} className="networksImg" alt="img" />
            <p>Fantom Testnet</p>
          </li>
          <li onClick={() => handleNetwork(harmonyTestnet, "Harmony Testnet")}>
            <img src={harmonyTestnet} className="networksImg" alt="img" />
            <p>Harmony Testnet</p>
          </li>
          <li
            onClick={() => handleNetwork(poaNetworkSokol, "POA Network Sokol")}
          >
            <img src={poaNetworkSokol} className="networksImg" alt="img" />
            <p>POA Network Sokol</p>
          </li>
          <li onClick={() => handleNetwork(dPolygonMumbai, "Polygon Mumbai")}>
            <img src={dPolygonMumbai} className="networksImg" alt="img" />
            <p>Polygon Mumbai</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NetworkPopover;
