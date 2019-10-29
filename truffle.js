const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()

const memonic = process.env.KEY_STRING
module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(memonic, process.env.NETWORK)
      },
      network_id: 4
    }
  }
};
