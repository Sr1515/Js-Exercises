window.addEventListener("load", function () {
    const botao = document.querySelector("button");
    const div1 = document.getElementById("um");
    const div2 = document.getElementById("dois");
    const div3 = document.getElementById("tres");
    const div4 = document.getElementById("quatro");
    const div5 = document.getElementById("cinco");
    const div6 = document.getElementById("seis");

    botao.addEventListener("click", function () {
        let um = 0;
        let dois = 0;
        let tres = 0;
        let quatro = 0;
        let cinco = 0;
        let seis = 0;


        for (let i = 0; i < 1000000; i++) {
            let valor = Math.floor(Math.random() * 6 + 1);
            switch (valor) {
                case 1: um++;
                    break;
                case 2: dois++;
                    break;
                case 3: tres++;
                    break;
                case 4: quatro++;
                    break;
                case 5: cinco++;
                    break;
                case 6: seis++;
                    break;
            }
        }

        const resultado = document.getElementById("resultado");
        div1.textContent = `Número 1: ${um} vezes`;
        div2.textContent = `Número 2: ${dois} vezes`;
        div3.textContent = `Número 3: ${tres} vezes`;
        div4.textContent = `Número 4: ${quatro} vezes`;
        div5.textContent = `Número 5: ${cinco} vezes`;
        div6.textContent = `Número 6: ${seis} vezes`;
        console.log(um + dois + tres + quatro + cinco + seis);

    })
})