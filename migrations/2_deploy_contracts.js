let StandardToken = artifacts.require("../contracts/StandardToken.sol");
let Fund = artifacts.require("../contracts/Fund.sol"); 

module.exports = function(deployer,accounts) {  
  deployer.deploy( 
    StandardToken, Fund
  );  
};
