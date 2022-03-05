
require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/EBq_yCrfffUPKcksbjrS_nN-edtabbqH',
      accounts:['850aff6c82ab2c5a51b9c78785a59361220afae2cfba3978f39eb263de483a37']
    }
  }
}