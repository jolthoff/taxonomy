var ForagerBee = function() {
	Bee.call(this);
	this.job = 'find pollen';
	this.age = 10;
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(value){
    this.treasureChest.push(value);
}