let idade = 68

if (idade < 18) {
    let ingresso = "R$10"
    console.log(`O valor do ingresso para pessoas menores de 18 anos é ${ingresso}`)
} else if (idade >= 18 && idade <= 59) {
    let ingresso = "R$20"
    console.log(`O valor do ingresso para pessoas maiores de 18 anos e menores que 59 anos é ${ingresso}`)
} else {
    let ingresso = "R$5"
    console.log(`O valor do ingresso para pessoas maiores de 60 anos é ${ingresso}`)
}