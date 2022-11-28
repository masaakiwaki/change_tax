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

const generateCopyElement = (createKey, createValue) => {
  let blockItem = document.createElement("div");
  blockItem.setAttribute("class", "displapyInfoChild displapyInfoChildBlock");

  let itemNameDisplay = document.createElement("label");
  itemNameDisplay.setAttribute("class", "displapyInfoChild displapyInfoChildLabel");
  itemNameDisplay.setAttribute("id", createKey);
  itemNameDisplay.innerHTML = createValue;
  blockItem.appendChild(itemNameDisplay);

  let generateButton = document.createElement("button");
  generateButton.innerHTML = "コピー";
  generateButton.setAttribute("class", "copy-button taxAmountCopy");
  generateButton.setAttribute("id", `generateButton${createKey}`);
  generateButton.setAttribute("value", createKey);
  blockItem.appendChild(generateButton);

  displapyInfo.appendChild(blockItem);
}


generateInputElement("tax", "税率");
document.getElementById("tax").setAttribute("value", "10")

generateInputElement("amount", "値");



const generateButtonElement = (createKey, createValue) => {
  let generateButton = document.createElement("a");
  generateButton.innerHTML = createValue;
  generateButton.setAttribute("class", "original-button");
  generateButton.setAttribute("id", `generateButton${createKey}`);
  generateButton.setAttribute("value", createKey);
  blockButton.appendChild(generateButton);
}

let blockButton = document.createElement("div");
blockButton.setAttribute("class", "displapyInfoChild displapyInfoChildBlock displapyInfoChildBlockButton");

generateButtonElement("InTax", "税込に変換");
generateButtonElement("OutTax","税別に変換");

displapyInfo.appendChild(blockButton);







let taxCopyElement = document.getElementsByClassName("copy-button taxAmountCopy");
let taxCopyElements = Array.from(taxCopyElement);
taxCopyElements.forEach(function(element) {
  element.addEventListener("click", copyAmountValue); 
});

alert(taxCopyElement)

function copyAmountValue(event) {
  alert("dfsa")
  selectId = event.target.id;
  alert(selectId);
}





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
  let taxBool = ""
  
  if (event.target.id == 'generateButtonInTax') {
    resultTax = getAmount / getTax;
    resultAmout = (getTax + 100) * getAmount / 100;
    taxBool = "税込"
  } else if (event.target.id == 'generateButtonOutTax') {
    resultTax = getAmount - (getAmount / (getTax + 100) * 100);
    resultAmout = getAmount / (getTax + 100) * 100;
    taxBool = "税別"
  }

  let resultAmoutYenStyle = Number(resultAmout).toLocaleString()
  let resultAmoutYenStyleArray = [resultAmout, resultAmoutYenStyle, `\xA5${resultAmoutYenStyle}.-`, `${resultAmoutYenStyle}円(${taxBool})`]

  if (document.getElementById("resultTax") == null){
    generateInputElement("resultTax", "税額");
    generateInputElement("resultAmount", "変換後の値");
    resultAmoutYenStyleArray.forEach(function(value, index){
      console.log("value:" + value + ", index:" + index);
      generateCopyElement(`copy${index}`, value);
    });
  }

  document.getElementById("resultTax").setAttribute("value", resultTax);
  document.getElementById("resultAmount").setAttribute("value", resultAmout);
  resultAmoutYenStyleArray.forEach(function(value, index){
    document.getElementById(`copy${index}`).innerHTML = value;
  });

}



