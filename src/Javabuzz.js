function Javabuzz (){}

Javabuzz.prototype.divisibleByThree = function(number) {
  return this.divisibleBy(3, number)
};

Javabuzz.prototype.divisibleByFive = function(number) {
  return this.divisibleBy(5, number)
};

Javabuzz.prototype.divisibleByFifteen = function(number) {
  return this.divisibleBy(15, number)
};

Javabuzz.prototype.divisibleBy = function(divisor, number) {
  return number % divisor === 0
};

Javabuzz.prototype.says = function(number) {
  if(this.divisibleByFifteen(number)){return 'Fizzbuzz'}
  if(this.divisibleByFive(number)){return 'Buzz'}
  if(this.divisibleByThree(number)){return 'Fizz'}
  return number
};