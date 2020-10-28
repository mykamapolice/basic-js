const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined){return 'Unable to determine the time of year!';}
  if (!(date instanceof Date && !isNaN(date))){throw new Error}
  var month = date.getMonth(date);
  month++;
  if (month === 12 || month === 1 || month === 2){
    if (month === 2 && date.getDay() > 28){
      return 'sping';
    }
    return 'winter';
  } else if (month === 3 || month === 4 || month === 5){
    return 'spring';
  } else if (month === 6 || month === 7 || month === 8){
    return 'summer'
  } else if (month === 9 || month === 10 || month === 11){
    return 'autumn'
  }
};
