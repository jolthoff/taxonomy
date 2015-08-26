var RetiredForagerBee = function() {
	ForagerBee.call(this);
	Grub.call(this)
	this.canFly = false;
	this.color = 'grey';
	this.age = 40;
	this.job = "gamble";
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
    return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function() {
	this.treasureChest.push('WINNING!');
}