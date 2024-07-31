const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = "YOUR_INFURA_KEY"; //Your infura key here
const mnemonic = "YOUR_MNEMONIC_PHRASE"; //Your mnemonic phrase here

module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // Rinkeby's id
      gas: 4500000,        // Gas limit
      gasPrice: 10000000000 // 10 gwei
    },
    
  },
  compilers: {
    solc: {
      version: "0.6.6",    // Versão do Solidity
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};
