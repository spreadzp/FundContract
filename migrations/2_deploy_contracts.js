let Token = artifacts.require("../contracts/Token.sol");
let StandardToken = artifacts.require("../contracts/StandardToken.sol");
let Owned = artifacts.require("../contracts/Owned.sol");
let Fund = artifacts.require("../contracts/Fund.sol"); 

module.exports = function(deployer,accounts) {  
  deployer.deploy(
    //Token,
    StandardToken, 
    [Fund, web3.eth.accounts[0], [web3.eth.accounts[1], web3.eth.accounts[2], web3.eth.accounts[3], web3.eth.accounts[4]]]
  ); 
  // deployer.link(
  //   Token,
  //   StandardToken,
  //   Fund
  // );
   
 
};
