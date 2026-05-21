let num1 = 10
let num2 = 5
let op = "-"

if (op == "+") {
    let res = (`${num1} + ${num2}`)
    console.log(`${num1} + ${num2} = ${res}`)
} else if (op == "-") {
    let res = (`${num1} - ${num2}`)
    console.log(`${num1} - ${num2} = ${res}`)
} else if (op == "*") {
    let res = (`${num1} * ${num2}`)
    console.log(`${num1} * ${num2} = ${res}`)
} else if (op == "/") {
    if (num2 == 0)
        console.log("Não é possível calcular!")
}