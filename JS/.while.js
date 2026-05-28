// Enquanto eu não comer 100 fatias de pizza, eu não vou embora!
// Enquanto fatis < 100 --> vou comer pizza!

let fatias = 0

while (fatias < 100) {
    console.log(`Ainda tenho que comer mais! Estou comendo a ${fatias}° fatia!`)
    fatias++
} if (fatias >= 100) {
    console.log("Comi 100 fatias!")
}