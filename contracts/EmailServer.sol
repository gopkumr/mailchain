pragma solidity ^0.4.2;

contract EmailServer{

struct User {
    string userName;
}

//Adding a name to address mapping
mapping(string=>address) emailMapping;
mapping(string=>User) userNameMapping;

uint public userCount;

event MessageSent(address from, address to, string message);
event UserAdded(string userName);
event UserAddFailed(string userName, string message);

function addUser(string _userName) public returns(uint) {
    userCount=userCount+1;
    emailMapping[_userName]=msg.sender;
    emit UserAdded(_userName);
}

function sendMessage(string _userName, string _message) public {
  address toAddress=emailMapping[_userName];
  emit MessageSent(msg.sender,toAddress, _message);
}

}
