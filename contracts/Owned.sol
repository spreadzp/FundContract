pragma solidity ^0.4.13;  

contract Owned {
    function Owned() { owner = msg.sender; }
    address owner;
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
} 
