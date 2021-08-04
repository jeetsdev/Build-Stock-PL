const domForms = document.forms[0];
const domBody = document.querySelector("body");
const outputSec = document.querySelector(".output-sec");
const outputText = document.querySelector('.output-text');
const outputGif = document.querySelector("#output-gif");

domForms.addEventListener("submit", () => {
    let buyingPrice = domForms[0].value;
    let buyingQuantity = domForms[1].value;
    let currentPrice = domForms[2].value;
    let buyValue = buyingPrice * buyingQuantity;
    let currentValue = currentPrice * buyingQuantity;
    let totalValuation = (currentValue - buyValue);
    let totoalPercentage = (totalValuation * 100 / buyValue.toFixed(2));
    if (totalValuation >= 1 && totoalPercentage >= 50) {
        domBody.style.backgroundColor = "#4c4cc9";
        outputText.textContent = (`Yay !!! you have gain a profit of ${totalValuation} rupees and the profit percentage is ${totoalPercentage}%.`);
        outputGif.src = 'profit.gif';
    } else if (totalValuation >= 1 && (totoalPercentage < 50 && totoalPercentage > 1)) {
        domBody.style.backgroundColor = "#4c4cc9";
        outputText.textContent = (`Yay !!! you have gain a profit of ${totalValuation} rupees and the profit percentage is ${totoalPercentage}%.`);
        outputGif.src = 'happy.gif';

    } else if (totalValuation === 0 && totoalPercentage === 0) {
        domBody.style.backgroundColor = "#4c4cc9";
        outputText.textContent = (`Niether profit nor loss, Stock is at the same price.`);
        outputGif.src = "better.jpeg";
    } else if (totalValuation < 1 && totoalPercentage > -50) {
        domBody.style.backgroundColor = "#4c4cc9";
        outputGif.src = 'sad.gif';
        outputText.textContent = (`Oops !!! you have made a loss of ${Math.abs(totalValuation)} ruppes and the loss percentage is ${Math.abs(totoalPercentage)}%.`);
    } else if (totalValuation < 1 && (totoalPercentage < -50)) {
        domBody.style.backgroundColor = "black";
        outputGif.src = 'loss.gif';
        outputText.textContent = (`Oops !!! you have made a loss of ${Math.abs(totalValuation)} ruppes and the loss percentage is ${Math.abs(totoalPercentage)}%.`);
    }
    outputSec.style.visibility = 'visible';
})