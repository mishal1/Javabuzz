function Javabuzz(){};

Javabuzz.prototype.isDivisibleByThree = function(number) {
	return this.formula(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
	return this.formula(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
	return this.formula(number, 15);
};

Javabuzz.prototype.formula = function(number, divisor) {
	return number % divisor === 0;
};

Javabuzz.prototype.says = function(number) {
	if(this.isDivisibleByFifteen(number)){return "javabuzz"}
	if(this.isDivisibleByFive(number)){return "buzz"}
	if(this.isDivisibleByThree(number)){return "java"}
	return number
};