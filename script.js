const domForms = document.forms[0];
const domBody = document.querySelector("body");
const outputSec = document.querySelector(".output-sec");
const outputText = document.querySelector(".output-text");
const outputGif = document.querySelector("#output-gif");

domForms.addEventListener("submit", () => {
  let buyingPrice = Number(domForms[0].value);
  let buyingQuantity = Number(domForms[1].value);
  let currentPrice = Number(domForms[2].value);
  let buyValue = buyingPrice * buyingQuantity;
  let currentValue = currentPrice * buyingQuantity;
  let totalValuation = currentValue - buyValue;
  let totoalPercentage = ((totalValuation * 100) / buyValue).toFixed(2);
  if (buyingPrice <= 0 || buyingQuantity <= 0 || currentPrice <= 0) {
    setStyle("#4c4cc9", "Please enter valid amounts.", "images/please.gif");
  } else if (totalValuation >= 1 && totoalPercentage >= 50) {
    setStyle(
      "#4c4cc9",
      `Yay !!! you have gain a profit of ${totalValuation} rupees and the profit percentage is ${totoalPercentage}%.`,
      "images/profit.gif"
    );
  } else if (
    totalValuation >= 1 &&
    totoalPercentage < 50 &&
    totoalPercentage > 1
  ) {
    setStyle(
      "#4c4cc9",
      `Yay !!! you have gain a profit of ${totalValuation} rupees and the profit percentage is ${totoalPercentage}%.`,
      "images/happy.gif"
    );
  } else if (totalValuation == 0 && totoalPercentage == 0) {
    setStyle(
      "#4c4cc9",
      `Niether profit nor loss, Stock is at the same price.`,
      "images/better.jpeg"
    );
  } else if (totalValuation < 1 && totoalPercentage > -50) {
    setStyle(
      "#4c4cc9",
      `Oops !!! you have made a loss of ${Math.abs(
        totalValuation
      )} ruppes and the loss percentage is ${Math.abs(totoalPercentage)}%.`,
      "images/sad.gif"
    );
  } else if (totalValuation < 1 && totoalPercentage <= -50) {
    setStyle(
      "black",
      `Oops !!! you have made a loss of ${Math.abs(
        totalValuation
      )} ruppes and the loss percentage is ${Math.abs(totoalPercentage)}%.`,
      "images/loss.gif"
    );
  }
  outputSec.style.visibility = "visible";
});

function setStyle(bgColor, textOutput, srcGif) {
  domBody.style.backgroundColor = `${bgColor}`;
  outputGif.src = `${srcGif}`;
  outputText.textContent = `${textOutput}`;
}
