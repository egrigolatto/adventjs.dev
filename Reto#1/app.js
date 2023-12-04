"use strict"

function findFirstRepeated(gifts) {
  
  let nrosVistos = []; // almacenar los numeros que se van recorriendo

  for (let index = 0; index < gifts.length; index++) {
    const nro = gifts[index];
    //console.log(nro);
    if (nrosVistos.includes(nro)) {
      return nro
    } else {
      nrosVistos.push(nro)
    }
  }

  return -1;
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3


const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1


const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5