function otoslotto() {
    let lotto_szamok = [];

    while (lotto_szamok.length < 5) {
        let veletlenszam = Math.floor(Math.random() * 90) + 1;
        if (!lotto_szamok.includes(veletlenszam)) {
            lotto_szamok.push(veletlenszam);
        }
    }

    lotto_szamok.sort((a, b) => a - b);
    return lotto_szamok;
}

let nyeroszamok = otoslotto();
console.log("Az ötös lottó nyerőszámai:", nyeroszamok);