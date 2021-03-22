const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity!='string'){
    return false;
  }
  if(isNaN(+sampleActivity)){
    return false;
  }
  if(+sampleActivity>MODERN_ACTIVITY||sampleActivity<=0){
    return false;
  }
  let k=0.693/HALF_LIFE_PERIOD;
  let res=Math.log(MODERN_ACTIVITY/+sampleActivity)/k;
  return Math.ceil(res);
};
