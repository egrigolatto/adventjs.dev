'use strict'

function manufacture(gifts, materials) {
    const result = [];

    for (const gift of gifts) {
        const giftLetters = new Set(gift);
        let canManufacture = true;

        for (const letter of giftLetters) {
            if (!materials.includes(letter)) {
                canManufacture = false;
                break;
            }
        }

        if (canManufacture) {
            result.push(gift);
        }
    }

    return result;
}



const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

 console.log(manufacture(gifts, materials)); // ["tren", "oso"]
// // 'tren' SÍ porque sus letras están en 'tronesa'
// // 'oso' SÍ porque sus letras están en 'tronesa'
// // 'pelota' NO porque sus letras NO están en 'tronesa'

// const gifts = ['juego', 'puzzle']
// const materials = 'jlepuz'

// manufacture(gifts, materials) // ["puzzle"]

// const gifts = ['libro', 'ps5']
// const materials = 'psli'

// manufacture(gifts, materials) // []