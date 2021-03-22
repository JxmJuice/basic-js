module.exports = function transform(arr) {
  let newArr=arr;
  for(let i=0;i<newArr.length;i++){
    if(newArr[i]==`--discard-next`){
      if(typeof newArr[i+1] =='undefined'){
        newArr.splice(i,1);
        i--;
      }else{
  newArr.splice(i+1,1);
}
}
  if(newArr[i]==`--discard-prev`){
    if(typeof newArr[i-1] =='undefined'){
      newArr.splice(i,1);
      i--;
    }else{
    newArr.splice(i-1,1);
  }}
  if(newArr[i]==`--double-next`){
    if(typeof newArr[i+1] =='undefined'){
      newArr.splice(i,1);
      i--;
          }else{
    newArr[i]=newArr[i+1];
  }}
  if(newArr[i]==`--double-prev`){
    if(typeof newArr[i-1] =='undefined'){
      newArr.splice(i,1);
      i--;
    }else{
    newArr[i]=newArr[i-1];
  }
  }
}
for(let i=0;i<newArr.length;i++){
  if(newArr[i]==`--discard-next`){
    arr.splice(i,1);
    i--;
}
if(newArr[i]==`--discard-prev`){
  arr.splice(i,1);
  i--;
}
if(newArr[i]==`--double-next`){
  arr.splice(i,1);
  i--;
}
if(newArr[i]==`--double-prev`){
  arr.splice(i,1);
  i--;
}
}
  return newArr;
};
