var EmailServer = artifacts.require("./EmailServer.sol");

module.exports = function(deployer) {
  deployer.deploy(EmailServer);
};