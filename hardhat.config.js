require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

// Go to https://infura.io, sign up, create a new API key
// in its dashboard, and replace "KEY" with it
const INFURA_API_KEY = "3f28e104d4d34413ba7a0eba4e18589e";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const Goerli_PRIVATE_KEY = "2817782db86070d764c41b898d0564c791747c8e35961b3bcb655565a804907b";
//https://goerli.infura.io/v3/3f28e104d4d34413ba7a0eba4e18589e
module.exports = {
  solidity: "0.8.19",
  networks: {
    Goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      // apiKey: "2X51R8J1J37NFXUD595A5SCNVBZ4ZQQ31Y",
      accounts: [Goerli_PRIVATE_KEY]
    }
  },
  
  etherscan: {
    apiKey: {
      goerli: "2X51R8J1J37NFXUD595A5SCNVBZ4ZQQ31Y"
    },
    customChains: [
      {
        network: "goerli",
        chainId: 5,
        urls: {
          apiURL: "https://api-goerli.etherscan.io/api",
          browserURL: "https://goerli.etherscan.io"
        }
      }
    ]
  }
}
  

