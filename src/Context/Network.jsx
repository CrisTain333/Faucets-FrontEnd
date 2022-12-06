import React, { useState } from 'react';
import NetworkContext from './Context';
import defaultImage from '../images/PAHYDMBoGPPsaT72wwVbhQlfCzcA8OssSK9id0YNSsA.webp'

const Network = ({children}) => {
    const[selectedNetwork,setSelectedNetwork]= useState({
        name :'Ethereum Kovan',
        img : defaultImage
    })

    return (
        <NetworkContext.Provider value={{selectedNetwork,setSelectedNetwork}}>
            {children}
        </NetworkContext.Provider>
    );
};

export default Network;