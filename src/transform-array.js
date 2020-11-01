const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
     if (typeof (arr)!=='object'){
        return 'Error, arr is not an object'
    }
    let new_arr=arr;
    for (let i=0; i<new_arr.length; i++){
        if (new_arr[i]==='--discard-next'){
            new_arr.splice(i, 2)
        }
        if (new_arr[i]==='--discard-prev'){
            new_arr.splice(i-1, 2)
        }
        if (new_arr[i]==='--double-next'){
            new_arr.splice(i,1,arr[i+1])
        }
        if (new_arr[i]==='--double-prev'){
            new_arr.splice(i,1,arr[i-1])
        }
    }
    return new_arr
};
