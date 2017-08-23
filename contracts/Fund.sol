pragma solidity ^0.4.13;  

import "./StandardToken.sol";

contract Fund is StandardToken { 
    uint public sumAllWallets;
    StandardToken public standardToken;
    address[] public wallets;
    
    function Fund( StandardToken _standardToken, address[] _wallets) {  
        standardToken = _standardToken;
        wallets = _wallets;
        balances[standardToken] = 10000; // for tests 
    }
    
    function createFund() returns(bool) {  
        if (balances[standardToken] > 0) {
            if (wallets.length != 0) {
                uint partCoinsForWallet = balances[standardToken]/wallets.length;
                if (fillWallets(partCoinsForWallet)) {
                    return (getSumOfWallets() == partCoinsForWallet * wallets.length);
                }    
                return false;
            }
            return false;
        }
        return false;         
    }

    function fillWallets(uint partCoinsForWallet) returns(bool isSuccessFill) {
        for (uint i = 0; i < wallets.length; i++) {
            if (balances[standardToken] >= partCoinsForWallet) {
                balances[standardToken] -= partCoinsForWallet;
                balances[wallets[i]] += partCoinsForWallet;
                Transfer(msg.sender, wallets[i], partCoinsForWallet);
            } else {
                return false;
            }
	    }
	    return true;
    } 
	
	function getSumOfWallets() public returns(uint sum) {	    
	    for (uint i = 0; i < wallets.length; i++) { 
	        sumAllWallets += balances[wallets[i]]; 
	    }
	    return sumAllWallets;
	} 
    
    function withdraw(address _spender, uint256 _value) public returns(bool success) { 
        require(balances[msg.sender] >= _value);
        return approve(_spender, _value);
	} 
    function getWallets() public returns(uint success) {  
        return balances[wallets[1]];
	} 
}
