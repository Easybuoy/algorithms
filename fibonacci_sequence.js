// const fibonacci_sequence_recursive = (sequence, fibonacci_response = [0, 1]) => {
//     if (sequence === 0) {
//         return []
//     }
    
//     if (sequence == 1) {
//         return [0]
//     }

//     if (sequence === 2) {
//         return fibonacci_response;
//     }

//     if (sequence === fibonacci_response.length) {
//         return fibonacci_response;
//     }

//     const next_number = fibonacci_response[fibonacci_response.length - 1]  + fibonacci_response[fibonacci_response.length - 2 ]
//     fibonacci_response = fibonacci_response.concat(next_number)

//     return fibonacci_sequence_recursive(sequence, fibonacci_response)
// }

// console.log(fibonacci_sequence_recursive(8))

const fibonacci_sequence = (sequence) => {
        if (sequence === 0) {
        return []
    }
    
    if (sequence == 1) {
        return [0]
    }

    let fibonacci_response = [0, 1]

    if (sequence === 2) {
        return fibonacci_response;
    }

    while (sequence > fibonacci_response.length) {
        const next_number = fibonacci_response[fibonacci_response.length - 1]  + fibonacci_response[fibonacci_response.length - 2 ]

        fibonacci_response = fibonacci_response.concat(next_number)
    }

    return fibonacci_response
}

console.log(fibonacci_sequence(8))