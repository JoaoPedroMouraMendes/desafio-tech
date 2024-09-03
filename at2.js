// Função para obter a quantidade de repetição da letra a
// "param" deve ser uma string
function getRetitionOfA(param) {
    if (typeof param != "string")
        return null
    
    const result = param.toLowerCase().split("a")
    return result.length - 1
}

// TESTE
const input = "você GOSTA de chocolate?"

console.log(getRetitionOfA(input))