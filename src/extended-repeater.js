const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    function repeater(str, options){
    let full_string='';
    if (options['repeatTimes']!==undefined){
        for (let i=1; i<=options['repeatTimes']; i++){
            full_string=full_string+str;
            if (options['additionRepeatTimes']!==undefined){
                for (let j=1; j<=options['additionRepeatTimes']; j++){
                    full_string=full_string+options['addition'];
                    if (j!==options['additionRepeatTimes']){
                        if (options['additionSeparator']!==undefined) {
                            full_string=full_string+options['additionSeparator'];
                        }else{
                            full_string=full_string+options['addition']+'|'
                        }
                    }

                }
            }
            if (i!==options['repeatTimes']){
                if (options['separator']!==undefined){
                    full_string=full_string+options['separator']
                }else{
                    full_string=full_string+'+';
                }
            }

        }
    }
    return full_string
    }
};


