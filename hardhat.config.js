require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    development: {
      url: "http:83.212.99.46:8545",
    }, 
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
