let displapyInfo = document.getElementById("displapyInfo");

const generateInputElement = (createKey, createValue) => {
  let blockItem = document.createElement("div");
  blockItem.setAttribute("class", "displapyInfoChild displapyInfoChildBlock");

  let itemNameDisplay = document.createElement("label");
  itemNameDisplay.setAttribute("class", "displapyInfoChild displapyInfoChildLabel");
  itemNameDisplay.innerHTML = createValue;
  blockItem.appendChild(itemNameDisplay);

  let itemNameInput = document.createElement("input");
  itemNameInput.setAttribute("class", "displapyInfoChild displapyInfoChildInput");
  itemNameInput.setAttribute("id", createKey);
  blockItem.appendChild(itemNameInput);

  displapyInfo.appendChild(blockItem);
}


generateInputElement("tax", "税率");
document.getElementById("tax").setAttribute("value", "10")

generateInputElement("amount", "値");


let generateRadioElement = (createKey, createValue) => {
  let blockRadio = document.createElement("div");
  blockRadio.setAttribute("class", "displapyInfoChild displapyInfoChildBlock");
  
  let itemRadio = document.createElement("input");
  itemRadio.setAttribute("type", "checkbox");
  itemRadio.setAttribute("id", "switch");
  
  blockRadio.appendChild(itemRadio);
  displapyInfo.appendChild(blockRadio);

}



let blockButton = document.createElement("div");
blockButton.setAttribute("class", "displapyInfoChild displapyInfoChildBlock displapyInfoChildBlockButton");

let generateButtonInTax = document.createElement("a");
generateButtonInTax.innerHTML = "税込に変換";
generateButtonInTax.setAttribute("class", "original-button");
generateButtonInTax.setAttribute("id", "generateButtonInTax");
generateButtonInTax.setAttribute("value", "InTax");
blockButton.appendChild(generateButtonInTax);

let generateButtonOutTax = document.createElement("a");
generateButtonOutTax.innerHTML = "税別に変換";
generateButtonOutTax.setAttribute("class", "original-button");
generateButtonOutTax.setAttribute("id", "generateButtonOutTax");
generateButtonOutTax.setAttribute("value", "OutTax");
blockButton.appendChild(generateButtonOutTax);

displapyInfo.appendChild(blockButton);


let calculation = document.getElementsByClassName("original-button");
let calculations = Array.from(calculation);

calculations.forEach(function(element) {
  element.addEventListener("click", calculationClick); 
})

function calculationClick(event) {
  const getTax = Number(document.getElementById("tax").value);
  const getAmount = Number(document.getElementById("amount").value);
  
  let resultTax = ""
  let resultAmout = ""
  
  if (event.target.id == 'generateButtonInTax') {
    resultTax = getAmount / getTax;
    resultAmout = (getTax + 100) * getAmount / 100;
  } else if (event.target.id == 'generateButtonOutTax') {
    resultTax = getAmount - (getAmount / (getTax + 100) * 100);
    resultAmout = getAmount / (getTax + 100) * 100;
  }

  if (document.getElementById("resultTax") == null){
    generateInputElement("resultTax", "税額");
    generateInputElement("resultAmount", "変換後の値");
  }

  document.getElementById("resultTax").setAttribute("value", resultTax);
  document.getElementById("resultAmount").setAttribute("value", resultAmout);

}

