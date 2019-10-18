const fizzBuzz = () => {
  for (i = 1; i <= 100; i++) {
    divisibleBy5 = i % 5 == 0;
    divisibleBy3 = i % 3 == 0;
    if (divisibleBy5 && divisibleBy3) {
      console.log('fizz-buzz');
    } else if (divisibleBy3) {
      console.log('fizz');
    } else if (divisibleBy5) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz());
