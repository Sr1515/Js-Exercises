window.addEventListener("load", function () {
    const div1 = document.getElementById("Fahrenheit");
    const div2 = document.getElementById("Kelvin");
    const texto = document.getElementById("entrada");

    div1.textContent = `---`;
    div2.textContent = `---`;

    function converterFahrenheit(temperatura) {
        if (temperatura == " ") {
            return "---";
        }
        else if (isNaN(temperatura)) {
            return "---";
        }
        else {
            return `Kelvin: ${Math.round(9 * temperatura + 160) / 5} °F`;;
        }

    }

    function converterKelvin(temperatura) {
        if (temperatura == " ") {
            return "---"
        }
        else if (isNaN(temperatura)) {
            return "---";
        }
        else {
            return `Fahrenheit: ${Math.round(temperatura + 273)} K`;
        }
    }

    texto.addEventListener("keyup", function () {
        div1.textContent = converterFahrenheit(Number(texto.value));
        div2.textContent = converterKelvin(Number(texto.value));

    });
});