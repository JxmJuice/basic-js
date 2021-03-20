const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length==0)
  return false;
  let str='',temp='';
  for (let i = 0; i < members.length; i++) 
  {
    temp=members[i].split('');
    for(let j=0;j<members[i].length;j++){
    if(temp[0]==' '){
      temp.splice(0,1);
    }
    if (typeof members[i] == "string" && temp[0]==temp[0].toUpperCase()) {
      str=str+temp[0];}

    }
  }
  str=str.split("").sort().join("");
  return str;
  // remove line with error and write your code here
};
