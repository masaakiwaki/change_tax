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
  itemRadio.setAttribute("type", "radio");

}






let blockButton = document.createElement("div");
blockButton.setAttribute("class", "displapyInfoChild displapyInfoChildBlock displapyInfoChildBlockButton");

let generateButton = document.createElement("a");
generateButton.innerHTML = "計算";
generateButton.setAttribute("class", "original-button");
generateButton.setAttribute("id", "generateButton");
blockButton.appendChild(generateButton);
displapyInfo.appendChild(blockButton);


let calculation = document.getElementById('generateButton')
calculation.addEventListener("click", calculationClick); 

function calculationClick() {
    const getTax = Number(document.getElementById("tax").value);
    const getAmount = Number(document.getElementById("amount").value);

    const resultTax = getAmount / getTax
    const resultAmout = (getTax + 100) * getAmount / 100
    
    if (document.getElementById("resultTax") == null){
      generateElement("resultTax", "税額");
      generateElement("resultAmount", "変換後の値");
    }

    document.getElementById("resultTax").setAttribute("value", resultTax);
    document.getElementById("resultAmount").setAttribute("value", resultAmout);


    // alert(getTax * getAmount);

  }

