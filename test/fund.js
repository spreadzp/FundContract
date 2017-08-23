const Fund = artifacts.require("../contracts/Fund.sol");
const StandardToken = artifacts.require("../contracts/StandardToken.sol");
const MetaCoin = artifacts.require("./MetaCoin.sol");
const ether = require('./helpers/ether');

contract('Fund', function (accounts) {
  let fund; 
  beforeEach(async  () => {  
    let sposorCoin = web3.eth.accounts[0]; 
    let wallets = [web3.eth.accounts[1],web3.eth.accounts[2],web3.eth.accounts[3],web3.eth.accounts[4]]; 
    fund = await Fund.new(sposorCoin, wallets);  
  });

  it("should create Fund object",async () => { 
    assert.isObject(fund,"null is not an object");
  })

  it("should call truthy createFund method",async () => {     
    let createFund = await fund.createFund.call(); 
    assert.equal(createFund, true, "method createFund is falsy");
  })  
  
  it("should call truthy fillToWallets method",async () => { 
    let isFilledWallers = await fund.fillToWallets.call(5000);    
    assert.equal(isFilledWallers, true, "Wallets were not fill");
  })  

  it("should call truthy withdraw method ",async () => {     
      let isSuccessWithdrow = await fund.withdraw.call(accounts[2], 1000); 
      assert.equal(isSuccessWithdrow, true, `withdraw to accounts2:${accounts[2]} is falthy`);  
  })   
}); 