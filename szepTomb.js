function szepTomb(tomb) {
    // Ellenőrzi, hogy a paraméter tömb típusú-e
    if (!Array.isArray(tomb)) {
        return false;
    }

   
    const elsoTipus = typeof tomb[0];
    for (let i = 1; i < tomb.length; i++) {
        if (typeof tomb[i] !== elsoTipus) {
            return false;
        }
    }

   
    return true;
}


let eredmeny1 = szepTomb([1, 2, 3, 4, 5]); // true
let eredmeny2 = szepTomb(["a", "b", "c"]); // true
let eredmeny3 = szepTomb([1, "two", 3]); // false
let eredmeny4 = szepTomb("nemTomb"); // false

console.log(eredmeny1);
console.log(eredmeny2);
console.log(eredmeny3);
console.log(eredmeny4);
