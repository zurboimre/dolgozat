function szamokatCsoportosit(szoveg) {
    let szamok = szoveg.split(',').map(Number);

    
    let csoportositottSzamok = {
        pozitiv: [],
        nulla: [],
        negativ: []
    };

    szamok.forEach(szam => {
        if (szam > 0) {
            csoportositottSzamok.pozitiv.push(szam);
        } else if (szam === 0) {
            csoportositottSzamok.nulla.push(szam);
        } else {
            csoportositottSzamok.negativ.push(szam);
        }
    });

    return csoportositottSzamok;
}


let szoveg = "3,-2,0,7,-1,0,8";
let eredmeny = szamokatCsoportosit(szoveg);
console.log(eredmeny);