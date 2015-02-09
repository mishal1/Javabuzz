describe('Javabuzz', function(){
	var javabuzz;

	beforeEach(function(){
		javabuzz = new Javabuzz();
	});

	describe('knows when a number is divisible by', function(){

		it('three', function(){
			expect(javabuzz.divisibleByThree(3)).toBe(true)
		});

		it('five', function(){
			expect(javabuzz.divisibleByFive(5)).toBe(true)
		});

		it('fifteen', function(){
			expect(javabuzz.divisibleByFifteen(15)).toBe(true)
		});

	});

	describe('knows when a number is not divisible by', function(){

		it('three', function(){
			expect(javabuzz.divisibleByThree(1)).toBe(false)
		});

		it('five', function(){
			expect(javabuzz.divisibleByFive(1)).toBe(false)
		});

		it('fifteen', function(){
			expect(javabuzz.divisibleByFifteen(1)).toBe(false)
		});

	});

	describe('says', function(){

		it('fizz when number is divisible by three', function(){
			expect(javabuzz.says(3)).toEqual('Fizz')
		});

		it('buzz when number is divisible by five', function(){
			expect(javabuzz.says(5)).toEqual('Buzz')
		});

		it('fizzbuzz when number is divisbly by fifteen', function(){
			expect(javabuzz.says(15)).toEqual('Fizzbuzz')
		});

		it('number when the number is not divisible by three, five or fifteen', function(){
			expect(javabuzz.says(1)).toEqual(1)
		});

	});

});





