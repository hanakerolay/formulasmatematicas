function segundograu() {
    let valorA = Number(document.getElementById("A1").value);
    let valorB = Number(document.getElementById("B1").value);
    let valorC = Number(document.getElementById("C1").value);

    let delta = (valorB ** 2) - (4 * valorA * valorC);
    if (delta < 0) {
        document.getElementById("segundograu").innerText = "A equação não possui raízes reais.";
    } else {
        let x1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
        let x2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        document.getElementById("segundograu").innerText = "x1 = " + x1 + " -- " + "x2 = " + x2;
    }
}


function calcularHipotenusa() {
    // Pegando os valores dos catetos
    let catetoOpos = Number(document.getElementById("catetoOpos").value);
    let catetoAdjacen = Number(document.getElementById("catetoAdjacen").value);

    // Calculando a hipotenusa usando o Teorema de Pitágoras
    let hipotenusa = Math.sqrt(Math.pow(catetoOpos, 2) + Math.pow(catetoAdjacen, 2));

    // Exibindo o resultado
    document.getElementById("resultado").innerText = `A hipotenusa é: ${hipotenusa.toFixed(2)}`;
}


function calcularRelacTrigonomet() {
    // Pegando os valores dos catetos e da hipotenusa
    let catetoOposto = parseFloat(document.getElementById("catetoOposto").value);
    let catetoAdjacente = parseFloat(document.getElementById("catetoAdjacente").value);
    let hipotenusa = parseFloat(document.getElementById("hipotenusa").value);

    // Calculando as relações trigonométricas
    let seno = catetoOposto / hipotenusa;
    let cosseno = catetoAdjacente / hipotenusa;
    let tangente = catetoOposto / catetoAdjacente;

    // Exibindo os resultados
    document.getElementById("resultadoSeno").innerText = `Seno: ${seno.toFixed(4)}`;
    document.getElementById("resultadoCosseno").innerText = `Cosseno: ${cosseno.toFixed(4)}`;
    document.getElementById("resultadoTangente").innerText = `Tangente: ${tangente.toFixed(4)}`;
}
