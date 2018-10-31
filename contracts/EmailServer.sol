pragma solidity ^0.4.2;

contract EmailServer{

struct User{
    string userName;
}

//Adding a name to address mapping
mapping(address=>User) public EmailMapping;

uint public UserCount;

function addUser(string userName, address addressId) private{
    UserCount++;
    EmailMapping[addressId]=User(userName);
}

}
