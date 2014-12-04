describe('Javabuzz', function() {

	var javabuzz = new Javabuzz();

	describe('knows when a number is', function() {

		it('divisible by 3', function() {
			expect(javabuzz.isDivisibleByThree(3)).toBe(true);
		});

		it('divisible by 5', function(){
			expect(javabuzz.isDivisibleByFive(5)).toBe(true); 
		});

		it('divisible by 15', function(){
			expect(javabuzz.isDivisibleByFifteen(15)).toBe(true)
		});

	});

	describe('knows when a number is NOT', function(){

		it('divisible by 3', function(){
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it('divisible by 5', function(){
			expect(javabuzz.isDivisibleByFive(1)).toBe(false)
		});

		it('divisible by 15', function(){
			expect(javabuzz.isDivisibleByFifteen(1)).toBe(false)
		});

	});

	describe('javabuzz says', function(){
		
		it('"java" if divisible by 3', function(){
			expect(javabuzz.says(3)).toEqual("java")
		});

		it('"buzz" if divisible by 5', function(){
			expect(javabuzz.says(5)).toEqual("buzz")
		});

		it('"javabuzz" if divisible by 15', function(){
			expect(javabuzz.says(15)).toEqual("javabuzz")
		});

		it("number if it is not divisible by 3, 5 or 15", function(){
			expect(javabuzz.says(1)).toEqual(1)
		});
	});
});