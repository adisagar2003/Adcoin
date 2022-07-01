//https://eth-goerli.g.alchemy.com/v2/y1QWR5WxiYWNTdipBFswWdkQvty-_344
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity:'0.8.0',
  networks:{
    rinkeby:{
      url:'https://eth-rinkeby.alchemyapi.io/v2/y1QWR5WxiYWNTdipBFswWdkQvty-_344',
      accounts:['2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6']
    }
  }
}