const fizzBuzz = () => {
    for (i=0; i<= 100; i++) {
        // console.log(i)
        // console.log(i/3)
        // console.log(Number.isInteger(i / 3))
        if (i % 3 == 0) {
            console.log('fizz')
        }
        if (i % 5 == 0) {
            console.log('buzz')
        }

        if (i%3 == 0 && i%5 == 0) {
            console.log('fizz-buzz')
        }
    } 
}

console.log(fizzBuzz())