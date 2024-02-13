// Selecionar elementos

const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Função para converter as unidades
function convert() {
    const fromValue = fromElement.value;
    const toValue = toElement.value;
    console.log(fromValue, toValue);

    if (fromValue === toValue){
        outputElement.value = inputElement.value;
        messageElement.textContent = "";
        return;
    }

    // Converter para metros
    let meters;
    switch (fromValue) {
        case "km":
            meters = inputElement.value * 1000;
            break;
        case "m":
            meters = inputElement.value;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "mm":
            meters = inputElement.value / 1000;
            break;
    }

    // Converter metros para unidade de saida
    let result;
    switch (toValue) {
        case "km":
            result = meters / 1000;
            break;
        case "m":
            result = meters;
            break;
        case "cm":
            result = meters * 100;
            break;
        case "mm":
            result = meters * 1000;
            break;
    }
    console.log(meters, result);

    // Exibir resultado no input
    outputElement.value = result;

    // Exibir resultado na mensagem
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
    console.log(fromLabel, toLabel);

    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
    return;
}

convertButton.addEventListener("click", convert);