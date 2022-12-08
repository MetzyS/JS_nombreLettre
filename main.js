let unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
let dix = ['dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
let dizaine = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
let centaine = ['', 'cent', 'deux-cent', 'trois-cent', 'quatre-cent', 'cinq-cent', 'six-cent', 'sept-cent', 'huit-cent', 'neuf-cent'];
let milliers = ['', 'mille', 'deux-mille'];
let numberInput = prompt("Entrez un nombre entre 0 et 2000");
let querySel = document.querySelector("button");
querySel.addEventListener("click", (e) => {
    inputNum(numberInput);
});

/**
 * Converti l'entrée en tableau, puis le tableau en mots.
 * @param {int} x
 * @return {string} 
 */

function inputNum(x) {
    x = numberInput;
    if (isNaN(numberInput)) {
        alert("Erreur. Votre entrée (" + x + ") ne correspond pas a un nombre.");
    }
    else if (x < 0 || x > 2000) {
        alert(x + " n'est pas compris entre: 0 et 2000");
    }
    else {
        x = parseInt(x) + "";
        array1 = Array.from(x, Number);
        console.log(array1);

        switch (array1.length) {
            case 0:
                console.log("Error");
                break;
            case 1:
                console.log(array1 + " correspond à: " + unite[array1[0]]);
                break;
            case 2:
                if (array1[0] === 1) {
                    console.log(dix[array1[1]]);
                }
                else if (array1[0] === 2 || array1[0] === 3 || array1[0] === 4 || array1[0] === 5 || array1[0] === 6) {
                    if (array1[1] === 1) {
                        console.log(dizaine[array1[0]] + " et " + unite[array1[1]]);
                    }
                    else {
                        console.log(dizaine[array1[0]] + "-" + unite[array1[1]]);
                    }
                }
                else {
                    console.log(dizaine[array1[0]] + " " + unite[array1[1]]);
                }
                break;
            case 3:
                if (array1[1] === 1) {
                    console.log(centaine[array1[0]] + " " + dix[array1[2]]);
                }
                else if (array1[1] === 2 || array1[1] === 3 || array1[1] === 4 || array1[1] === 5 || array1[1] === 6) {
                    if (array1[2] === 1) {
                        console.log(centaine[array1[0]] + " " + dizaine[array1[1]] + " et " + unite[array1[2]]);
                    }
                    else {
                        console.log(centaine[array1[0]] + " " + dizaine[array1[1]] + "-" + unite[array1[2]]);
                    }
                }
                else {
                    console.log(centaine[array1[0]] + " " + dizaine[array1[1]] + " " + unite[array1[2]]);
                }
                break;
            case 4:
                if (array1[2] === 1) {
                    console.log(milliers[array1[0]] + " " + centaine[array1[1]] + " " + dix[array1[2]]);
                }
                else if (array1[2] === 2 || array1[2] === 3 || array1[2] === 4 || array1[2] === 5 || array1[2] === 6) {
                    if (array1[3] === 1) {
                        console.log(milliers[array1[0]] + " " + centaine[array1[1]] + " " + dizaine[array1[2]] + " et " + unite[array1[3]]);
                    }
                    else {
                        console.log(milliers[array1[0]] + " " + centaine[array1[1]] + " " + dizaine[array1[2]] + "-" + unite[array1[3]]);
                    }
                }
                else {
                    console.log(milliers[array1[0]] + " " + centaine[array1[1]] + " " + dizaine[array1[2]] + " " + unite[array1[3]]);
                }
                break;
            default: alert("Erreur.");
                break;
        }
    }
}

// function showEveryNumber() {
//     for (i = 1; i < 2001; i++) {
//         console.log(inputNum(i + ""));
//     }
// }

// for (i = 1; i < 2000; i++) {
//     console.log(inputNum(i + ""));
// }
