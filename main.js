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











let calculation = document.getElementsByClassName("original-button");
let calculations = Array.from(calculation);

calculations.forEach(function(element) {
  element.addEventListener("click", calculationClick); 
})

function calculationClick(event) {
  const getTax = amountValidation(document.getElementById("tax").value);
  const getAmount = amountValidation(document.getElementById("amount").value);
  
  let resultTax = ""
  let resultAmout = ""
  let taxBool = ""
  let notTaxBool = ""
  
  if (event.target.id == 'generateButtonInTax') {
    resultTax = getAmount / getTax;
    resultAmout = (getTax + 100) * getAmount / 100;
    taxBool = "税込"
    notTaxBool = "税別"
  } else if (event.target.id == 'generateButtonOutTax') {
    resultTax = getAmount - (getAmount / (getTax + 100) * 100);
    resultAmout = getAmount / (getTax + 100) * 100;
    taxBool = "税別"
    notTaxBool = "税込"
  }

  let resultAmoutYenStyle = Number(resultAmout).toLocaleString()
  let resultAmoutYenStyleArray = [resultAmout, 
                                  resultAmoutYenStyle,
                                  `\xA5${resultAmoutYenStyle}.-`,
                                  `${resultAmoutYenStyle}円(${taxBool})`,
                                  `${Number(getAmount).toLocaleString()}円(${notTaxBool})`,
                                  ]

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

  let = taxCopyElement = document.getElementsByClassName("copy-button taxAmountCopy");
  let = taxCopyElements = Array.from(taxCopyElement);

  taxCopyElements.forEach(function(element) {
    element.addEventListener("click", copyAmountValue); 
  });
  
}



function copyAmountValue(event) {
  selectId = event.target.id;
  
  copyId = selectId.substr(14);
  copyIdElement = document.getElementById(copyId);
  navigator.clipboard.writeText(copyIdElement.innerHTML);
}

const amountValidation = (str) => {
  str = hankaku2Zenkaku(str);
  str = dotHankaku2Zenkaku(str);
  str = findInteger(str);
  return Number(str);
};

const hankaku2Zenkaku = (str) => {
  return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
  });
};

const findInteger = (str) => {
  return str.replace(/[^0-9.]/g, "");
};

const dotHankaku2Zenkaku = (str) => {
  return str.replace(/[．０-９]/g, function (wc){
    var zen="．。０１２３４５６７８９",han = "..0123456789";return han[zen.indexOf(wc)];
  });
};

