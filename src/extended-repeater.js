module.exports = function repeater(str, options) {
  let separator,additionSeparator,additionRepeatTimes;
  if(typeof options.separator=='undefined'){
    separator='+';
  }
  else{
    separator=options.separator;
  }
  if(typeof options.additionSeparator=='undefined'){
    additionSeparator='';
  }
  else{
    additionSeparator=options.additionSeparator;
  }
  if(typeof options.additionRepeatTimes=='undefined'){
    additionRepeatTimes=1;
    additionSeparator='';
  }
  else{
    additionRepeatTimes=options.additionRepeatTimes;
  }
  if(typeof options.addition!='undefined'){
  for(let j=0;j<additionRepeatTimes;j++){
    if(j==additionRepeatTimes-1){
      str=str+options.addition;
    }else{
    str=str+''+options.addition+additionSeparator;
  }}}
  let temp=str;
  for( let i=0;i<options.repeatTimes-1;i++){
  str=str+''+separator+temp;
  }
  return str;
};
  