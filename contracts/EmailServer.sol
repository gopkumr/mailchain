pragma solidity ^0.4.2;

contract EmailServer{

struct User {
    string userName;
}

//Adding a name to address mapping
mapping(string=>address) emailMapping;
mapping(string=>User) userNameMapping;

uint public userCount;

event MessageSent(address from, address indexed to, string message);
event UserAdded(string userName);
event UserAddFailed(string userName, string message);

function addUser(string memory _userName) public returns(uint) {
    require(emailMapping[_userName]==address(0), "Username already exists");
    
    userCount=userCount+1;
    emailMapping[_userName]=msg.sender;
    emit UserAdded(_userName);
}

function sendMessage(string memory _userName, string memory _message) public {
  address toAddress=emailMapping[_userName];
  emit MessageSent(msg.sender,toAddress, _message);
}

function getUserAddress(string memory _userName) public view returns (address) {
    return emailMapping[_userName];
}

}
