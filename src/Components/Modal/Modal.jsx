import React from 'react';
import './modal.css'
import Metamask from '../../images/MetaMask_Fox.svg.png'

const Modal = ({modal,setModal}) => {
   



  const toggleModal = () => {
    setModal(!modal);
  };


    return (
        <>
      
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='titleDiv'>
            <h2>Connect your wallet</h2>
            <button className="close-modal" onClick={toggleModal}>
              x
            </button>
            </div>
            <div className='imageDiv'>
            <div className="imageContainer">
                <img src={Metamask} alt="" />
                <h3>MetaMask</h3>
            </div>
            <div className="imageContainer">
            <img src='https://faucets.netlify.app/static/media/WalletConnect.d0b10794.svg' alt="" />
                <h3>WalletConnect</h3>
            </div>

            </div>
         
          </div>
        </div>
   
            
        </>
    );
};

export default Modal;