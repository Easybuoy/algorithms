const fibonacci_sequence = (sequence, fibonacci_response = [0, 1]) => {
    if (sequence == 1) {
        return [0]
    }

    if (sequence === 2) {
        return fibonacci_response;
    }

    if (sequence == fibonacci_response.length) {
        return fibonacci_response;
    }

    const next_number = fibonacci_response[fibonacci_response.length - 1]  + fibonacci_response[fibonacci_response.length - 2 ]
    fibonacci_response = fibonacci_response.concat(next_number)

    return fibonacci_sequence(sequence, fibonacci_response)
}

console.log(fibonacci_sequence(8))