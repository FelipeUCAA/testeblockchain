const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const mnemonic = process.env.MNEMONIC;
const alchemyKey = 'YOUR_KEY'; // Chave da Alchemy, pode colocar qualquer outro serviço desejado 



module.exports = {
  networks: {
    "NomeDaRedeQueVaiSerConectadaSemAspas": { //Coloque o nome da rede por ex: sepolia, Etherum Mainnet, polygon mainnet
      provider: () => new HDWalletProvider(mnemonic, `LINK_DA_REDE_DESEJADA${alchemyKey}`), //Coloque o link da rede desejada, disponível na sua conta
      network_id: 11155111,  // Troque pro ID da rede desejada, no caso essa é da sepolia
      confirmations: 2,
      timeoutBlocks: 200, //Atraso *necessário*, sem ele da erro "Too Many Requests" (-32603)
      skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: "0.6.6",    // Versão do Solidity, não mudar em nenhuma hipótese
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};
