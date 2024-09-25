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

function calcular() {
    let catetoOposto = Number(document.getElementById('catetoOposto').value);
    let catetoAdjacente =Number(document.getElementById('catetoAdjacente').value);

    // Calcular a hipotenusa usando o Teorema de Pitágoras
    let hipotenusa = Math.sqrt(Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));

    // Calcular seno, cosseno e tangente
    let seno = catetoOposto / hipotenusa;
    let cosseno = catetoAdjacente / hipotenusa;
    let tangente = catetoOposto / catetoAdjacente;

    // resultados
    document.getElementById('resultado').innerHTML = `
        <p><strong>Hipotenusa:</strong> ${hipotenusa.toFixed(2)}</p>
        <p><strong>Seno:</strong> ${seno.toFixed(2)}</p>
        <p><strong>Cosseno:</strong> ${cosseno.toFixed(2)}</p>
        <p><strong>Tangente:</strong> ${tangente.toFixed(2)}</p>
    `;
}