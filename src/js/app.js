App = {
  web3Provider: null,
  contracts: {},

  init: function() {
    $("#btnSubmit").attr('disabled','disabled');;
    return App.initWeb3();

  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }

    return App.initContract();
  },

  initContract: function() {
    $.getJSON("EmailServer.json", function(emailServer) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.EmailServer = TruffleContract(emailServer);
      // Connect provider to interact with contract
      App.contracts.EmailServer.setProvider(App.web3Provider);

      App.bindEvents();
    });
  },

  bindEvents: function() {
   $("#btnSubmit").removeAttr('disabled');
   $("#btnSubmit").click(App.registerUser);
   $("#btnSend").click(App.sendMessage);

   web3.eth.getCoinbase(function(err, account) {
    if (err === null) {
      App.account = account;
      $("#accountInfo").html("Your Account: " + account);
    }
    });

   App.contracts.EmailServer.deployed().then(function(instance){
     instance.UserAdded({},{fromBlock:0, toBlock:'latest'}).watch(function(error,event){
        alert('User Added successfully!');
     });
   });

   App.contracts.EmailServer.deployed().then(function(instance){
    instance.MessageSent({},{fromBlock:0, toBlock:'latest', to:App.account}).watch(function(error,event){
      if(event.args.to===App.account){
       alert('msg recieved:' + JSON.stringify(event.args.message));
      }
    });
  });
  
  },

  registerUser: function() {
    var emailServerInstance;
    var userName=$("#userName").val();
   App.contracts.EmailServer.deployed().then(function(instance){
      emailServerInstance=instance;
      return emailServerInstance.addUser(userName);
   }).then(function(result){
       return emailServerInstance.userCount();
   }).then(function(result){
      alert(JSON.stringify(result));
   });
  },

  sendMessage:function(){
    var userName=$("#toUser").val();
    var message=$("#message").val();

    App.contracts.EmailServer.deployed().then(function(instance){
       instance.sendMessage(userName,message);
   });

  },

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
