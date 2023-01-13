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

const amountValidation = (str) => {
    str = hankaku2Zenkaku(str);
    str = dotHankaku2Zenkaku(str);
    str = findInteger(str);
    return Number(str);
  };



const outTaxCalc = (getTax, getAmount) => {
    resultTax = getAmount / getTax
    resultAmout = (getTax + 100) * getAmount / 100
    return [resultTax, resultAmout] 
}


const inTaxCalc = (getTax, getAmount) => {
    resultTax = getAmount - (getAmount / (getTax + 100) * 100)
    resultAmout = getAmount / (getTax + 100) * 100
    return [resultTax, resultAmout] 
}





const appdata = {
    data() {
        return {
            taxRate: 10,
            amount: "",
            resultTax: "",
            resultAmout: "" 


        }
    },
    methods:{
        taxCalc(event){
            this.amount = amountValidation(String(this.amount)) 
            if (event.target.id == 'out-tax') {
                result = outTaxCalc(this.taxRate, this.amount)
                this.resultTax = (Math.floor(result[0] * 100)) / 100
                this.resultAmout = (Math.floor(result[1] * 100)) / 100
            } else if (event.target.id == 'in-tax') {
                result = inTaxCalc(this.taxRate, this.amount)
                this.resultTax = (Math.floor(result[0] * 100)) / 100
                this.resultAmout = (Math.floor(result[1] * 100)) / 100
            } 
            }
        }
    }


let app = Vue.createApp(appdata).mount('#app')


