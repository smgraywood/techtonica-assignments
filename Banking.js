function Account(name, balance){
    this.name = name;
    this.balance = 0;
  }
  Account.prototype.depositFunct = function(value){
    return this.balance + value;
  }
  Account.prototype.describeFunct = function(){
      return "Account owner: " + this.name + " has a balance of: " + this.balance;
   }
  Account.prototype.transferFunct = function(nameToReceive, amountToTransfer){
      return nameToReceive + " will receive " + amountToTransfer + " from " + this.name + "."
  }
  let Jack = new Account();
  Jack.name = "Jaqueline";
  Jack.balance = 1000;
  console.log(Jack.depositFunct(500))
  console.log(Jack.describeFunct())
  // console.log(Jsck.transferFunct("Billy", 2000))
  
  let Billy = new Account();
  Billy.name = "Willamina";
  Billy.balance = 500;
  console.log(Billy.depositFunct(200));
  console.log(Billy.describeFunct())
  console.log(Billy.transferFunct("Jack", 200))
  
  let Rosie = new Account();
  Rosie.name = "Rosemary";
  Rosie.balance = 300;
  console.log(Rosie.depositFunct(100))
  console.log(Rosie.describeFunct())
  console.log(Rosie.transferFunct("Jack", -1500))
  
  let Jill = new Account();
  Jill.name = "Jillian";
  Jill.balance = 50;
  console.log(Jill.depositFunct(1000))
  console.log(Jill.describeFunct())
  console.log(Rosie.transferFunct("Mary", 1200))
  