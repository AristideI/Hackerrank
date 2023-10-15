// Question 1

function Activity(amount) {
  this.amount = amount;
}

Activity.prototype.setAmount = function (amount) {
  if (amount <= 0) return false;
  this.amount = amount;
  return true;
};

Activity.prototype.getAmount = function () {
  return this.amount;
};

function Payment(amount, receiver) {
  Activity.call(this, amount);
  this.receiver = receiver;
}

Payment.prototype = Object.create(Activity.prototype);
Payment.prototype.constructor = Payment;

Payment.prototype.setReceiver = function (receiver) {
  this.receiver = receiver;
};

Payment.prototype.getReceiver = function () {
  return this.receiver;
};

function Refund(amount, sender) {
  Activity.call(this, amount); // Call the parent constructor
  this.sender = sender;
}

Refund.prototype = Object.create(Activity.prototype);
Refund.prototype.constructor = Refund;

Refund.prototype.setSender = function (sender) {
  this.sender = sender;
};

Refund.prototype.getSender = function () {
  return this.sender;
};

// Question2

function Employee(title) {
  this.title = title;
}

Employee.prototype.setTitle = function (title) {
  this.title = title;
};

Employee.prototype.getTitle = function () {
  return this.title;
};

function Engineer(title, isManager) {
  Employee.call(this, title); // Call the parent constructor
  this.isManager = isManager;
}

// Set up the prototype chain
Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.constructor = Engineer; // Fix the constructor reference

Engineer.prototype.setIsManager = function (bool) {
  this.isManager = bool;
};

Engineer.prototype.getIsManager = function () {
  return this.isManager;
};
