describe('Javabuzz', function(){
	var javabuzz;

	beforeEach(function(){
		javabuzz = new Javabuzz();
	});

	describe('knows when a number is', function(){
		it('divisible by three', function(){
			expect(javabuzz.isDivisibleByThree(3)).toBe(true)
		});

		it('divisible by five', function(){
			expect(javabuzz.isDivisibleByFive(5)).toBe(true)
		});

		it('divisible by fifteen', function(){
			expect(javabuzz.isDivisibleByFifteen(15)).toBe(true)
		});
	});

	describe('knows when a number is NOT', function(){
		it('divisible by three', function(){
			expect(javabuzz.isDivisibleByThree(1)).toBe(false)
		});

		it('divisible by five', function(){
			expect(javabuzz.isDivisibleByFive(1)).toBe(false)
		});

		it('divisible by fifteen', function(){
			expect(javabuzz.isDivisibleByFifteen(1)).toBe(false)
		});
	});

	describe('javabuzz says', function(){
		it('"Java" if the number is divisible by three', function(){
			expect(javabuzz.says(3)).toEqual("Java")
		});

		it('"Buzz" if the number is divisible by five', function(){
			expect(javabuzz.says(5)).toEqual("Buzz")
		});

		it('"JavaBuzz" if the number is divisible by fifteen', function(){
			expect(javabuzz.says(15)).toEqual("JavaBuzz")
		});

		it("return the number if it isn't divisible by three, five or fifteen", function(){
			expect(javabuzz.says(1)).toEqual(1)
		});
	});

});





