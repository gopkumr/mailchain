var emailServer=artifacts.require('./EmailServer.sol');

contract("EmailServer", function() {
    var emailServerInstance;

    it("Add a new users",function(){
        return emailServer.deployed().then(function(instance){
               emailServerInstance=instance;
               return emailServerInstance.addUser("testUser");
        }).then(function(value){
             assert.equal(value,1);   
        });
    });

    it("Verify user count",function(){
        return emailServer.deployed().then(function(instance){
               emailServerInstance=instance;
                return emailServerInstance.userCount();
        }).then(function(value){
            assert.equal(value,1);  
        });
    });

});