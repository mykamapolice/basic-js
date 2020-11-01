const CustomError = require("../extensions/custom-error");

let mass=[1];
let i=1;

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      array.forEach(function (element){
        if (typeof(element)==='object'){
            i=i+1;
            let x= new DepthCalculator();
            x.calculateDepth(element);
        }
        if (mass.indexOf(i)===(-1)){
            mass.push(i);
            i=1;}
       })
        let max=mass[0];
        for (let j=1; j<mass.length; j++){
            if (max<mass[j]){
                max=mass[j];
            }
        }
        return max;
        }
  }