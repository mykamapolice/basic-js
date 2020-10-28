const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }

  let arr = [];
  let res = '';
  members.forEach(member => {
    if (typeof member === 'string') {
      arr.push(member.trim().toUpperCase());
    }
  })
  arr.sort().forEach(item => res += item[0]);

  return res;
};
