// Função para saber se o número pertence a sequência de Fibonacci
// "num" deve ser um número
function isFibonacciSequence(num) {
    if (typeof num != "number")
        return false

    const sequence = [0, 1]
    while(true) {
        const value = sequence[sequence.length -2] + sequence[sequence.length -1]
        if (value == num)
            return true
        else if (num < value)
            return false
        sequence.push(value)
    }
}

// TESTE
const input = 67

console.log(isFibonacciSequence(input))