// 04 - Do While
function exemploDoWhile() {
    let limite = parseInt(document.getElementById("num4").value);
    let i = 0;
    let texto = "Contando: ";
    do {
        texto += i + " ";
        i++;
    } while (i <= limite);
    document.getElementById("saida4").innerText = texto;
}

// 05 - While
function exemploWhile() {
    let limite = parseInt(document.getElementById("num5").value);
    let i = 0;
    let texto = "Contando: ";
    while (i <= limite) {
        texto += i + " ";
        i++;
    }
    document.getElementById("saida5").innerText = texto;
}

// // 06 - For
// function exemploFor() {
//     let limite = parseInt(document.getElementById("num6").value);
//     let texto = "Contando: ";
//     for (let i = 0; i <= limite; i++) {
//         texto += i + " ";
//     }
//     document.getElementById("saida6").innerText = texto;
// }